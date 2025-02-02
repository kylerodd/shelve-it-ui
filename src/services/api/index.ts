import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 1500,
});

export { instance };
export { default as container } from './container';
