import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const InventoryTableView = () => {
  const [active, setActive] = useState("all");
  return (
    <div className="w-full mt-8">
      <TabHeader active={active} setActive={setActive} />
      <div className="bg-white relative rounded-b-2xl rounded-tr-2xl p-10 z-50">
        <TableHeader active={active} setActive={setActive} />
        <TableBody />
      </div>
    </div>
  );
};

export default InventoryTableView;
