import { Lazy } from '../../type';
import { correctSentenceForPunctuation, specialCharMapTable, getAllowedChar, insertMapTable } from '../../utils';

export default function decodeSentence(
  sentence?: string,
  wordsKey?: string
): Lazy<{
  error: boolean;
  response: string;
}> {
  if (sentence === undefined || wordsKey === undefined) return () => ({ response: '', error: false });
  if (sentence === '') return () => ({ response: 'Missing sentence', error: true });
  if (wordsKey === '') return () => ({ response: 'Missing keys', error: true });

  const sentenceCorrectedForPunctuation = correctSentenceForPunctuation(sentence);

  const mapTable = specialCharMapTable(sentenceCorrectedForPunctuation);

  const arrWords = sentenceCorrectedForPunctuation.split(' ');

  const decodeWithKeys = decodeWord(wordsKey.split(' '));

  const arrWordCleaned = arrWords.map(getAllowedChar).map(decodeWithKeys);

  return () => ({
    error: false,
    response: insertMapTable(arrWordCleaned.join(' '), mapTable),
  });
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
function sortWord(word: string) {
  return [...word].sort().join('');
}
