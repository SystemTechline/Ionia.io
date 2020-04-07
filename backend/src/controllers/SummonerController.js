import { dotenv } from 'dotenv/config';
import api from "../services/api";

const mongoose = require('mongoose');

const api_key = process.env.API_KEY;

const Summoner = mongoose.model('Summoner');

module.exports = {
    async index(req, res) {
        const summoners = await Summoner.find();
        

        return res.json(summoners);
    },

    async store(req, res) {
        const summoner = await Summoner.create(req.body);

        return res.json(summoner)
    },
    
    async search(req, res) {
        const response = await api.get(`/by-name/Fred%20FIintstone?api_key=${api_key}`);
        console.log(response);

        return res.json(response);
    },
};