import { API_URL } from './config';
import axios  from 'axios';
const api = axios.create({
    baseURL: API_URL
})


