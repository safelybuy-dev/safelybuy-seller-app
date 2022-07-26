import { axiosWithAuth } from 'auth';
import { baseUrl } from './';

export const fetchWallet = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/my-wallet`)
    .then((res) => success(res.data))
    .catch((error) => failure(failure));
};
