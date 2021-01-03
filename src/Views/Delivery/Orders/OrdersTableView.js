import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import OrderDetails from "./OrderDetails";
import SenderDetails from "./SenderDetails";

const OrdersTableView = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedSender, setSelectedSender] = useState(null);
  return (
    <div className="w-full mt-8">
      <div className="bg-white overflow-x relative rounded-2xl shadow-lg p-10 z-40 md:p-4 md:-mx-6">
        <TableHeader />
        <TableBody
          setSelectedSender={setSelectedSender}
          setSelectedOrder={setSelectedOrder}
        />
      </div>
      <OrderDetails
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
       <SenderDetails
        selectedSender={selectedSender}
        setSelectedSender={setSelectedSender}
      />
    </div>
  );
};

export default OrdersTableView;
