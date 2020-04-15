import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  display: flex;
  justify-content: center;

  input[type=text], select, option, button {
    font-family: 'Roboto', sans-serif;
    padding: 7px; 
    border: none;
    font-weight: bold;
    font-size: 0.9em;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    box-shadow: 0 0 0 30px white inset !important;
  }

  button {
    background-color: #ca9d4b;
    width: 50px;
    color: #eee2cc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background-color: ${darken(0.05, '#ca9d4b')}
  }
`;
