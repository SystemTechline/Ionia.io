import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111111;
  box-shadow: 10px 5px 5px black;

  @media only screen and (max-width: 600px) {
    a {
      display: none;
    }

    form {
      width: 100%;

      input {
        width: 100%;
      }
    }
  }

  form {
    input, select, option {
      background-color: #111111;
      color: #F9F9F9;
    }

    input, select, option, button {
      height: 7vh;
    }

    button {
      font-size: 1.2em;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
      box-shadow: 0 0 0 30px #111111 inset !important;
      -webkit-text-fill-color: #F9F9F9;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: 'Beaufort Bold', 'Times New Roman', Times, serif;
  color: black;
  text-decoration: none;
  font-size: 1.3em;
  color: #f9f9f9;
`;