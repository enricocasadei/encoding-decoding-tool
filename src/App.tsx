import React from 'react';
import Decode from './components/Decode';
import Encode from './components/Encode';
import { Container, Header, MainGrid } from './components/Layout';

export default function App() {
  return (
    <Container>
      <Header>
        <h1>WeirdText</h1>
      </Header>
      <MainGrid>
        <Encode />
        <Decode />
      </MainGrid>
    </Container>
  );
}
