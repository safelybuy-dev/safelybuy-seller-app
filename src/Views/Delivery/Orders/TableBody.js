import React from "react";
import { useTable } from "react-table";
import Button from "../../../components/Button";

const TableBody = ({ setSelectedOrder, setSelectedSender }) => {
  const data = React.useMemo(
    () => [
      {
        sender: (
          <p
            onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Don Norman
          </p>
        ),
        shipping_details: (
          <div className="">
            <p className="text-lg">DHL Delivery</p>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">
                Expected Ship Date
              </p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}
              </p>
            </div>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">Deliver by</p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}{" "}
                to{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),
        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: "New Meaning" })}
              className="text-purple-600 text-sm cursor-pointer"
            >
              2 Shirts and an iPhone
            </p>
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
        date: (
          <p className="">
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            }).format(Date.now())}
          </p>
        ),
        actions: (
          <div className="min-w-max">
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="">
              <span className=""></span>
              <Button rounded danger>
                Cancel
              </Button>
            </div>
          </div>
        ),
      },
      {
        sender: (
          <p
            onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Don Norman
          </p>
        ),
        shipping_details: (
          <div className="">
            <p className="text-lg">DHL Delivery</p>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">
                Expected Ship Date
              </p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}
              </p>
            </div>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">Deliver by</p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}{" "}
                to{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),
        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: "New Meaning" })}
              className="text-purple-600 text-sm cursor-pointer"
            >
              2 Shirts and an iPhone
            </p>
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
        date: (
          <p className="">
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            }).format(Date.now())}
          </p>
        ),
        actions: (
          <div className="min-w-max">
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="">
              <span className=""></span>
              <Button rounded danger>
                Cancel
              </Button>
            </div>
          </div>
        ),
      },
      {
        sender: (
          <p
            onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Don Norman
          </p>
        ),
        shipping_details: (
          <div className="">
            <p className="text-lg">DHL Delivery</p>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">
                Expected Ship Date
              </p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}
              </p>
            </div>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">Deliver by</p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}{" "}
                to{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),
        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: "New Meaning" })}
              className="text-purple-600 text-sm cursor-pointer"
            >
              2 Shirts and an iPhone
            </p>
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
        date: (
          <p className="">
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            }).format(Date.now())}
          </p>
        ),
        actions: (
          <div className="min-w-max">
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="">
              <span className=""></span>
              <Button rounded danger>
                Cancel
              </Button>
            </div>
          </div>
        ),
      },
      {
        sender: (
          <p
            onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Don Norman
          </p>
        ),
        shipping_details: (
          <div className="">
            <p className="text-lg">DHL Delivery</p>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">
                Expected Ship Date
              </p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}
              </p>
            </div>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">Deliver by</p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}{" "}
                to{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),
        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: "New Meaning" })}
              className="text-purple-600 text-sm cursor-pointer"
            >
              2 Shirts and an iPhone
            </p>
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
        date: (
          <p className="">
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            }).format(Date.now())}
          </p>
        ),
        actions: (
          <div className="min-w-max">
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="">
              <span className=""></span>
              <Button rounded danger>
                Cancel
              </Button>
            </div>
          </div>
        ),
      },
      {
        sender: (
          <p
            onClick={() => setSelectedSender({ name: "New Meaning" })}
            className="text-purple-500 cursor-pointer"
          >
            Don Norman
          </p>
        ),
        shipping_details: (
          <div className="">
            <p className="text-lg">DHL Delivery</p>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">
                Expected Ship Date
              </p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}
              </p>
            </div>
            <div className="my-3">
              <p className="text-xs uppercase text-gray-400">Deliver by</p>
              <p className="">
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now())}{" "}
                to{" "}
                {new Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(Date.now() + 1000000000)}
              </p>
            </div>
          </div>
        ),
        details: (
          <div>
            <p
              onClick={() => setSelectedOrder({ name: "New Meaning" })}
              className="text-purple-600 text-sm cursor-pointer"
            >
              2 Shirts and an iPhone
            </p>
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
        date: (
          <p className="">
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            }).format(Date.now())}
          </p>
        ),
        actions: (
          <div className="min-w-max">
            <div className="justify-around">
              <Button rounded secondary>
                Edit
              </Button>
              <span className="inline-block p-2"></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className="inline-block p-px"></span>
            <div className="">
              <span className=""></span>
              <Button rounded danger>
                Cancel
              </Button>
            </div>
          </div>
        ),
      },
    ],
    [setSelectedOrder, setSelectedSender]
  );

  const columns = React.useMemo(
    () => [
      { Header: "Delivery Date", accessor: "date" },
      { Header: "Sender's Name", accessor: "sender" },
      { Header: "Order Details", accessor: "details" },
      { Header: "Shipping", accessor: "shipping_details" },
      { Header: "Actions", accessor: "actions" },
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
    <div className="overflow-x-scroll mt-8">
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
              <tr className="border-b last:border-b-0" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ minWidth: "280px" }}
                      className="align-top pr-4 min-w-max border-gray-100 py-4"
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

export default TableBody;
