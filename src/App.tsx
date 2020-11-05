import React from 'react';
import Encode from './components/Encode';
import { Container, Header } from './components/Layout';

export default function App() {
  return (
    <Container>
      <Header>
        <h1>WeirdText</h1>
      </Header>
      <Encode />
    </Container>
  );
}
