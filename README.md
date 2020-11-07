# WeirdText

Encoding and decoding tool.

WeirdText is a text encoder/decoder.
Actually, its output is not a real "encryption" because humans could quite easily read it. Machines, instead, may find its output difficult to read without the list of original words.

## Installation

To install, simply get the code and launch `yarn` or `npm install`.

## App

The app is created starting from cra-typescript. It presents 2 cards, one for encode and one for decode some strings. (Basic style is applied - the cards are responsive). To start, launch `yarn start` or `npm start` and go to `http://localhost:9000/`.

### Encoding

The encoding algorithm is very simple. For each word belonging to the original text inserted by the user, it leaves its first and last characters in their original position, but shuffle (permute) all the characters in the middle of the word.
Shuffle (permute) not randomly: it moves the last chars of the chars to permute in the first position and the other forward of one place, in this way all the letters that have to move are moved. Whatever is not a word (whitespace, punctuation, etc.), is left untouched.
In addition, it is returned the list of words that have been permuted - if the same word appears twice it is shown just once.

**Example**
Sentence to decode:

```
This is a long long test sentence, with some big (biiiiig) words!
```

Output:

```
Tihs is a lnog lnog tset scentene, wtih smoe big (biiiiig) wdors!
```

Keys output:

```
This long sentence some test with words
```

### Decoding

The decoding part is based on the ending's principle, but it knows nothing about the "algorithm". Based on the cipher (list of words) it converts the given sentence. If some words are missing from the cipher, but present in the sentence to decode, they are left untouched. Since the sentence to decode and the keys are required, the user is informed to insert them if not provided.

**Example**
Sentence to decode:

```
Tihs is a lnog loonog tset sntceene, wtih smoe big (biiiiig) wdros!
```

Keys:

```
long looong sentence some test This with words
```

Output:

```
This is a long looong test sentence, with some big (biiiiig) words!
```
