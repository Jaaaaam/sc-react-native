import axios from 'axios';
import {BASE_URL} from './constants';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  ACCOUNT: '/api/accounts',
};

export const login = async payload => {
  console.log(`${BASE_URL}${ENDPOINTS.login}`, 'url');
  console.log(payload, 'payload');
  const tokenResponse = await axios
    .post(`${BASE_URL}${ENDPOINTS.LOGIN}`, payload)
    .then(res => res)
    .catch(err => {
      console.log(err, 'err logging in');
      return;
    });
  if (tokenResponse.data) {
    axios.defaults.headers.common.authorization = `Bearer ${tokenResponse.data.token}`;
    return await axios
      .get(`${BASE_URL}${ENDPOINTS.ACCOUNT}`, payload)
      .then(res => {
        console.log(res, 'res');
        return res;
      })
      .catch(err => {
        console.log(err, 'err getting account');
        return err;
      });
  }
};
