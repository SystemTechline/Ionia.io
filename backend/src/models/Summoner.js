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
    summonerLevel: {
        type: String,
    },
    profileIconId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Summoner',SummonerSchema);