import { correctSentenceForPunctuation, getAllowedChar, insertInto, specialCharMapTable } from './';

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

test('correctSentenceForPunctuation: add space correctly', () => {
  expect(correctSentenceForPunctuation('This is a long looong test sentence,with some big (biiiiig) words!')).toBe(
    'This is a long looong test sentence, with some big (biiiiig) words!'
  );
});
