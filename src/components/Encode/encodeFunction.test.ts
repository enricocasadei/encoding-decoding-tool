import {
  correctSentenceForPunctuation,
  encodeWord,
  getAllowedChar,
  getNewWord,
  insertInto,
  permute,
  specialCharMapTable,
} from './encodeFunction';

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

test('correctSentenceForPunctuation: add space correctly', () => {
  expect(correctSentenceForPunctuation('This is a long looong test sentence,with some big (biiiiig) words!')).toBe(
    'This is a long looong test sentence, with some big (biiiiig) words!'
  );
});
