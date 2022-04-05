import React, { useState, useEffect } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import InventoryTableView from './InventoryTableView';

function Inventory() {
  const [restaurantInventory, setRestaurantInventory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        setLoading(true);
        const response = await axiosWithAuth().get(
          `${baseUrl}/api/v1/meal-plans-orders/seller/my-meal-plans-orders`
        );
        setRestaurantInventory(response.data.data?.data);
        setLoading(false);
      } catch (error) {
        console.error(error.response || error.message);
      }
    };
    fetchInventory();
  }, []);

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
      <InventoryTableView loading={loading} items={restaurantInventory} />
    </div>
  );
}

export default Inventory;
