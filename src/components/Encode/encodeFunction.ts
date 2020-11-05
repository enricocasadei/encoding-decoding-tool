/**
 * Encode sentence.
 * It return always a string
 * encode all the word in a sentence
 * */

export default function encodeSentence(
  sentence?: string
): { getCleanedWord: Lazy<string[]>; encodedSentence: Lazy<string> } {
  if (!sentence) return { encodedSentence: () => '', getCleanedWord: () => [] };

  const mapTable = specialCharMapTable(sentence);

  const cleanSentence = getAllowedChar(sentence);

  const arrCleanWord = cleanSentence.split(' ');

  const encodedSentence = () => {
    const newSentenceWithoutSpecialChar = arrCleanWord.map(encodeWord).join(' ');

    return insertMapTable(newSentenceWithoutSpecialChar, mapTable);
  };

  return { encodedSentence, getCleanedWord: () => arrCleanWord.filter(w => w.length >= 4) };
}

/**
 * Encode a single word.
 * It return always a string
 * In case the word has less than 3 letter, it is returned directly because no shuffle is allowed.
 * */
export function encodeWord(word?: string): string {
  if (!word) return '';
  if (word.length <= 3) return word;

  return getNewWord(word);
}
/** Helper function. It changes the central letter in the word. It returns always a different word from the old one. */
function getNewWord(oldWord: string): string {
  const a = [...oldWord];
  const f = a[0];
  const l = a[a.length - 1];
  let newWord = oldWord;

  a.splice(0, 1);
  a.splice(a.length - 1, 1);

  while (newWord === oldWord) {
    const s = shuffle(a.join(''));

    newWord = f + s + l;
  }

  return newWord;
}
/** Helper function. It randomly shuffle in the range of probability [-0.5, 0.5) */
const shuffle = (w: string): string => [...w].sort(_ => Math.random() - 0.5).join('');
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

function insertMapTable(sentence: string, mapTable: MapTable) {
  return Object.entries(mapTable).reduce((acc, [idx, str]) => {
    return insertInto(acc, parseInt(idx, 10), str);
  }, sentence);
}

export function insertInto(word: string, index: number, str: string) {
  return word.substr(0, index) + str + word.substr(index);
}

type Index = number;
type MapTable = Record<Index, string>;
type Lazy<T> = () => T;
