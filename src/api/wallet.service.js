import { axiosWithAuth } from 'auth';
import { baseUrl } from './';

export const fetchWallet = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/my-wallet`)
    .then((res) => success(res.data))
    .catch((error) => failure(error));
};

export const fetchWalletHistory = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/my-wallet-historyv2?page=1&per_page=5`)
    .then((res) => success(res.data))
    .catch((error) => failure(error));
};
