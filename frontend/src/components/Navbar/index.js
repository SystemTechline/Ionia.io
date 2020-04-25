import React from 'react';

import Search from '../Search';

import { Container, StyledLink } from './styles';

import logo from '../../images/logo.png';

export default function Navbar({ history }) {
  return (
    <Container>
      <StyledLink to='/'>
        <img src={logo} alt="Ionia Logo"/>
        IONIA
      </StyledLink>
      <Search 
        history={history} 
        placeholder="Buscar outro invocador"
      />
    </Container>
  );
}
