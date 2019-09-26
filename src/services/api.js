import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omistack-backend.herokuapp.com',
});

export default api;
