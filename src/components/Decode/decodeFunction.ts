import { Lazy } from '../../type';
import {
  correctSentenceForPunctuation,
  specialCharMapTable,
  removeForbiddenChar,
  insertMapTable,
  joinStrings,
  splitString,
} from '../../utils';
import compose from '../../utils/compose';

export default function decodeSentence(
  sentence?: string,
  wordsKey?: string
): {
  error: boolean;
  response: Lazy<string>;
} {
  if (sentence === undefined) return { response: () => '', error: false };
  if (sentence === '') return { response: () => 'Missing sentence', error: true };
  if (wordsKey === '' || wordsKey === undefined) return { response: () => 'Missing keys', error: true };

  const sentenceCorrectedForPunctuation = correctSentenceForPunctuation(sentence);

  // store the special char to re-insert them later
  const mapTable = specialCharMapTable(sentenceCorrectedForPunctuation);

  const decodeWordsKey = compose<(word: string) => string>(
    decodeWord,
    splitString,
    removeForbiddenChar
  )(wordsKey);

  const arrWordCleaned = compose<string>(
    joinStrings,
    mapFn(decodeWordsKey),
    mapFn(removeForbiddenChar),
    splitString
  )(sentenceCorrectedForPunctuation);

  return {
    error: false,
    response: () => insertMapTable(arrWordCleaned, mapTable),
  };
}

export function decodeWord(arrWordsKey: string[]) {
  return (word: string): string => {
    return getRightWord(word, arrWordsKey);
  };
}

export function getRightWord(newWord: string, arrWordsKey: string[]) {
  const arrSortedWordsKey: string[] = arrWordsKey.map(sortWord);
  const newWordSorted: string = sortWord(newWord);
  const indexFound = arrSortedWordsKey.findIndex(w => w === newWordSorted);

  if (indexFound > -1) {
    return arrWordsKey[indexFound];
  }
  return newWord;
}

/** Helper function. it maps string */
export function sortWord(word: string) {
  return [...word].sort().join('');
}

const mapFn = (cb: (...args: any[]) => unknown) => (arr: string[]) => arr.map(cb);
