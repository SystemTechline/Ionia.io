import React, { useState, useEffect } from 'react';

import getBorder from '../../utils/getBorder';

import { Container } from './styles';

export default function SummonerHeader({ summonerName, summonerLevel, urlIcon }) {
  const [border, setBorder] = useState('');

  useEffect(() => {
    setBorder(getBorder(summonerLevel));
  }, [border, summonerLevel]);

  return (
    <Container>
      <div className="icon-group">
        <img id="icon" src={urlIcon} alt={summonerName}/>
        { border && 
          <img 
            id="border" 
            src={`http://localhost:3333/static/images/${border}.png`} 
            alt="border"
            draggable="false"
          /> 
        }
        <strong>{summonerLevel}</strong>
      </div>
      <h2>{summonerName}</h2>
    </Container>
  );
}
