import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, Header } from './styles';

export default function Main() {
  const [summonerName, setSummonerName] = useState('');
  const [region, setRegion] = useState('BR');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ summonerName, region });
  }

  return (
    <Container>
      <Header>
        <h1>IONIA</h1>
        <form className="summoner-info" onSubmit={handleSubmit}>
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
            <option value="BR">BR</option>
            <option value="EUW">EUW</option>
            <option value="EUNE">EUNE</option>
            <option value="JP">JP</option>
            <option value="KR">KR</option>
            <option value="LAN">LAN</option>
            <option value="LAS">LAS</option>
            <option value="NA">NA</option>
            <option value="OCE">OCE</option>
            <option value="RU">RU</option>
            <option value="TR">TR</option>
          </select>

          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </Header>
    </Container>
  );
}
