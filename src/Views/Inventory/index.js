import React, { useState, useEffect } from 'react';
import Modal from 'components/Modals/addProductModal';
import TicketModal from 'components/Modals/addTicketEventModal';
import Button from 'components/Button';
import { useRouteMatch } from 'react-router-dom';
import { PlusIcon } from 'svg';
import InventoryTableView from './InventoryTableView';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import { useToasts } from 'react-toast-notifications';

const Inventory = ({ value }) => {
  let { url } = useRouteMatch();
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
    <div className='flex flex-col w-full items-start'>
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Manage Inventory</h2>
        <span className='inline-block'>
          {value === 'Shopping' && (
            <Button
              canClick={true}
              clickHandler={() => setSelectedProduct(true)}
              event='onClick'
              text='Add a New Product'
              primary
              roundedFull
              icon={<PlusIcon scale={1.2} />}
            />
          )}
          {value === 'Tickets' && (
            <Button
              canClick={true}
              clickHandler={() => setTicketModal(true)}
              event='onClick'
              text='Create a ticket or an event'
              primary
              roundedFull
              icon='+'
            />
          )}
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
};

export default Inventory;
