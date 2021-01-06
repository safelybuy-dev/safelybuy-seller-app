import React from "react";
import { useTable } from "react-table";

const RecentSales = ({ setSelectedCustomer }) => {
  const data = React.useMemo(
    () => [
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          hour12: true,
          minute: "numeric",
        }).format(Date.now()),
        name: <p className="text-purple-500">Kareem Chibuzor</p>,
        transactionType: (
          <div className="text-purple-500">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block"></div>
            </div>
            Giftcard Bought
          </div>
        ),
        customer: (
          <p
            onClick={() => setSelectedCustomer({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        trans_no: "#12230223938489",
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
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        customer: (
          <p
            onClick={() => setSelectedCustomer({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        trans_no: "#12230223938489",
        transactionType: (
          <div className="text-green-500">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-green-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-green-500 h-2 inline-block"></div>
            </div>
            Giftcard Sold
          </div>
        ),
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        transactionType: (
          <div className="text-purple-500">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block"></div>
            </div>
            Giftcard Bought
          </div>
        ),
        customer: (
          <p
            onClick={() => setSelectedCustomer({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        trans_no: "#12230223938489",
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        customer: (
          <p
            onClick={() => setSelectedCustomer({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        transactionType: (
          <div className="text-green-500">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-green-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-green-500 h-2 inline-block"></div>
            </div>
            Giftcard Sold
          </div>
        ),
        trans_no: "#12230223938489",
      },
      {
        createdAt: new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        customer: (
          <p
            onClick={() => setSelectedCustomer({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        trans_no: "#12230223938489",
        transactionType: (
          <div className="text-purple-500">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute animate-ping mt-1 w-4 bg-purple-100 mr-2 h-4 inline-block"></div>
              <div className="absolute top-1 left-1 mt-1 w-2 bg-purple-500 h-2 inline-block"></div>
            </div>
            Giftcard Bought
          </div>
        ),
      },
    ],
    [setSelectedCustomer]
  );

  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "createdAt" },
      { Header: "Customer", accessor: "customer" },
      { Header: "Transaction Number", accessor: "trans_no" },
      { Header: "Transaction Type", accessor: "transactionType" },
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
    <div className="overflow-x-scroll">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="pb-4 font-normal" {...column.getHeaderProps()}>
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
                      style={{ minWidth: "150px" }}
                      className="border-b-2 pr-4 min-w-max last:pr-0 border-gray-100 py-4"
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
    </div>
  );
};

export default RecentSales;
