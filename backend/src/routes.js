const express = require("express");
const routes  = express.Router();


const SummonerController = require('./controllers/SummonerController');
const MatchController = require('./controllers/MatchController');

// Inciando a Rota
routes.get("/summoners", SummonerController.index);
routes.post("/summoners", SummonerController.store);
routes.post("/summoners/match", MatchController.matches);
routes.post("/summoners/match/game", MatchController.game);

module.exports = routes;
