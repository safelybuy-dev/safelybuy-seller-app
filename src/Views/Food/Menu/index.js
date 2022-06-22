import React, { useState, useEffect, useCallback } from 'react';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import RestaurantMenuModal from 'components/Modals/addRestaurantMenuModal';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import { useRouteMatch, useParams } from 'react-router-dom';
import InventoryTableView from './InventoryTableView';
import Multicrumb from 'components/Multicrumb';

const links = [
  {
    text: 'Food',
    path: '/food',
  },
  {
    text: 'Restaurant Inventory',
    path: '/food/inventory',
  },
  {
    text: 'Restaurant Menu',
    path: '#',
  },
];

function Inventory() {
  const { url } = useRouteMatch();
  const { id, restaurantName } = useParams();
  const [openRestaurantMenuModel, setRestaurantMenuModal] = useState(false);
  const { addToast } = useToasts();
  const [restaurantInventory, setRestaurantInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentItem, setItem] = useState({});
  const [isEdit, setEdit] = useState(false);
  console.log(restaurantInventory);
  const fetchInventory = useCallback(async () => {
    setLoading(true);
    const response = await axiosWithAuth().get(
      `${baseUrl}/api/v1/restuarants/menus/${id}`
    );
    setRestaurantInventory(response?.data?.data);
    setLoading(false);
  }, [id]);

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      await axiosWithAuth().post(`${baseUrl}/api/v1/menus/delete/${id}`);
      setLoading(false);
      addToast('Item deleted from inventory', {
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
  }, [fetchInventory]);

  useEffect(() => {
    if (url.includes('add')) return setRestaurantMenuModal(true);
  }, [url]);
  return (
    <div className="flex flex-col w-full items-start mt-10">
      <Multicrumb links={links} />
      <div className="flex justify-between w-full">
        <h2 className="text-xl">Manage {restaurantName}'s Menus</h2>
        <span className="md:inline-block hidden">
          <Button
            canClick
            clickHandler={() => setRestaurantMenuModal(true)}
            event="onClick"
            text="Create a menu"
            primary
            roundedFull
            icon="+"
          />
        </span>
        <span className="md:hidden inline-block">
          <Button text="Recent" secondary roundedFull preTagText="50" />
        </span>
      </div>
      {/* test */}
      <InventoryTableView
        loading={loading}
        items={restaurantInventory}
        deleteItem={deleteItem}
        selloutItem={selloutItem}
        setRestaurantMenuModal={setRestaurantMenuModal}
        setItem={setItem}
        setEdit={setEdit}
      />
      {/* test  */}
      {openRestaurantMenuModel && (
        <RestaurantMenuModal
          openRestaurantMenuModel={openRestaurantMenuModel}
          setRestaurantMenuModal={setRestaurantMenuModal}
          id={id}
          currentItem={currentItem}
          isEdit={isEdit}
          setEdit={setEdit}
        />
      )}
    </div>
  );
}

export default Inventory;
