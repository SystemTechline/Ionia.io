import { dotenv } from 'dotenv/config';
import App from './app';

const port = process.env.PORT;

App.listen(port, () => console.log(`API on, port ${port}`))
