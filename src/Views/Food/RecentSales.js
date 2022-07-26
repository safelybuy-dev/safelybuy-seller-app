import React from 'react';
import { useTable } from 'react-table';
import moment from 'moment';

const RecentSales = React.forwardRef(
  ({ items, setSelectedItem, recentType }, ref) => {
    const data1 = React.useMemo(
      () =>
        items?.map((item, index) => ({
          id: index,
          serial: <p>{index + 1}</p>,
          deliveryDate: (
            <div className="text-[#A7A7A7]">
              <p>{moment(item.delivery_date, 'YYYY-MM-DD').format('LL')}</p>
            </div>
          ),
          meal: (
            <div className="flex items-center">
              <div className="h-[40px] w-[40px] bg-gray-500 overflow-hidden rounded-[4px] hidden md:block">
                <img
                  src={item?.meal_plan?.main_image}
                  alt={item?.meal_plan?.name}
                  className=" object-cover cursor-pointer h-full w-full"
                />
              </div>
              <div className="md:ml-3">
                <h4
                  className="capitalize text-purple-600 cursor-pointer"
                  onClick={() => setSelectedItem(item)}>
                  {item?.meal_plan?.name}
                </h4>
                <p className="text-[#A7A7A7]">
                  {item?.meal_plan?.sku} - {item?.created_at.split('T')[0]}
                </p>
              </div>
            </div>
          ),
          customer: (
            <div>
              <p>
                {item?.buyer?.firstname} {item?.buyer?.lastname}
              </p>
              <p>{item?.delivery_address}</p>
              <p>{item?.buyer?.phone}</p>
            </div>
          ),
          price: <p>{Number(item?.meal_plan?.cost).toLocaleString()}NGN</p>,
          time: <p>{item?.delivery_time}</p>,
        })),
      [items, setSelectedItem]
    );

    const data2 = React.useMemo(
      () =>
        items
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((item) => ({
            status: item.order_status,
            order: (
              <div>
                <p>{item.order_note}</p>
                <p>{item.order_ref}</p>
              </div>
            ),
            receiver: (
              <p
                className="text-purple-600 cursor-pointer text-sm"
                onClick={() => {}}>
                {`${item?.buyer?.firstname} ${item?.buyer?.lastname}`}
              </p>
            ),
            details: (
              <div>
                {item?.food_order_details &&
                  item?.food_order_details.map((order) => (
                    <p
                      key={order.id}
                      className="text-purple-600 cursor-pointer text-sm"
                      onClick={() => {}}>
                      {order.quantity} {order.menu.name}
                    </p>
                  ))}
              </div>
            ),
          })),
      [items]
    );

    const columns1 = React.useMemo(
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

    const column2 = React.useMemo(
      () => [
        { Header: 'Status', accessor: 'status' },
        { Header: 'Order Descriptions', accessor: 'order' },
        {
          Header: 'Receiver Details',
          accessor: 'receiver',
        },
        {
          Header: 'Order Details',
          accessor: 'details',
        },
      ],
      []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
        columns: recentType === 'restaurant' ? column2 : columns1,
        data: recentType === 'restaurant' ? data2 : data1,
      });
    if (data1?.length === 0 || data2?.length === 0)
      return <p className="text-center">No Orders Yet..</p>;
    return (
      <div className="overflow-x-scroll md:overflow-hidden " ref={ref}>
        <table {...getTableProps()} className="w-full text-sm">
          <thead className="text-left border-b-2 border-gray-100">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="pb-4 font-normal "
                    {...column.getHeaderProps()}>
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
                <tr
                  {...row.getRowProps()}
                  className="border-b-2 border-gray-100">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="py-4 pr-8 min-w-[170px] lg:min-w-fit"
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
);

export default RecentSales;
