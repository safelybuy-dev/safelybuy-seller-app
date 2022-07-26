import { fetchWallet } from 'api/wallet.service';

export const GET_WALLET = 'GET_WALLET';
export const GET_WALLET_SUCCESS = 'GET_WALLET_SUCCESS';
export const GET_WALLET_FAILURE = 'GET_WALLET_FAILURE';
export const TOGGLE_WITHDRAWAL_MODAL = 'TOGGLE_WITHDRAWAL_MODAL';
export const WITHDRAW_TO_ACCOUNT = 'WITHDRAW_TO_WALLET';

const action = (type, payload = null) => ({
  type,
  payload,
});

export const getWallet = (dispatch) => {
  dispatch(action(GET_WALLET));
  fetchWallet(
    (res) => {
      dispatch(action(GET_WALLET_SUCCESS, res.data));
    },
    (error) => {
      dispatch(action(GET_WALLET_FAILURE, error.response));
    }
  );
};
