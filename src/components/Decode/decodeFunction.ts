import { Lazy } from '../../type';
import {
  correctSentenceForPunctuation,
  getAllowedChar,
  insertMapTable,
  specialCharMapTable,
} from '../Encode/encodeFunction';

export default function decodeSentence(
  sentence?: string,
  wordsKey?: string
): Lazy<{
  error: boolean;
  response: string;
}> {
  if (!sentence && !wordsKey)
    return () => ({
      error: false,
      response: '',
    });
  if (!sentence) return () => ({ response: 'Missing sentence', error: true });
  if (!wordsKey) return () => ({ response: 'Missing keys', error: true });

  const sentenceCorrectedForPunctuation = correctSentenceForPunctuation(sentence);

  const mapTable = specialCharMapTable(sentenceCorrectedForPunctuation);

  // get all words and loop
  const arrWords = sentenceCorrectedForPunctuation.split(' ');

  const arrWordCleaned = arrWords.map(getAllowedChar).map(decodeWord);
  console.log(arrWordCleaned);

  return () => ({
    error: false,
    response: insertMapTable(arrWordCleaned.join(' '), mapTable),
  });
}

export function decodeWord(word?: string): string {
  if (!word) return '';
  if (word.length <= 3) return word;

  return getOldWord(word);
}

export function getOldWord(newWord: string): string {
  const arrWord = [...newWord];
  const firstLetter = arrWord[0];
  const lastLetter = arrWord[arrWord.length - 1];
  let oldWord = newWord;

  arrWord.splice(0, 1);
  arrWord.splice(arrWord.length - 1, 1);
  let loops: number = 0;
  // avoid infinite loop if word is aaaaaaaa
  while (newWord === oldWord && loops < arrWord.length) {
    const shuffledWord = permuteBack(arrWord.join(''));
    oldWord = firstLetter + shuffledWord + lastLetter;
    loops++;
  }

  return oldWord;
}

/** Helper function. It permute back the string moving the first char in the last index.
 * permutation possible should be the length of word.
 */
export const permuteBack = (w: string): string => {
  if (w === '') return '';
  return [...w.slice(1, w.length), w[0]].join('');
};
