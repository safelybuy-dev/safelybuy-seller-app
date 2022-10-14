import { axiosWithAuth } from 'auth';
import { baseUrl } from './';

export const fetchWallet = (success, failure) => {
  axiosWithAuth()
    .get(`${baseUrl}/api/v1/my-wallet`)
    .then((res) => success(res.data))
    .catch((error) => failure(error));
};

export const fetchWalletHistory = (
  success,
  failure,
  searchTerm = '',
  page = 1,
  perPage = 10
) => {
  axiosWithAuth()
    .get(
      `${baseUrl}/api/v1/my-wallet-historyv2?page=${page}&per_page=${perPage}&keyword=${searchTerm}`
    )
    .then((res) => success(res.data))
    .catch((error) => failure(error));
};
