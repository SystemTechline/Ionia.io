import { dotenv } from 'dotenv/config';

const express     = require('express');

const port = process.env.PORT;

const app = express();



app.use('/static', express.static('/public'));



app.listen(port, () => console.log(`API on, port ${port}`))