import React from 'react';
import encodeSentence from './encodeFunction';
export default function Encode() {
  const [input, setInput] = React.useState<string>();
  const encodedInput = React.useMemo(() => encodeSentence(input), [input]);
  return (
    <div>
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <textarea rows={5} onChange={e => setInput(e.target.value)}>
        {input}
      </textarea>

      <h3>Output</h3>
      <h4>Encoded text</h4>
      <div>{encodedInput.encodedSentence()}</div>

      <h4>List of the original words that got encoded</h4>
      <div>{encodedInput.getCleanedWord().join(' - ')}</div>
    </div>
  );
}
