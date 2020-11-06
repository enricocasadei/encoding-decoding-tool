import React from 'react';
import Decode from './components/Decode';
import Encode from './components/Encode';
import { Container, Header } from './components/Layout';

export default function App() {
  return (
    <Container>
      <Header>
        <h1>WeirdText</h1>
      </Header>
      <div style={{ width: '50%', float: "left" }}>
        <Encode />
      </div>
      <div style={{ width: '50%', float: "right" }}>
        <Decode />
      </div>
    </Container>
  );
}
