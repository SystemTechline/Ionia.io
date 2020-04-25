import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

export default function MatchHistory({ summonerName, region }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      const response = await api.post('/summoners/match', { summonerName} );
      
      setMatches(response.data.matches);
    }
    getMatches();
  }, [summonerName]);

  async function handleGameSearch(gameId, region) {
    const response = await api.post('/summoners/match/game', { 
      gameId, region
    });

    console.log(response.data);
  }
  return (
    <Container>
      <h2>Histórico de Partidas</h2>
    </Container>
  );
}
