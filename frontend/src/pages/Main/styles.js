import styled from 'styled-components';

import bg from '../../images/ionia.jpg';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  height: calc(50% + 5px);
  margin-bottom:50px;
  border-bottom: 1em solid #ca9d4b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 3px #0e141b;
  
  &::before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -3;
    height: 50%;
    display: block;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    filter: blur(4px);
  }

  h1 {
    font-family: 'Beaufort Bold', 'Times New Roman', Times, serif;
    color: #f6c97f;
    font-size: 5em;
  }

  form {
    margin-top: 30px;
    width: 350px;
    max-width: 80vw;
    display: flex;
    justify-content: center;

    &:focus {
      outline: 1px solid red;
    }

    input[type=text], select, option, button {
      font-family: 'Roboto', sans-serif;
      padding: 7px;
      border: none;
      font-weight: bold;
      color: #454545;
      font-size: 0.9em;
    }

    input[type=text] {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
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
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`;
