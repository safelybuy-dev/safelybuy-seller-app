import React from "react";
import { useTable } from "react-table";
import Button from "components/Button";
// import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import MoreButton from "components/MoreButton";
import moment from "moment";

const TableBody = ({
  active,
  deleteItem,
  setSelectedProduct,
  items = [],
  setRestaurantMenuModal,
  setItem,
  setEdit,
}) => {
  // const handleDelete = React.useCallback(
  //   (id) => {
  //     confirmAlert({
  //       title: "Delete Item",
  //       message: "Are you sure you want to delete the item?",
  //       buttons: [
  //         {
  //           label: "Yes",
  //           onClick: () => deleteItem(id),
  //         },
  //         {
  //           label: "No",
  //           onClick: () => {},
  //         },
  //       ],
  //     });
  //   },
  //   [deleteItem]
  // );

  const data = React.useMemo(
    () =>
      items
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter((item) => item.status === active || active === "all")
        .map((item) => ({
          status: <span className="capitalize">{item.status}</span>,
          image: (
            <img
              src={item.main_image}
              alt={item.name}
              className="h-[40px] w-[40px] rounded-[4px] object-cover cursor-pointer"
            />
          ),
          sku: item.sku,
          title: (
            <div>
              <p className="text-purple-600 cursor-pointer text-sm">
                {item.name}
              </p>
              <p className="text-gray-400 capitalize w-36 truncate">
                {item.description}
              </p>
            </div>
          ),
          location: (
            <p>
              {item.city}, {item.state.name}
            </p>
          ),
          date: (
            <div>
              <p className="flex justify-between items-center">
                <span>{item.created_at.split("T")[0]}</span>
                <span className="w-1 h-1 rounded-[50%] bg-[#000]"></span>
                <span>
                  {moment(item.created_at.split("T")[1], "LT").format("HH:mma")}
                </span>
              </p>
              <p className="flex justify-between items-center text-gray-400 mt-1 text-sm">
                <span>{item.updated_at.split("T")[0]}</span>
                <span className="w-1 h-1 rounded-[50%] bg-gray-400"></span>
                <span>
                  {moment(item.updated_at.split("T")[1], "LT").format("HH:mma")}
                </span>
              </p>
            </div>
          ),
          available: (
            <div className="flex justify-center items-center">
              {" "}
              <span className="w-[40px] h-[30px] border-2 border-[#E0E0E0] rounded-[8px] flex justify-center items-center">
                4
              </span>{" "}
            </div>
          ),
          actions: (
            <div className=" flex items-center">
              <span
                onClick={() => {
                  setItem(item);
                  setEdit(true);
                  setRestaurantMenuModal(true);
                }}
              >
                <Button rounded secondary>
                  Edit
                </Button>
              </span>
              <div className="px-2"></div>
              <div>
                <MoreButton
                  links={[
                    {
                      text: "Print details",
                      clickHandler: () => {},
                    },
                    {
                      text: "Sold Out",
                      clickHandler: () => {},
                    },
                    {
                      text: "Delete",
                      clickHandler: () => {},
                    },
                  ]}
                />
              </div>
            </div>
          ),
        })),
    [items, active, setEdit, setItem, setRestaurantMenuModal]
  );

  const columns = React.useMemo(
    () => [
      { Header: "Status", accessor: "status" },
      { Header: "Image", accessor: "image" },
      { Header: "SKU", accessor: "sku" },
      {
        Header: (
          <div>
            <h4>Food Title</h4>
            <p className="text-gray-400 text-sm">Description</p>
          </div>
        ),
        accessor: "title",
      },
      {
        Header: "Food Location",
        accessor: "location",
      },
      {
        Header: (
          <div>
            <h4>Date Created</h4>
            <p className="text-gray-400 text-sm">Status Changed Date</p>
          </div>
        ),
        accessor: "date",
      },
      {
        Header: <p className="text-center">Available</p>,
        accessor: "available",
      },
      { Header: "Actions", accessor: "actions" },
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
    <div className=" mt-8">
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
                      className="border-b-2 pr-4   border-gray-100 py-4"
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
