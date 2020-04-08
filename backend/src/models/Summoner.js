const mongoose = require('mongoose');

const SummonerSchema = new mongoose.Schema ({
    summonerName: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Summoner',SummonerSchema);