import { encodeWord, getNewWord, permute } from './encodeFunction';

test("encodeWord returns '' if arg is 'undefined' ", () => {
  expect(encodeWord().word).toBe('');
});

test('encodeWord returns the same word passed if length is less than 3', () => {
  expect(encodeWord('I').word).toBe('I');
  expect(encodeWord('is').word).toBe('is');
  expect(encodeWord('abc').word).toBe('abc');
});

test("encodeWord returns a different word than 'word' (4 letters word) ", () => {
  const result = encodeWord('word'); // {"changed": true, "originalWord": "word", "word": "wrod"}
  expect(result.changed).toBeTruthy();
  expect(result.originalWord).toBe('word');
  expect(result.word).toBe('wrod');
});

test('encodeWord returns a different word than amazing', () => {
  const result = encodeWord('amazing');
  expect(result).not.toBe('amazing');
});

test('getNewWord: change randomly chars in a word. Here testing word of 4 chars.', () => {
  const result = getNewWord('word');
  expect(result).toStrictEqual({ changed: true, originalWord: 'word', word: 'wrod' });
});

test('getNewWord: avoid infinite loop.', () => {
  const result = getNewWord('aaaaaaaa');
  expect(result).toStrictEqual({ changed: false, originalWord: 'aaaaaaaa', word: 'aaaaaaaa' });
});

test('permute: basic usage', () => {
  expect(permute('aaaaaaaa')).toBe('aaaaaaaa');
  expect(permute('word')).toBe('dwor');
  expect(permute('biiiiig')).toBe('gbiiiii');
});
