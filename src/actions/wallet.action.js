import { fetchWallet, fetchWalletHistory } from 'api/wallet.service';
import { errorFormatter } from 'utilities/error-formatter';

export const GET_WALLET = 'GET_WALLET';
export const GET_WALLET_SUCCESS = 'GET_WALLET_SUCCESS';
export const GET_WALLET_FAILURE = 'GET_WALLET_FAILURE';
export const TOGGLE_WITHDRAWAL_MODAL = 'TOGGLE_WITHDRAWAL_MODAL';
export const WITHDRAW_TO_ACCOUNT = 'WITHDRAW_TO_WALLET';
export const GET_WALLET_HISTORY = 'GET_WALLET_HISTORY';
export const GET_WALLET_HISTORY_SUCCESS = 'GET_WALLET_HISTORY_SUCCESS';
export const GET_WALLET_HISTORY_FAILURE = 'GET_WALLET_HISTORY_FAILURE';

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

export const getWalletHistory = (dispatch) => {
  dispatch(action(GET_WALLET_HISTORY));
  fetchWalletHistory(
    (res) => {
      dispatch(action(GET_WALLET_HISTORY_SUCCESS, res.data));
    },
    (error) => {
      const message = errorFormatter(error);
      dispatch(action(GET_WALLET_HISTORY_FAILURE, message));
    }
  );
};
