import axios from 'axios';

axios.create({
  baseURL: 'localhost:3333/api',
});


export default axios;
