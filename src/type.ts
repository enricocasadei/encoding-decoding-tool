export type Index = number;
export type MapTable = Record<Index, string>;
export type Lazy<T> = () => T;
export type WordPermuted = {
  changed: boolean;
  word: string;
  originalWord: string;
};
