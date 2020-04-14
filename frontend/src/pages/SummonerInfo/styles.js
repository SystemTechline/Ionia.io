import styled from 'styled-components';

import bg from '../../images/profile-bg.png';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    border-bottom: 0.8em solid #ca9d4b;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    font-family: 'Beaufort Bold', 'Times New Roman', Times, serif;
    text-shadow: 2px 2px 3px #0e141b;

    @media only screen and (max-width: 600px) {
      & {
        flex-direction: column;
      }
    }

    .icon-group {
      position: relative;
      top: 0;
      left: 0;

      #border {
        width: 200px;
        height: 200px;
        position: relative;
        top: 0;
        left: 0;
      }

      #icon {
        width: 105px;
        height: 105px;
        position: absolute;
        top: 45px;
        left: 50px;
        overflow: hidden;
        border-radius: 50%;
      }

      strong {
        position: absolute;
        top: 151px;
        left: 88px;
        color: #eee2cc;
        font-size: 0.9em;
        user-select: none;
        -webkit-touch-callout: none;
      }
    }

    h2 {
      color: #ca9d4b;
      font-size: 1.9em;
    }
  }
`;
