import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'

import Search from '../Search';

import { Container, StyledLink } from './styles';

export default function Navbar({ history }) {
  return (
    <Container>
      <StyledLink to='/'>
        <IoIosArrowBack />
        Home
      </StyledLink>
      <Search 
        history={history} 
        placeholder="Buscar outro invocador"
      />
    </Container>
  );
}
