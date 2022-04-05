import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';

function TableBody({ setSelectedOrder, orders }) {
  console.log(orders);
  const ordersData = React.useMemo(
    () =>
      orders
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((order) => ({
          status: (
            <>
              <div className="relative w-8 h-4 inline-block">
                <div className="absolute animate-ping w-5 bg-gray-100 mr-2 h-5 inline-block" />
                <div className="absolute top-1 left-1 w-3 bg-black h-3 inline-block" />
              </div>
              To be confirmed
            </>
          ),
          shipping_details: (
            <div className="">
              <p className="text-lg">DHL Delivery</p>
              <div className="my-3">
                <p className="text-xs uppercase text-gray-400">
                  Expected Ship Date
                </p>
                <p className="">
                  {new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }).format(Date.now())}
                </p>
              </div>
              <div className="my-3">
                <p className="text-xs uppercase text-gray-400">Deliver by</p>
                <p className="">
                  {new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }).format(Date.now())}{' '}
                  to{' '}
                  {new Intl.DateTimeFormat('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }).format(Date.now() + 1000000000)}
                </p>
              </div>
            </div>
          ),

          details: (
            <div>
              <p
                onClick={() => setSelectedOrder({ name: 'New Meaning' })}
                className="text-purple-600 cursor-pointer text-sm">
                {order.order_id}
              </p>
              <p className="text-lg">{order.item?.title}</p>
              <div className="flex flex-wrap mt-3">
                <div className="">
                  <div className="mr-4 my-3">
                    <p className="text-xs uppercase text-gray-400">Quantity</p>
                    <p className="">{order.quantity}</p>
                  </div>
                  <div className="mr-4 my-3">
                    <p className="text-xs uppercase text-gray-400">
                      CONTact buyer
                    </p>
                    <p className="">Elvis Presely</p>
                  </div>
                </div>
                <div className="">
                  <div className="mr-4 my-3">
                    <p className="text-xs uppercase text-gray-400">Price</p>
                    <p className="">
                      {order.price.toLocaleString('en-NG', {
                        style: 'currency',
                        currency: 'NGN',
                      })}
                    </p>
                  </div>
                  <div className="mr-4 my-3">
                    <p className="text-xs uppercase text-gray-400">
                      payment type
                    </p>
                    <p className="">Online Payment</p>
                  </div>
                </div>
                <div className="">
                  <div className="mr-4 my-3">
                    <p className="text-xs uppercase text-gray-400">SKU</p>
                    <p className="">SB-#2123434343</p>
                  </div>
                </div>
              </div>
            </div>
          ),

          date: (
            <p className="">
              {new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                hour12: true,
                minute: 'numeric',
              }).format(Date.parse(order.created_at))}
            </p>
          ),
          actions: (
            <div>
              <Button roundedFull primary>
                Accept
              </Button>
              <span className="inline-block p-1" />
              <Button roundedFull danger>
                Cancel
              </Button>
            </div>
          ),
        })),
    [orders, setSelectedOrder]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Order Date', accessor: 'date' },
      { Header: 'Order Details', accessor: 'details' },
      { Header: 'Shipping', accessor: 'shipping_details' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Actions', accessor: 'actions' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: ordersData });

  return (
    <div className="overflow-x-scroll mt-8">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="pb-4 font-normal" {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="border-b last:border-b-0" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: '100px', maxWidth: '250px' }}
                      className="align-top pr-4   border-gray-100 py-4"
                      {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableBody;
