import React from 'react';
import { useTable } from 'react-table';
// const KeyValue = ({ title, value }) => (
//   <div className="flex my-3 flex-col">
//     <small className="text-gray-400 uppercase text-xs">{title}</small>
//     <h5 className="text-sm w-28">{value}</h5>
//   </div>
// );

function TableBody({ active, setSelectedOrder, setSelectedOwner, items = [] }) {
  const data = React.useMemo(
    () =>
      items
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter((item) => item.order_status === active || active === 'all')
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
              onClick={() => setSelectedOwner(item)}>
              {`${item.owner.firstname} ${item.owner.lastname}`}
            </p>
          ),
          details: (
            <div>
              {item.food_order_details.map((order) => (
                <p
                  key={order.id}
                  className="text-purple-600 cursor-pointer text-sm"
                  onClick={() => setSelectedOrder(order)}>
                  {order.quantity} {order.menu.name}
                </p>
              ))}
            </div>
          ),
        })),
    [setSelectedOrder, items, active, setSelectedOwner]
  );

  const columns = React.useMemo(
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
