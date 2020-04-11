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
    accountId: {
        type: String,
    },
    summonerLevel: {
        type: String,
    },
    profileIconId: {
        type: String,
    },
    urlIcon:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Summoner',SummonerSchema);