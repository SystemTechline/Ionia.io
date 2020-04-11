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
            const { summonerName, region} = req.body;
            
            const response = await axios.get(
                `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
            );
        
            const { data : {profileIconId, summonerLevel, accountId}} = response;

            const urlIcon = `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/profileicon/${profileIconId}.png`;

            const filter = { accountId };
            const update = { 
                summonerName,
                summonerLevel,
                profileIconId,
                region,
                urlIcon
            };

            let summonerExists = await Summoner.findOneAndUpdate(filter, update);

            summonerExists = await Summoner.findOne(filter);

            if (summonerExists) {
                return res.json(summonerExists);
            }

            const summoner = await Summoner.create({
                accountId,
                summonerName,
                region,
                summonerLevel,
                profileIconId,
                urlIcon
            });

            //const {data} = response;

            console.log("Registered Summoner!");
            return res.json(summoner);
        }catch(error){
            console.log(error);

            return res.json("Summoner not found!");
        }
    },
};