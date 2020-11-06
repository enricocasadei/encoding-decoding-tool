import { correctSentenceForPunctuation, removeForbiddenChar, insertInto, specialCharMapTable } from './';
import compose from './compose';

test('getAllowedChar returns nothing', () => {
  const result = removeForbiddenChar('!!!!!');
  expect(result).toBe('');
});

test('getAllowedChar returns only letter', () => {
  const result = removeForbiddenChar('Word with sp&c1@l char!');
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
  expect(correctSentenceForPunctuation('This is a long looong test sentence, with some big (biiiiig) words!')).toBe(
    'This is a long looong test sentence, with some big (biiiiig) words!'
  );
});

test('composes functions', () => {
  const fn1 = (val: string) => `fn1(${val})`;
  const fn2 = (val: string) => `fn2(${val})`;
  const fn3 = (val: string) => `fn3(${val})`;
  const composedFunction = compose(fn1, fn2, fn3);
  expect(composedFunction('inner')).toBe('fn1(fn2(fn3(inner)))');
});
