import { getWalletHistory } from 'actions/wallet.action';
import { useWallet } from 'context/wallet.context';
import React, { useEffect } from 'react';
import InventoryTableView from './InventoryTableView';

function Inventory() {
  const [{ walletHistory, loadingWalletHistory }, dispatch] = useWallet();

  useEffect(() => {
    if (!walletHistory?.data?.length) {
      getWalletHistory(dispatch);
    }
  }, [dispatch, walletHistory]);

  return (
    <div className="flex flex-col w-full items-start mt-24 md:mt-12">
      <div className="flex justify-between w-full px-3 mb-8 md:mb-0 items-center">
        <h2 className="text-xl">Manage Inventory</h2>
      </div>
      <InventoryTableView
        loading={loadingWalletHistory}
        items={walletHistory?.data || []}
      />
    </div>
  );
}

export default Inventory;
