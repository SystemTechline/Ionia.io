import { dotenv } from 'dotenv/config';
const express     = require('express');
const cors = require('cors');
const requireDir  = require('require-dir');
const mongoose    = require('mongoose');

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/ioniaapi',
    { useNewUrlParser: true }
);
requireDir('./models');

//Rotas
app.use('/static', express.static('public'));
app.use('/api', require('./routes'));

app.listen(port, () => console.log(`API on, port ${port}`))
