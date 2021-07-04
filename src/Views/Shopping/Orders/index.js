import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
import OrdersTableView from './OrdersTableView';

const Orders = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <Breadcrumb
        parentText='Shopping'
        parentLink='/shopping'
        childText='Order Management'
        childLink='/shopping/orders'
      />
      <div className='flex justify-between w-full'>
        <h2 className='text-xl'>Manage Orders</h2>
      </div>
      <OrdersTableView />
    </div>
  );
};

export default Orders;
