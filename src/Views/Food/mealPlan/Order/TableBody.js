import React from 'react';
import { useTable } from 'react-table';
import moment from 'moment';

function TableBody({ active, setSelectedOrder, setSelectedOwner, items = [] }) {
  const data = React.useMemo(
    () =>
      items
        .filter(
          (item) => item?.meal_plan?.status === active || active === 'all'
        )
        .map((item, index) => ({
          id: index,
          serial: <p>{index + 1}</p>,
          deliveryDate: (
            <div className="text-[#A7A7A7]">
              <p>{moment(item.delivery_date, 'YYYY-MM-DD').format('LL')}</p>
            </div>
          ),
          meal: (
            <div className="flex items-center">
              <img
                className="w-[40px] h-[40px] rounded-sm"
                src={item.meal_plan.main_image}
                alt={item.meal_plan?.name}
              />
              <div className="ml-3">
                <h4
                  className="capitalize text-purple-600 cursor-pointer"
                  onClick={() => setSelectedOrder(item)}>
                  {item.meal_plan.name}
                </h4>
                <p className="text-[#A7A7A7]">
                  {item.meal_plan.sku} - {item.created_at.split('T')[0]}
                </p>
              </div>
            </div>
          ),
          customer: (
            <div>
              <p>
                {item.buyer.firstname} {item.buyer.lastname}
              </p>
              <p>{item.delivery_address}</p>
              <p>{item.buyer.phone}</p>
            </div>
          ),
          price: <p>{item.meal_plan.cost}NGN</p>,
          time: <p>{item.delivery_time}</p>,
        })),
    [items, setSelectedOrder, active]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'S/NO', accessor: 'serial' },
      { Header: 'Delivery Date', accessor: 'deliveryDate' },
      {
        Header: (
          <div>
            <p>Meal</p>
            <small className="text-[#A7A7A7]">Order No & Date</small>
          </div>
        ),
        accessor: 'meal',
      },
      { Header: 'Customer details ', accessor: 'customer' },
      {
        Header: 'Total Price ',
        accessor: 'price',
      },
      {
        Header: 'Delivery Time',
        accessor: 'time',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  if (data.length < 1) {
    return (
      <div className="mt-20 mb-20 flex justify-center">
        <span className="text-purple-600">No items Available</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-scroll md:overflow-x-hidden mt-8">
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: '120px' }}
                      className="border-b-2 pr-4   border-gray-100 py-4"
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
