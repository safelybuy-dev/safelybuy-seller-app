import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { convertToNaira } from 'utilities/getCurrency';

function KeyValue({ title, value }) {
  return (
    <div className="flex my-3 flex-col">
      <small className="text-gray-400 uppercase text-xs">{title}</small>
      <h5 className="text-sm w-28">{value}</h5>
    </div>
  );
}

function TableBody({
  active,
  deleteItem,
  setSelectedProduct,
  items = [],
  setRestaurantMenuModal,
  setItem,
  setEdit,
}) {
  console.log(items);
  const handleDelete = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Delete Item',
        message: 'Are you sure you want to delete the item?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => deleteItem(id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [deleteItem]
  );

  const data = React.useMemo(
    () =>
      items
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter((item) => item.status === active || active === 'all')
        .map((item) => ({
          status: item.status,
          price: <span>{convertToNaira(item.price_per_portion)}</span>,
          available: (
            <div className="capitalize">{item.available_days.join(',\t')}</div>
          ),
          desc: (
            <div>
              <p className="text-purple-600 cursor-pointer text-sm">
                {item.name}
              </p>
              <div className="flex justify-between">
                <KeyValue
                  title="Menu Description"
                  value={<p className="truncate">{item.description}</p>}
                />
              </div>
            </div>
          ),
          image: (
            <div className="h-[4rem] w-[4rem] overflow-hidden  rounded-[4px] bg-gray-500">
              <img
                src={item.display_image}
                alt="event"
                className="object-cover cursor-pointer h-full w-full"
              />
            </div>
          ),
          actions: (
            <div className=" flex  items-center ">
              {item.status === 'Active' ? (
                <>
                  <span onClick={() => handleDelete(item.id)}>
                    <Button rounded danger>
                      Delete
                    </Button>
                  </span>
                  <div className="px-2" />
                  <span
                    onClick={() => {
                      setEdit(true);
                      setItem(item);
                      setRestaurantMenuModal(true);
                    }}>
                    <Button rounded primary>
                      Edit
                    </Button>
                  </span>
                </>
              ) : (
                <span className="text-gray-500 opacity-70">Deactivated</span>
              )}
            </div>
          ),
        })),
    [handleDelete, items, active, setEdit, setRestaurantMenuModal, setItem]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      { Header: 'Image', accessor: 'image' },
      {
        Header: 'Price Per Portion',
        accessor: 'price',
      },
      {
        Header: 'Description',
        accessor: 'desc',
      },
      { Header: 'Available Days', accessor: 'available' },
      { Header: 'Actions', accessor: 'actions' },
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
              <tr {...row.getRowProps()} className="border-b-2 border-gray-100">
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

export default TableBody;
