import React from 'react';
import { useTable } from 'react-table';
import { convertToNaira } from 'utilities/getCurrency';

function TableBody({ active, items = [] }) {
  const data = React.useMemo(
    () =>
      items
        .filter((item) => item.status === active || active === 'all')
        .map((item) => ({
          id: item.id,
          reference: '#' + item.reference,
          status: <div className="uppercase">{item.status}</div>,
          amount: (
            <p className="text-gray-800 font-semibold">
              {convertToNaira(item?.amount || 0)}
            </p>
          ),
          type: (
            <div>
              <p className="mb-2 text-gray-800">{item.transaction_type}</p>
              <p className="w-[70%] text-xs text-gray-300">{item.comment}</p>
            </div>
          ),
          date: (
            <div className=" ">
              {new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }).format(Date.parse(item.created_at))}
            </div>
          ),
        })),
    [active, items]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date Created',
        accessor: 'date',
      },
      {
        Header: 'Reference ID',
        accessor: 'reference',
      },
      {
        Header: 'Transaction Amount',
        accessor: 'amount',
      },
      {
        Header: 'Transaction Type',
        accessor: 'type',
      },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  if (data.length === 0) {
    return (
      <div className="mt-20 mb-20 flex justify-center">
        <span className="text-purple-600">No items Available</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-scroll md:overflow-hidden mt-8">
      <table {...getTableProps()} className="w-full text-sm text-gray-800">
        <thead className="text-left border-b-2 border-gray-100 ">
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
                      className="border-b-2 pr-4 border-gray-100 py-4 min-w-[150px] lg:w-fit"
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
