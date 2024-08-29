import { ILogin } from '../interfaces';
import BaseService from './BaseService';

export const apiLogin = (data: ILogin) => {
  return BaseService.post(`/login`, data);
};
