import { encodeWord, getAllowedChar, getNewWord, insertInto, specialCharMapTable } from './encodeFunction';

test("encodeWord returns '' if arg is 'undefined' ", () => {
  expect(encodeWord()).toBe('');
});

test('encodeWord returns the same word passed if length is less than 3', () => {
  expect(encodeWord('I')).toBe('I');
  expect(encodeWord('is')).toBe('is');
  expect(encodeWord('abc')).toBe('abc');
});

test("encodeWord returns a different word than 'word' (4 letters word) ", () => {
  const result = encodeWord('word');
  expect(result).not.toBe('word');
  expect(result).toHaveLength(4);
});

test('encodeWord returns a different word than amazing', () => {
  const result = encodeWord('amazing');
  expect(result).not.toBe('amazing');
});

test('getAllowedChar returns nothing', () => {
  const result = getAllowedChar('!!!!!');
  expect(result).toBe('');
});

test('getAllowedChar returns only letter', () => {
  const result = getAllowedChar('Word with sp&c1@l char!');
  expect(result).toBe('Word with spcl char');
});

test('specialCharMapTable ', () => {
  const result = specialCharMapTable('Word with sp&c1@l char!');
  expect(result).toStrictEqual({ 12: '&', 14: '1', 15: '@', 22: '!' });
});

test('insertInto: when a word became the world', () => {
  const result = insertInto('Word', 3, 'l');
  expect(result).toBe('World');
});

test('getNewWord: change randomly chars in a word. Here testing word of 4 chars.', () => {
  const result = getNewWord('word');
  expect(result).toBe('wrod');
});


