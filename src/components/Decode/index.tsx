import React from 'react';
import { ClearInput } from '../ClearInputButton';
import { Card } from '../Card';
import { Paragraph } from '../Paragraph';
import TextareaDebounced from '../TextareaDebounced';

export default function Decode() {
  const [input, setInput] = React.useState<string>();
  return (
    <Card.CardBody>
      <Card.CardHeader>Decoder</Card.CardHeader>
      <Card.CardContent>
        <Paragraph size="1.5rem">Input</Paragraph>
        <Paragraph>
          <u>
            <b>Text to decode</b>
          </u>
        </Paragraph>
        <TextareaDebounced onChange={setInput} input={input} />
        <hr />
        <Paragraph size="1.5rem">Output</Paragraph>
        <Paragraph>
          <u>
            <b>Decoded text</b>
          </u>
        </Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>
          <u>
            <b>List of the original words that got encoded</b>
          </u>
        </Paragraph>
        <Paragraph></Paragraph>
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
