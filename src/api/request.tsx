import axios, { Method, AxiosResponse } from 'axios';

const api = axios.create({ baseURL: 'https://localhost:5001' });
export default api;
