import React, { useState, useEffect } from 'react';
import Modal from 'components/Modals/addProductModal';
import TicketModal from 'components/Modals/addTicketEventModal';
import Button from 'components/Button';
import { useRouteMatch } from 'react-router-dom';
import { PlusIcon } from 'svg';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import { useToasts } from 'react-toast-notifications';
import InventoryTableView from './InventoryTableView';

function Inventory({ value }) {
  const { url } = useRouteMatch();
  const { addToast } = useToasts();
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [openTicketModal, setTicketModal] = useState(false);
  const [shoppingInventory, setShoppingInventory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInventory = async () => {
    setLoading(true);
    const response = await axiosWithAuth().get(
      `${baseUrl}/api/v1/report/shop-inventory`
    );
    setShoppingInventory(response?.data?.inventory);
    setLoading(false);
  };

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      await axiosWithAuth().post(`${baseUrl}/api/v1/seller/item/d/${id}`);
      setLoading(false);
      addToast('Item deleted from inventory', {
        appearance: 'success',
        autoDismiss: true,
      });
      fetchInventory();
    } catch (error) {
      console.log(error.message, error.response);
      addToast(error.message, { appearance: 'error', autoDismiss: true });
    }
  };

  const selloutItem = async (id) => {
    try {
      setLoading(true);
      await axiosWithAuth().post(`${baseUrl}/api/v1/seller/item/sellout/${id}`);
      setLoading(false);
      addToast('Item sold out', {
        appearance: 'success',
        autoDismiss: true,
      });
      fetchInventory();
    } catch (error) {
      console.log(error.message, error.response);
      addToast(error.message, { appearance: 'error', autoDismiss: true });
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  useEffect(() => {
    if (url.includes('add')) return setSelectedProduct(true);
  }, [url]);

  return (
    <div className="flex flex-col w-full items-start mt-24 md:mt-12">
      <div className="flex justify-between w-full px-3 mb-8 md:mb-0 items-center">
        <h2 className="text-xl">Manage Inventory</h2>
        <span className="hidden lg:inline-block">
          <Button
            canClick
            clickHandler={() => setSelectedProduct(true)}
            event="onClick"
            text="Add a New Product"
            primary
            roundedFull
            icon={<PlusIcon scale={1.2} />}
          />
        </span>
        <span className="inline-block lg:hidden">
          <Button
            canClick
            clickHandler={() => setSelectedProduct(true)}
            event="onClick"
            text="Add"
            primary
            roundedFull
            icon={<PlusIcon scale={1} />}
          />
        </span>
      </div>
      <InventoryTableView
        loading={loading}
        items={shoppingInventory}
        deleteItem={deleteItem}
        selloutItem={selloutItem}
      />
      <Modal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <TicketModal
        openTicketModal={openTicketModal}
        setTicketModal={setTicketModal}
      />
    </div>
  );
}

export default Inventory;
