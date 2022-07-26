import React, { useState, useEffect } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import RestaurantModal from 'components/Modals/addRestaurantModal';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import { useRouteMatch } from 'react-router-dom';
import InventoryTableView from './InventoryTableView';

function Inventory() {
  const { url } = useRouteMatch();
  const [openRestaurantModal, setRestaurantModal] = useState(false);
  const { addToast } = useToasts();
  const [restaurantInventory, setRestaurantInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const [isEdit, setEdit] = useState(false);

  const fetchInventory = async () => {
    setLoading(true);
    const response = await axiosWithAuth().get(
      `${baseUrl}/api/v1/restuarants/my-restuarants`
    );
    setRestaurantInventory(response?.data?.data);
    setLoading(false);
  };

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      await axiosWithAuth().post(`${baseUrl}/api/v1/restuarants/delete/${id}`);
      setLoading(false);
      addToast('Item deleted from inventory', {
        appearance: 'success',
        autoDismiss: true,
      });
      fetchInventory();
    } catch (error) {
      setLoading(false);
      addToast(error.response.data.message || error.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const selloutItem = async (id) => {
    try {
      setLoading(true);
      await axiosWithAuth().post(
        `${baseUrl}/api/v1/seller/event/sellout/${id}`
      );
      setLoading(false);
      addToast('Item sold out', {
        appearance: 'success',
        autoDismiss: true,
      });
      fetchInventory();
    } catch (error) {
      setLoading(false);
      console.log(error.message, error.response);
      addToast(error.message, { appearance: 'error', autoDismiss: true });
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  useEffect(() => {
    if (url.includes('add')) return setRestaurantModal(true);
  }, [url]);
  return (
    <div className="flex flex-col w-full items-start mt-24 md:mt-10">
      <div className="w-[90%] md:w-full mx-auto">
        <Breadcrumb
          parentText="Food"
          parentLink="/food"
          childText="Manage Inventory"
          childLink="/food/inventory"
        />
        <div className="flex justify-between w-full">
          <h2 className="text-xl">Manage Inventory</h2>
          <span className="md:inline-block hidden">
            <Button
              canClick
              clickHandler={() => setRestaurantModal(true)}
              event="onClick"
              text="Create a restaurant"
              primary
              roundedFull
              icon="+"
            />
          </span>
          <span className="md:hidden inline-block">
            <Button
              canClick
              clickHandler={() => setRestaurantModal(true)}
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
        items={restaurantInventory}
        deleteItem={deleteItem}
        selloutItem={selloutItem}
        setRestaurantModal={setRestaurantModal}
        setEdit={setEdit}
        setCurrentRestaurant={setCurrentRestaurant}
      />
      {openRestaurantModal && (
        <RestaurantModal
          openRestaurantModal={openRestaurantModal}
          setRestaurantModal={setRestaurantModal}
          currentRestaurant={currentRestaurant}
          isEdit={isEdit}
          setEdit={setEdit}
        />
      )}
    </div>
  );
}

export default Inventory;
