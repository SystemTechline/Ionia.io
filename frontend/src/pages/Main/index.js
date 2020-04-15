import React from 'react';

import Search from '../../components/Search';

import { Container } from './styles';

export default function Main({ history }) {
  return (
    <Container>
      <h1>IONIA</h1>
      <Search 
        history={history}
        placeholder="Seu nome de invocador"
        rounded
      />      
    </Container>
  );
}
