import React, { useState, useEffect } from 'react';

import getBorder from '../../utils/getBorder';

import { Container } from './styles';

export default function SummonerInfo( { location: { state } } ) {
  const [border, setBorder] = useState('');
  const { summonerName, summonerLevel, urlIcon } = state;

  useEffect(() => {
    setBorder(getBorder(summonerLevel));

    console.log(border);
  }, [border]); 

  return (
    <Container>
      <header>
        <div className="icon-group">
          <img id="icon" src={urlIcon} alt={summonerName}/>
          <img id="border" src={`http://localhost:3333/static/images/${border}.png`} alt="border"/>
        </div>
        <div className="info-group">
          <h2>{summonerName}</h2>
          <small>Level {summonerLevel}</small>
        </div>
      </header>
    </Container>
  );
}
