import React from "react";
import { useTable } from "react-table";

const RecentSales = () => {
  const data = React.useMemo(
    () => [
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "shopping",
        desc: "Item sold",
        orderId: "12230223938489",
        amount: 120000,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "delivery",
        desc: "Item Shipped",
        orderId: "12230223938489",
        amount: 4450,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "tickets",
        desc: "Tickets sold",
        orderId: "12230223938489",
        amount: 12000,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "trading",
        desc: "Bitcoin sold",
        orderId: "12230223938489",
        amount: 46000,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "trading",
        desc: "Giftcard bought",
        orderId: "12230223938489",
        amount: 520090,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "shopping",
        desc: (
          <p>
            <p className="text-gray-500">Item sold</p>
            <p className="text-purple-600">#12230223938489</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: 120000,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "shopping",
        desc: "Item sold",
        orderId: "12230223938489",
        amount: 120000,
      },
      {
        createdAt: Date.now(),
        name: "Kareem Chibuzor",
        transactionType: "tickets",
        desc: "Ticket sold",
        orderId: "12230223938489",
        amount: 10000,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "createdAt" },
      { Header: "Name", accessor: "name" },
      { Header: "Type", accessor: "transactionType" },
      { Header: "Description", accessor: "desc" },
      { Header: "Amount", accessor: "amount" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead className="text-left border-b-2 border-gray-100">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="pb-4" {...column.getHeaderProps()}>
                {column.render("Header")}
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
                    className="border-b-2 border-gray-100 py-4"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot className="flex">
        <span className="">Showing 8 of 100</span>
        <span className="">See All</span>
      </tfoot>
    </table>
  );
};

export default RecentSales;
