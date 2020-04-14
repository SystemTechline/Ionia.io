import React, { useState, useEffect } from 'react';

import getBorder from '../../utils/getBorder';

import { Container } from './styles';

export default function SummonerInfo( { location: { state } } ) {
  const [border, setBorder] = useState('');
  const { summonerName, summonerLevel, urlIcon } = state;

  useEffect(() => {
    setBorder(getBorder(summonerLevel));
  }, [border, summonerLevel]); 

  return (
    <Container>
      <header>
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
      </header>
    </Container>
  );
}
