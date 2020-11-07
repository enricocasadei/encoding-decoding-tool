import React from 'react';
import { Card } from '../Card';
import { Paragraph } from '../Paragraph';
import TextareaDebounced from '../TextareaDebounced';
import decodeSentence from './decodeFunction';

export default function Decode() {
  const [inputs, setInputs] = React.useState<{ sentence?: string; words?: string }>({});
  const setWords = React.useCallback((words: string) => setInputs({ sentence: inputs.sentence, words }), [
    inputs.sentence,
  ]);
  const setInput = React.useCallback((sentence: string) => setInputs({ words: inputs.words, sentence }), [
    inputs.words,
  ]);
  const result = React.useMemo(() => decodeSentence(inputs.sentence, inputs.words), [inputs]);
  // eslint-disable-next-line
  const response = React.useMemo(result.response, [result]);

  return (
    <Card.CardBody>
      <Card.CardHeader>Decoder</Card.CardHeader>
      <Card.CardContent>
        <Paragraph size="0.85rem">
          Insert in the field below some text puzzling: the decoder will try to pull some sense out of it.
          <br />
          The decoder does not know the algorithm used to encode the text, it uses the keys to decode the sentence.
        </Paragraph>
        <Paragraph size="1.5rem">Input</Paragraph>
        <Paragraph>
          <u>
            <b>Text to decode</b>
          </u>
        </Paragraph>
        <TextareaDebounced onChange={setInput} input={inputs.sentence} />
        <Paragraph>
          <u>
            <b>Words used as key to decode</b>
          </u>
        </Paragraph>
        <TextareaDebounced onChange={setWords} input={inputs.words} />
        <hr />
        <Paragraph size="1.5rem">Output</Paragraph>
        <Paragraph>
          <u>
            <b>Decoded text</b>
          </u>
        </Paragraph>
        {response ? (
          <Paragraph
            border={`1px solid ${result.error ? '#a80f0f' : '#ccc'}`}
            color={result.error ? '#a80f0f' : undefined}
          >
            {response}
          </Paragraph>
        ) : (
          <>....</>
        )}
      </Card.CardContent>
      <Card.CardFooter></Card.CardFooter>
    </Card.CardBody>
  );
}
