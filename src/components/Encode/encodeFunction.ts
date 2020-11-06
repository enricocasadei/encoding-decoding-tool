/**
 * Encode sentence.
 * It returns an object with the lazy computation for the encoding and a lazy for the array of words encoded.
 * */

import { Lazy, WordPermuted, MapTable } from "../../type";

export default function encodeSentence(
  sentence?: string
): {
  encodedSentence: Lazy<string>;
  getCleanedWord: Lazy<string[]>;
} {
  if (!sentence) return { encodedSentence: () => '', getCleanedWord: () => [] };

  const sentenceCorrectedForPunctuation = correctSentenceForPunctuation(sentence);

  const mapTable = specialCharMapTable(sentenceCorrectedForPunctuation);

  const cleanSentence = getAllowedChar(sentenceCorrectedForPunctuation);

  const arrCleanWord = cleanSentence.split(' ');

  const wordsPermuted = arrCleanWord.map(encodeWord);

  const encodedSentence = () => {
    const newSentenceWithoutSpecialChar = wordsPermuted.map(w => w.word).join(' ');

    return insertMapTable(newSentenceWithoutSpecialChar, mapTable);
  };

  return {
    encodedSentence,
    getCleanedWord: () => wordsPermuted.filter(w => w.changed && w.word.length >= 3).map(w => w.originalWord),
  };
}

/**
 * Encode a single word.
 * It return always a string.
 * In case the word has less than 3 letter, it is returned directly because no shuffle is allowed.
 * It does not manage special chars.
 * */
export function encodeWord(word?: string): WordPermuted {
  if (!word) return { changed: false, word: '', originalWord: '' };
  if (word.length <= 3) return { changed: false, word, originalWord: word };

  return getNewWord(word);
}
/** Helper function. It changes the central letters in the word. It returns always a different word from the old one. */
export function getNewWord(oldWord: string): WordPermuted {
  const arrWord = [...oldWord];
  const firstLetter = arrWord[0];
  const lastLetter = arrWord[arrWord.length - 1];
  let newWord = oldWord;

  arrWord.splice(0, 1);
  arrWord.splice(arrWord.length - 1, 1);
  let loops: number = 0;
  // avoid infinite loop if word is aaaaaaaa
  while (newWord === oldWord && loops < arrWord.length) {
    const shuffledWord = permute(arrWord.join(''));
    newWord = firstLetter + shuffledWord + lastLetter;
    loops++;
  }
  // miss word that are actually changed
  if (newWord !== oldWord) {
    return {
      changed: true,
      word: newWord,
      originalWord: oldWord,
    };
  }
  return {
    changed: false,
    word: newWord,
    originalWord: oldWord,
  };
}

/** Helper function. It permute the string moving the last char in the first index.
 * permutation possible should be the length of word.
 */
export const permute = (w: string): string => {
  if (w === '') return '';
  return [w[w.length - 1], ...w.slice(0, w.length - 1)].join('');
};

/** remove not allowed character from a string */
export const getAllowedChar = (w: string): string => w.replace(/[^a-zA-Z ]/g, '');

/** map not allowed character from a string */
export function specialCharMapTable(sentence: string): MapTable {
  return [...sentence].reduce((acc, curr, index) => {
    if (/[^a-zA-Z ]/.test(curr)) {
      return {
        ...acc,
        [index]: curr,
      };
    } else {
      return acc;
    }
  }, {});
}
/** Insert strings in a string:
 *  based on a mapTable which map the index where the string has to be insert.
 * Basically it is a more powerful 'insertInto' */
export function insertMapTable(sentence: string, mapTable: MapTable) {
  return Object.entries(mapTable).reduce((acc, [idx, str]) => insertInto(acc, parseInt(idx, 10), str), sentence);
}
/** Helper function. It insert a string in a string at a specific index */
export function insertInto(word: string, index: number, str: string) {
  return word.substr(0, index) + str + word.substr(index);
}

/** Helper function. It insert a string in a string at a specific index */
export function correctSentenceForPunctuation(word: string): string {
  return word.replace(/([.,:!?])(?=[^\s])/g, '$1 ');
}

