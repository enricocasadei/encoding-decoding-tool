import decodeSentence, { sortWord } from './decodeFunction';

test('sortWord returns a sorted word', () => {
  expect(sortWord('amazing')).toBe('aagimnz');
  expect(sortWord('maaingz')).toBe('aagimnz');
});

test('decodeSentence returns a sorted word', () => {
  expect(
    decodeSentence(
      'Tihs is a lnog loonog tset sntceene, wtih smoe big (biiiiig) wdros!',
      'long looong sentence some test This with words'
    ).response()
  ).toBe('This is a long looong test sentence, with some big (biiiiig) words!');
});
