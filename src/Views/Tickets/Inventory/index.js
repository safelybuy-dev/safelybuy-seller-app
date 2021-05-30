import React, { useState } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import Modal from 'components/Modals/addProductModal';
import Button from 'components/Button';
import { pluSVG } from 'svg';

const Inventory = () => {
  const [selectedProduct, setSelectedProduct] = useState(true);

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
            clickHandler={() => setSelectedProduct(true)}
            event='onClick'
            text='Add a New Product'
            primary
            roundedFull
            icon='+'
          />
        </span>
        <span className='hidden md:inline-block'>
          <Button text='Recent' secondary roundedFull preTagText='50' />
        </span>
      </div>

      <Modal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default Inventory;
