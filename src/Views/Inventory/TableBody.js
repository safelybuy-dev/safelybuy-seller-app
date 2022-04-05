import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function TableBody({
  active,
  setActive,
  items = [],
  setSelectedProduct,
  deleteItem,
  selloutItem,
}) {
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

  const handleSellout = React.useCallback(
    (id) => {
      confirmAlert({
        title: 'Sellout Item',
        message: 'Are you sure you want to mark this item as sold out??',
        buttons: [
          {
            label: 'Yes',
            onClick: () => selloutItem(id),
          },
          {
            label: 'No',
            onClick: () => {},
          },
        ],
      });
    },
    [selloutItem]
  );

  const data = React.useMemo(
    () =>
      items
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter((item) => item.status === active || active === 'all')
        .map((item) => ({
          id: item.id,
          status: <div className="  capitalize">{item.status}</div>,
          image: (
            <div className=" ">
              <img
                className="w-12 h-12 object-cover rounded-lg"
                src={item.main_image}
                alt={item.title}
              />
            </div>
          ),
          sku: (
            <div className=" ">
              <div>{item.seller_sku}</div>
              <div className="text-sm text-gray-400">{item.item_condition}</div>
            </div>
          ),
          desc: (
            <div className=" ">
              <p
                // onClick={() => setSelectedProduct(item)}
                className="text-purple-600 cursor-pointer text-sm">
                {item.title}
              </p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ),
          location: (
            <div className=" ">{`${item.shipping_city}, ${item.shipping_state}`}</div>
          ),
          date: (
            <div className=" ">
              <p className="">
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  hour12: true,
                  minute: 'numeric',
                }).format(Date.parse(item.created_at))}
              </p>
              <p className="text-sm text-gray-400">
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  hour12: true,
                  minute: 'numeric',
                }).format(Date.parse(item.updated_at))}
              </p>
            </div>
          ),
          available: (
            <div className="inline-block py-1 w-8 text-center mx-1 border rounded-md">
              {item.available}
            </div>
          ),
          actions: (
            <div className=" ">
              {item.approval_status === 'pending' ? (
                <span onClick={() => handleDelete(item.id)}>
                  <Button rounded danger>
                    Delete
                  </Button>
                </span>
              ) : item.approval_status === 'approved' ? (
                <>
                  {/* <div className='justify-around'>
                  <Button rounded secondary>
                    Edit
                  </Button>
                  <span className='inline-block p-2'></span>
                  <Button rounded primary>
                    Print Details
                  </Button>
                </div> */}
                  {/* <span className='inline-block p-px'></span> */}
                  <div className="justify-around">
                    <span onClick={() => handleSellout(item.id)}>
                      <Button rounded alternate>
                        Sold Out
                      </Button>
                    </span>
                    <span className="inline-block p-2" />
                    <span onClick={() => handleDelete(item.id)}>
                      <Button rounded danger>
                        Delete
                      </Button>
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-gray-300">Item denied</p>
              )}
            </div>
          ),
        })),
    [active, items, handleDelete, handleSellout]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      { Header: 'Image', accessor: 'image' },
      {
        Header: (
          <div className="flex flex-col">
            <div>SKU</div>
            <div className="text-sm text-gray-400">Condition</div>
          </div>
        ),
        accessor: 'sku',
      },
      {
        Header: (
          <div className="flex flex-col">
            <div>Product Name</div>
            <div className="text-sm text-gray-400">Description</div>
          </div>
        ),
        accessor: 'desc',
      },
      { Header: 'Product Location', accessor: 'location' },
      {
        Header: (
          <div className="flex flex-col">
            <div>Date created</div>
            <div className="text-sm text-gray-400">Last updated</div>
          </div>
        ),
        accessor: 'date',
      },
      { Header: 'Available', accessor: 'available' },
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
    <div className="overflow-x-scroll mt-8">
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
                      style={{ minWidth: '50px', maxWidth: '250px' }}
                      className="border-b-2 pr-4 border-gray-100 py-4"
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
