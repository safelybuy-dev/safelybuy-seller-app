import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import MealPlanModal from 'components/Modals/addMealPlan';
import Button from 'components/Button';
import { useRouteMatch } from 'react-router-dom';
import InventoryTableView from './InventoryTableView';

function Inventory() {
  const { url } = useRouteMatch();
  const [openModal, setOpenModal] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentItem, setItem] = useState({});
  const [isEdit, setEdit] = useState(false);

  const fetchInventory = useCallback(async () => {
    setLoading(true);
    const response = await axiosWithAuth().get(
      `${baseUrl}/api/v1/meal-plans/seller/my-meal-plans`
    );
    setInventory(response?.data?.data?.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  useEffect(() => {
    if (url.match(/\/add$/i)) return setOpenModal(true);
  }, [url]);
  return (
    <div className="flex flex-col w-full  items-start mt-24 md:mt-10">
      <div className="w-[90%] md:w-full mx-auto">
        <Breadcrumb
          parentText="Food"
          parentLink="/food"
          childText="Manage Meal Plan Inventory"
          childLink="/food/meal-plan"
        />
        <div className="flex justify-between items-center w-full">
          <h2 className="text-base md:text-xl">Meal Plan Inventory</h2>
          <span className="md:inline-block hidden">
            <Button
              canClick
              clickHandler={() => setOpenModal(true)}
              event="onClick"
              text="Create a meal plan"
              primary
              roundedFull
              icon="+"
            />
          </span>
          <span className="md:hidden inline-block">
            <Button
              canClick
              clickHandler={() => setOpenModal(true)}
              event="onClick"
              text="Create"
              primary
              roundedFull
              icon="+"
            />
          </span>
        </div>
      </div>
      <InventoryTableView
        loading={loading}
        items={inventory}
        setRestaurantMenuModal={setOpenModal}
        setItem={setItem}
        setEdit={setEdit}
      />
      {openModal && (
        <MealPlanModal
          setRestaurantMenuModal={setOpenModal}
          menuModal={openModal}
          currentItem={currentItem}
          isEdit={isEdit}
          setEdit={setEdit}
        />
      )}
    </div>
  );
}

export default Inventory;
