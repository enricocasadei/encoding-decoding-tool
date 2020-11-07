# WeirdText

Encoding and decoding tool.

WeirdText is a text encoder/decoder.
Actually, its output is not a real "encryption" because humans could quite easily read it. Machines, instead, may find its output difficult to read without the list of original words.

## App

The app is created starting from cra-typescript. To install, simply get the code and launch `yarn` or `npm install`.
The app presents 2 cards, one for encode and one for decode some strings. (Basic style is applied - the card are responsive)

## Encoding

The encoding algorithm is very simple. For each word belonging to the original text inserted by the user, it leaves its first and last characters in their original position, but shuffle (permute) all the characters in the middle of the word.<br/>
Shuffle (permute) not randomly: it moves the last chars of the chars to permute in the first position and the other forward of one place, in this way all the letter that have to move are moved.
