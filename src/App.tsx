import React from 'react';
import Decode from './components/Decode';
import Encode from './components/Encode';
import { Container, Header, MainGrid } from './components/Layout';
import { Paragraph } from './components/Paragraph';

export default function App() {
  return (
    <Container>
      <Header>
        <h1>WeirdText</h1>
        <Paragraph>Encoding and decoding tool.</Paragraph>
        <Paragraph size=".85rem">
          WeirdText is a text encoder/decoder. Actually, its output is not a real "encryption" because humans could
          quite easily read it. Machines, instead, may find its output difficult to read without the list of original
          words.
        </Paragraph>
      </Header>
      <MainGrid>
        <Encode />
        <Decode />
      </MainGrid>
    </Container>
  );
}
