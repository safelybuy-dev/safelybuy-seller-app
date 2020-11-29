import React from "react";
import { useTable } from "react-table";
import { ArrowRight } from "../../../svg";

const RecentSales = () => {
  const data = React.useMemo(
    () => [
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-lime-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-lime-400 h-3 inline-block rounded-full"></div>
            </div>
            Shopping
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Item sold</p>
            <p className="text-purple-600 text-xs">#12230223938489</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(120000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-green-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-green-400 h-3 inline-block rounded-full"></div>
            </div>
            Delivery
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Item shipped</p>
            <p className="text-purple-600 text-xs">#12230223938489</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(4450).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-purple-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-purple-400 h-3 inline-block rounded-full"></div>
            </div>
            Tickets
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Ticket sold</p>
            <p className="text-purple-600 text-xs">#12230225678325</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(12000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-yellow-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-yellow-400 h-3 inline-block rounded-full"></div>
            </div>
            Trading
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Bitcoin sold</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(46000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-yellow-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-yellow-400 h-3 inline-block rounded-full"></div>
            </div>
            Trading
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Giftcard bought</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(520090).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-lime-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-lime-400 h-3 inline-block rounded-full"></div>
            </div>
            Shopping
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Item sold</p>
            <p className="text-purple-600 text-xs">#12230223938489</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(120000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-lime-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-lime-400 h-3 inline-block rounded-full"></div>
            </div>
            Shopping
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Item sold</p>
            <p className="text-purple-600 text-xs">#12230223938489</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(120000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <>
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping w-5 bg-purple-100 mr-2 h-5 inline-block rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 bg-purple-400 h-3 inline-block rounded-full"></div>
            </div>
            Tickets
          </>
        ),
        desc: (
          <p>
            <p className="text-gray-400 text-xs">Ticket sold</p>
            <p className="text-purple-600 text-xs">#12230223938489</p>
          </p>
        ),
        orderId: "12230223938489",
        amount: (
          <p className="text-right">
            {Number(10000).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            })}
          </p>
        ),
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
    <>
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="pb-4 font-normal last:text-right"
                  {...column.getHeaderProps()}
                >
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
      </table>
      <div className="flex justify-between mt-8 w-full">
        <span className="text-gray-500">Showing 8 of 100</span>
        <div className="flex items-center text-purple-500">
          See all &nbsp; <ArrowRight />
        </div>
      </div>
    </>
  );
};

export default RecentSales;
