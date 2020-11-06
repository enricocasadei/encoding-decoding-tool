import { MapTable } from "../type";

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