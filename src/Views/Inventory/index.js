import React, { useState, useEffect } from 'react';
import Modal from 'components/Modals/addProductModal';
import TicketModal from 'components/Modals/addTicketEventModal';
import Button from 'components/Button';
import { useRouteMatch } from 'react-router-dom';
import { PlusIcon } from 'svg';
import InventoryTableView from "./InventoryTableView";

const Inventory = ({ value }) => {
  let { url } = useRouteMatch();
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [openTicketModal, setTicketModal] = useState(false);

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
              icon={<PlusIcon />}
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
      <InventoryTableView />
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
