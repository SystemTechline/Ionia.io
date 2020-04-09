import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Header } from './styles';

export default function Main() {
  const [summonerName, setSummonerName] = useState('');
  const [region, setRegion] = useState('BR');
  const servers = [
    { id: 'br1', name: 'BR' },
    { id: 'euw1', name: 'EUW' },
    { id: 'eun1', name: 'EUNE' },
    { id: 'jp1', name: 'JP' },
    { id: 'kr', name: 'KR' },
    { id: 'la1', name: 'LAN' },
    { id: 'la2', name: 'LAS' },
    { id: 'na1', name: 'NA' },
    { id: 'oce', name: 'OCE' },
    { id: 'ru', name: 'RU' },
    { id: 'tr1', name: 'TR' }
  ]

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/summoners', {
      summonerName,
      region,
    });

    console.log(response.data);
  }

  return (
    <Container>
      <Header>
        <h1>IONIA</h1>
        <form method="POST" className="summoner-info" onSubmit={handleSubmit}>
          <input
            type="text"
            name="summoner_name"
            placeholder="Seu nome de invocador"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
          />

          <select
            name="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
           {servers.map(server => (
              <option key={server.id} value={server.id}>{server.name}</option>
           ))}
          </select>

          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </Header>
    </Container>
  );
}
