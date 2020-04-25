import React from 'react';

import Navbar from '../../components/Navbar';
import SummonerHeader from '../../components/SummonerHeader';
import MatchHistory from '../../components/MatchHistory';

export default function SummonerInfo( { location: { state }, history } ) {
  const { summonerName, summonerLevel, urlIcon, region } = state;

  return (
    <div>
      <Navbar history={history}/>
      <SummonerHeader
        summonerName={summonerName}
        summonerLevel={summonerLevel}
        urlIcon={urlIcon}
      />
      <MatchHistory 
        summonerName={summonerName}
        region={region}
      />
    </div>
  );
}
