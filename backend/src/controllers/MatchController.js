import { dotenv } from 'dotenv/config';
import axios from 'axios';

const api_key = process.env.API_KEY;

const mongoose = require('mongoose');
const Summoner = mongoose.model('Summoner');

module.exports = {
    //Rota aplicando API do League of Legends e verificando/armazenando no banco o Summoners cadastrado
    async matches(req, res) {
        try{
            const { summonerName } = req.body;

            const summoner = await Summoner.findOne({ summonerName });

            //summoner.select('region');
            const { accountId, region } = summoner;
            
            const response = await axios.get(
                `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${api_key}`
            );
        
            //const {data} = response;

            console.log("Searched Matches!");
            return res.json(response.data);
        }catch(error){
            console.log(error);

            return res.json("Matches not found!");
        }
    },
    async game(req, res) {
        try{
            const { gameId, region } = req.body;
            
            const response = await axios.get(
                `https://${region}.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${api_key}`
            );
        
            //const {data} = response;

            console.log("Searched Game!");
            return res.json(response.data);
        }catch(error){
            console.log(error);

            return res.json("Game not found!");
        }
    },
};

