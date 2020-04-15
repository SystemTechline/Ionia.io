import styled from 'styled-components';

import bg from '../../images/ionia.jpg';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 3px #0e141b;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Beaufort Bold', 'Times New Roman', Times, serif;
    color: #f6c97f;
    font-size: 5em;
  }  
`;
