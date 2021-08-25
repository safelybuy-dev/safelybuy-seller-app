import { useState, useEffect } from 'react';
import Breadcrumb from 'components/Breadcrumb';
import OrdersTableView from './OrdersTableView';
import { getShoppingOrders } from 'api/shopping';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    getShoppingOrders(
      (res) => {
        setOrders(res.data.orders);
      },
      (err) => {
        console.log(err.message);
      }
    );
  };

  useEffect(() => {
    fetchOrders();
  }, []);

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
      <OrdersTableView orders={orders} />
    </div>
  );
};

export default Orders;
