import React, { useState, useEffect, useCallback } from 'react';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import RestaurantMenuModal from 'components/Modals/addRestaurantMenuModal';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import { useRouteMatch, useParams } from 'react-router-dom';
import InventoryTableView from './InventoryTableView';
import Multicrumb from 'components/Multicrumb';
import { markMenuSoldOut } from 'api/shopping';
import { errorFormatter } from 'utilities/error-formatter';

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

  const selloutItem = async (data) => {
    setLoading(true);
    markMenuSoldOut(
      (response) => {
        addToast('STATUS UPDATED', {
          appearance: 'success',
          autoDismiss: true,
        });
        fetchInventory();
      },
      (error) => {
        const message = errorFormatter(error);
        addToast(message, {
          appearance: 'error',
          autoDismiss: true,
        });
      },
      data
    );
  };

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  useEffect(() => {
    if (url.includes('add')) return setRestaurantMenuModal(true);
  }, [url]);
  return (
    <div className="flex flex-col w-full items-start mt-24 md:mt-10">
      <div className="w-[90%] md:w-full mx-auto">
        <Multicrumb links={links} />
        <div className="flex justify-between w-full mt-4 md:mt-0">
          <h2 className="text-xl">Manage {restaurantName}'s Menus</h2>
          <span className="">
            <Button
              canClick
              clickHandler={() => setRestaurantMenuModal(true)}
              event="onClick"
              text={
                <span>
                  Create <span className="hidden md:inline">a menu</span>{' '}
                </span>
              }
              primary
              roundedFull
              icon="+"
            />
          </span>
          {/* <span className="md:hidden inline-block">
            <Button text="Recent" secondary roundedFull preTagText="50" />
          </span> */}
        </div>
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
