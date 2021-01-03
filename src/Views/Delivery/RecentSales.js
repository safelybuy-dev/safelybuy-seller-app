import React from "react";
import { useTable } from "react-table";

const RecentSales = ({ setSelectedSender }) => {
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
        sender: (
          <p
            // onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">2 Shirts and an iPhone</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                weight
                <span className="text-black capitalize">Less than 2.5kg</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                price
                <span className="text-black capitalize">5,474NGN</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                receiver's name
                <span className="text-black capitalize">Elvis Presely</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                pickup type
                <span className="text-black capitalize">Pickup selected</span>
              </div>
            </div>
          </div>
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
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }).format(Date.now()),
        sender: (
          <p
            // onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">2 Shirts and an iPhone</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                weight
                <span className="text-black capitalize">Less than 2.5kg</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                price
                <span className="text-black capitalize">5,474NGN</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                receiver's name
                <span className="text-black capitalize">Elvis Presely</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                pickup type
                <span className="text-black capitalize">Pickup selected</span>
              </div>
            </div>
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
        sender: (
          <p
            // onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">2 Shirts and an iPhone</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                weight
                <span className="text-black capitalize">Less than 2.5kg</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                price
                <span className="text-black capitalize">5,474NGN</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                receiver's name
                <span className="text-black capitalize">Elvis Presely</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                pickup type
                <span className="text-black capitalize">Pickup selected</span>
              </div>
            </div>
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
        sender: (
          <p
            // onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">2 Shirts and an iPhone</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                weight
                <span className="text-black capitalize">Less than 2.5kg</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                price
                <span className="text-black capitalize">5,474NGN</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                receiver's name
                <span className="text-black capitalize">Elvis Presely</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                pickup type
                <span className="text-black capitalize">Pickup selected</span>
              </div>
            </div>
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
        sender: (
          <p
            // onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500"
          >
            Don Norman
          </p>
        ),
        desc: (
          <div>
            <p className="text-purple-600 text-sm">2 Shirts and an iPhone</p>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                weight
                <span className="text-black capitalize">Less than 2.5kg</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                price
                <span className="text-black capitalize">5,474NGN</span>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="flex flex-col text-xs text-gray-300 uppercase">
                receiver's name
                <span className="text-black capitalize">Elvis Presely</span>
              </div>
              <div className="flex ml-4 flex-col text-xs text-gray-300 uppercase">
                pickup type
                <span className="text-black capitalize">Pickup selected</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Date", accessor: "createdAt" },
      { Header: "Sender's Name", accessor: "sender" },
      { Header: "Other Details", accessor: "desc" },
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
                      style={{ minWidth: "120px" }}
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
