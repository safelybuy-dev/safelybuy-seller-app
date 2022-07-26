import { createContext, useContext, useReducer } from 'react';
import reducer, { initialWalletState } from 'reducers/wallet.reducer';

const WalletContext = createContext();

const WalletProvider = ({ children }) => (
  <WalletContext.Provider value={useReducer(reducer, initialWalletState)}>
    {children}
  </WalletContext.Provider>
);

export const useWallet = () => useContext(WalletContext);

export default WalletProvider;
