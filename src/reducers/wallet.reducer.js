import {
  GET_WALLET,
  GET_WALLET_FAILURE,
  GET_WALLET_SUCCESS,
  TOGGLE_WITHDRAWAL_MODAL,
  WITHDRAW_TO_ACCOUNT,
  GET_WALLET_HISTORY,
  GET_WALLET_HISTORY_FAILURE,
  GET_WALLET_HISTORY_SUCCESS,
} from 'actions/wallet.action';

export const initialWalletState = {
  wallet: null,
  loadingWallet: false,
  walletError: '',

  walletHistory: null,
  loadingWalletHistory: false,
  walletHistoryError: '',

  withdrawalModal: false,
};

const reducer = (currentState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_WALLET:
      return {
        ...currentState,
        loadingWallet: true,
      };
    case GET_WALLET_SUCCESS:
      return {
        ...currentState,
        wallet: action.payload,
        walletError: '',
        loadingWallet: false,
      };
    case GET_WALLET_FAILURE:
      return {
        ...currentState,
        walletError: action.payload,
        wallet: null,
        loadingWallet: false,
      };
    case TOGGLE_WITHDRAWAL_MODAL:
      return {
        ...currentState,
        withdrawalModal: !currentState.withdrawalModal,
      };
    case WITHDRAW_TO_ACCOUNT:
      return {
        ...currentState,
        wallet: {
          ...currentState.wallet,
          balance: currentState.wallet.balance - action.payload,
        },
      };

    case GET_WALLET_HISTORY:
      return {
        ...currentState,
        loadingWalletHistory: true,
      };

    case GET_WALLET_HISTORY_SUCCESS:
      return {
        ...currentState,
        walletHistory: action.payload,
        walletHistoryError: '',
        loadingWalletHistory: false,
      };

    case GET_WALLET_HISTORY_FAILURE:
      return {
        ...currentState,
        walletHistoryError: action.payload,
        walletHistory: initialWalletState.walletHistory,
        loadingWalletHistory: true,
      };

    default:
      return currentState;
  }
};

export default reducer;
