import { Lazy, WordPermuted } from '../../type';
import { correctSentenceForPunctuation, removeForbiddenChar, insertMapTable, specialCharMapTable, splitString } from '../../utils';
import compose from '../../utils/compose';
/**
 * Encode sentence.
 * It returns an object with the lazy computation for the encoding and a lazy for the array of words encoded.
 * */
export default function encodeSentence(
  sentence?: string
): {
  encodedSentence: Lazy<string>;
  getCleanedWord: Lazy<string[]>;
} {
  if (!sentence) return { encodedSentence: () => '', getCleanedWord: () => [] };

  const sentenceCorrectedForPunctuation = correctSentenceForPunctuation(sentence);

  // store the special char to re-insert them later
  const mapTable = specialCharMapTable(sentenceCorrectedForPunctuation);

  const wordsPermuted = compose<WordPermuted[]>(
    mapToEncodedWord,
    splitString,
    removeForbiddenChar
  )(sentenceCorrectedForPunctuation);

  const encodedSentence = () => insertMapTable(wordsPermuted.map(w => w.word).join(' '), mapTable);

  return {
    encodedSentence,
    getCleanedWord: () => wordsPermuted.filter(w => w.changed && w.word.length >= 3).map(w => w.originalWord),
  };
}

const mapToEncodedWord = (arr: string[]) => arr.map(encodeWord);
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
