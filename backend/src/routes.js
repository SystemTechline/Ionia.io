const express = require("express");
const routes  = express.Router();


const SummonerController = require('./controllers/SummonerController');

// Inciando a Rota
routes.get("/summoners", SummonerController.index);
routes.post("/summoners", SummonerController.store);
routes.get("/summoners", SummonerController.search);

module.exports = routes;
