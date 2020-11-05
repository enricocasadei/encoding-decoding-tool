import React from 'react';
import { Card, Paragraph } from '../Card';

export default function Decode() {
  const [input, setInput] = React.useState<string>();
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
          <a onClick={() => setInput('')}>X</a>
        </Card.CardFooterAction>
      </Card.CardFooter>
    </Card.CardBody>
  );
}
