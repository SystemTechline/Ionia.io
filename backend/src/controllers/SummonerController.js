import { dotenv } from 'dotenv/config';
import axios from 'axios';

const api_key = process.env.API_KEY;

const mongoose = require('mongoose');
const Summoner = mongoose.model('Summoner');

module.exports = {
    //Rota para buscar no banco os meu Summoners cadastrados
    async index(req, res) {
        const summoners = await Summoner.find();
        
        return res.json(summoners);
    },

    //Rota aplicando API do League of Legends e verificando/armazenando no banco o Summoners cadastrado
    async store(req, res) {
        try{
            const { summonerName, region } = req.body;

            const summonerExists = await Summoner.findOne({ summonerName: summonerName });

            if (summonerExists) {
                return res.json(summonerExists);
            }

            const response = await axios.get(
                    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
                );

            const summoner = await Summoner.create({
                summonerName,
                region
            });
            
            console.log("Registered Summoner!");

            return res.json(response.data);
        }catch(error){
            console.log(error);

            return res.json("Summoner not found!");
        }
    },
};