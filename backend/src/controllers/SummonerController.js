import { dotenv } from 'dotenv/config';
//import api from "../services/api";
import axios from 'axios';

const api_key = process.env.API_KEY;

const mongoose = require('mongoose');
const Summoner = mongoose.model('Summoner');

module.exports = {
    async index(req, res) {
        const summoners = await Summoner.find();
        
        return res.json(summoners);
    },

    async store(req, res) {
        //const summoner = await Summoner.create(req.body);
        try{
            const summoner = await Summoner.create(req.body);

            const { summonerName, region } = req.body;
            const response = await axios.get(
                    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`
                );

            console.log("Registered Summoner!");

            return res.json(response.data);
        }catch(error){
            console.log(error);

            return res.json(error);
        }
    },

    /*async search(req, res) {
        try{
            const { summonerName } = req.body;
            const response = await api.get(`/by-name/${summonerName}?api_key=${api_key}`);
            console.log("Registered Summoner!");
            return res.json(response.data);
        }catch(error){
            console.log("Summoner not found!");
            return res.json("Summoner not found!");
        }
    }*/
    
};