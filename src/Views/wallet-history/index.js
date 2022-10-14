import React from 'react';
import InventoryTableView from './InventoryTableView';

function Inventory() {
  return (
    <div className="flex flex-col w-full items-start mt-24 md:mt-12">
      <div className="flex justify-between w-full  mb-8 md:mb-0 items-center">
        <h2 className="text-xl">Wallet History</h2>
      </div>
      <InventoryTableView />
    </div>
  );
}

export default Inventory;
