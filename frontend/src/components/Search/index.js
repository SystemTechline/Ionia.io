import React, { useState }  from 'react';

import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '../../services/api';
import isValidSummonerName from '../../utils/isValidSummonerName';

import { Container } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export default function Search({ history, placeholder }) {
  const [summonerName, setSummonerName] = useState('');
  const [region, setRegion] = useState('br1');
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
  ];

  function handleError(message) {
    toast.error(message, {
      className: 'styled_toast-background',
      progressClassName: 'styled_toast-progress-bar',
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();


    if(!isValidSummonerName(summonerName)) {
      handleError('Informe um nome de invocador válido.');
      return;
    }

    const response = await api.post('/summoners', {
      summonerName,
      region,
    });

    if(response.data === 'Summoner not found!') {
      handleError('Esse invocador não foi encontrado! 😢');
      return;
    }
    
    history.push('/summoner', response.data);
  }

  return (
    <Container method="POST" className="summoner-info" onSubmit={handleSubmit}>
      <input
        type="text"
        name="summoner_name"
        placeholder={placeholder}
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
    </Container>
  );
}
