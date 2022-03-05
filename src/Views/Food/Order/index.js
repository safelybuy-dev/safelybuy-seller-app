import React, { useState, useEffect } from "react";
import Breadcrumb from "components/Breadcrumb";
import InventoryTableView from "./InventoryTableView";
import { axiosWithAuth } from "auth";
import { baseUrl } from "api";

const Inventory = () => {
  const [restaurantInventory, setRestaurantInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderDate, setOrderDate] = useState("");

  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true);
      let response;

      if (!orderDate) {
        response = await axiosWithAuth().get(
          `${baseUrl}/api/v1/seller/food/orders/my-orders`
        );
      } else {
        response = await axiosWithAuth().post(
          `${baseUrl}/api/v1/seller/food/orders/my-orders-on?delivery_date=${orderDate}`
        );
      }
      setRestaurantInventory(response?.data?.data);
      setLoading(false);
    };
    fetchInventory();
  }, [orderDate]);

  return (
    <div className="flex flex-col w-full items-start mt-10">
      <Breadcrumb
        parentText="Food"
        parentLink="/food"
        childText="Manage Inventory"
        childLink="/food/inventory"
      />
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Manage Order</h2>
      </div>
      <InventoryTableView
        loading={loading}
        items={restaurantInventory}
        orderDate={orderDate}
        setOrderDate={setOrderDate}
      />
    </div>
  );
};

export default Inventory;
