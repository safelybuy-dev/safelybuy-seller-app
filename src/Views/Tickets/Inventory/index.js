import React, { useState, useEffect } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import InventoryTableView from './InventoryTableView';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import TicketModal from 'components/Modals/addTicketEventModal';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import { useRouteMatch } from 'react-router-dom';


const Inventory = () => {
  let { url } = useRouteMatch();
  const [openTicketModal, setTicketModal] = useState(false);
  const { addToast } = useToasts();
  const [ticketInventory, setTicketInventory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInventory = async () => {
    setLoading(true);
    const response = await axiosWithAuth().get(
      `${baseUrl}/api/v1/report/ticket-inventory`
    );
    setTicketInventory(response?.data?.inventory);
    setLoading(false);
  };

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      await axiosWithAuth().post(`${baseUrl}/api/v1/seller/event/delete/${id}`);
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
      await axiosWithAuth().post(`${baseUrl}/api/v1/seller/event/sellout/${id}`);
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
    if (url.includes('add')) return setTicketModal(true);
  }, [url]);

  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Tickets'
        parentLink='/tickets'
        childText='Manage Inventory'
        childLink='/tickets/inventory'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Manage Inventory</h2>
        <span className='md:inline-block hidden'>
          <Button
            canClick={true}
            clickHandler={() => setTicketModal(true)}
            event='onClick'
            text='Create a ticket or an event'
            primary
            roundedFull
            icon='+'
          />
        </span>
        <span className='md:hidden inline-block'>
          <Button text='Recent' secondary roundedFull preTagText='50' />
        </span>
      </div>
      {/* test */}
          <InventoryTableView
           loading={loading}
           items={ticketInventory}
           deleteItem={deleteItem}
           selloutItem={selloutItem}
          />
        {/* test  */}
      <TicketModal
        openTicketModal={openTicketModal}
        setTicketModal={setTicketModal}
      />
    </div>
  );
};

export default Inventory;
