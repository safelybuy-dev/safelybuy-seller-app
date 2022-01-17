import React, { useState } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import TicketModal from 'components/Modals/addTicketEventModal';
import Button from 'components/Button';

const Inventory = () => {
  const [openTicketModal, setTicketModal] = useState(false);

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
        <span className='inline-block md:hidden'>
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
        <span className='hidden md:inline-block'>
          <Button text='Recent' secondary roundedFull preTagText='50' />
        </span>
      </div>

      <TicketModal
        openTicketModal={openTicketModal}
        setTicketModal={setTicketModal}
      />
    </div>
  );
};

export default Inventory;
