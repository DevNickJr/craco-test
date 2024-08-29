import axios from 'axios';
import appConfig from '../configs/app.config';

const BaseService = axios.create({
  baseURL: appConfig.apiPrefix,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default BaseService;
