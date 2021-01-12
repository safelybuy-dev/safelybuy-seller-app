import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import { PlusIcon } from "../../svg";
import AddGiftCard from "./AddGiftCard";

import InventoryTableView from "./InventoryTableView";

const Inventory = () => {
  const [selectedSeller, setSelectedSeller] = useState(null);
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb parentText="User Management" parentLink="/customers" />
      <AddGiftCard
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
      />
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Manage Users</h2>
        <span onClick={() => setSelectedSeller({ name: "New Meaning" })}>
          <Button primary text="Add new user" roundedLg icon={<PlusIcon />} />
        </span>
      </div>
      <InventoryTableView />
    </div>
  );
};

export default Inventory;
