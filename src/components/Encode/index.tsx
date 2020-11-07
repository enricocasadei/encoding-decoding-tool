import React from 'react';
import { Card } from '../Card';
import { Paragraph } from '../Paragraph';
import encodeSentence, { prettifyArr } from './encodeFunction';
import TextareaDebounced from '../TextareaDebounced';

export default function Encode() {
  const [input, setInput] = React.useState<string>();
  const encodedInput = React.useMemo(() => encodeSentence(input), [input]);
  // eslint-disable-next-line
  const encodedSentence = React.useMemo(encodedInput.encodedSentence, [encodedInput]);
  const listOfWords = React.useMemo(() => prettifyArr(encodedInput.getCleanedWord()), [encodedInput]);
  return (
    <Card.CardBody>
      <Card.CardHeader>Encoder</Card.CardHeader>
      <Card.CardContent>
        <Paragraph size=".85rem">
          Insert in the field below some text and booooom, magic!
          <br />
          The text permuted will appears and the list of word encoded.
        </Paragraph>
        <Paragraph size="1.5rem">Input</Paragraph>
        <Paragraph>
          <u>
            <b>Text to encode</b>
          </u>
        </Paragraph>
        <TextareaDebounced onChange={setInput} input={input} />
        <hr />
        <Paragraph size="1.5rem">Output</Paragraph>
        <Paragraph>
          <u>
            <b>Encoded text</b>
          </u>
        </Paragraph>
        {encodedSentence ? <Paragraph border="1px solid #ccc">{encodedSentence}</Paragraph> : <>....</>}
        <Paragraph>
          <u>
            <b>List of the original words that got encoded</b>
          </u>
        </Paragraph>
        {listOfWords ? <Paragraph border="1px solid #ccc">{listOfWords}</Paragraph> : <>....</>}
      </Card.CardContent>
      <Card.CardFooter></Card.CardFooter>
    </Card.CardBody>
  );
}
