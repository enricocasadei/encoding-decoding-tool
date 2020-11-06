import React from 'react';
import { ClearInput } from '../ClearInputButton';
import { Card } from '../Card';
import { Paragraph } from '../Paragraph';
import encodeSentence from './encodeFunction';

export default function Encode() {
  const [input, setInput] = React.useState<string>();
  const encodedInput = React.useMemo(() => encodeSentence(input), [input]);
  return (
    <Card.CardBody>
      <Card.CardHeader>Encoder</Card.CardHeader>
      <Card.CardContent>
        <Paragraph size="1.5rem">Input</Paragraph>
        <Paragraph>
          <u>
            <b>Text to encode</b>
          </u>
        </Paragraph>
        <textarea style={{ width: '100%' }} rows={5} onChange={e => setInput(e.target.value)} value={input}></textarea>
        <hr />
        <Paragraph size="1.5rem">Output</Paragraph>
        <Paragraph>
          <u>
            <b>Encoded text</b>
          </u>
        </Paragraph>
        <Paragraph>{encodedInput.encodedSentence()}</Paragraph>
        <Paragraph>
          <u>
            <b>List of the original words that got encoded</b>
          </u>
        </Paragraph>
        <Paragraph>{encodedInput.getCleanedWord().join(' - ')}</Paragraph>
      </Card.CardContent>
      <Card.CardFooter>
        <Card.CardFooterAction>
          <ClearInput disabled={!input} onClick={() => setInput('')}>
            X
          </ClearInput>
        </Card.CardFooterAction>
      </Card.CardFooter>
    </Card.CardBody>
  );
}
