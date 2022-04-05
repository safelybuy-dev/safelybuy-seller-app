import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment';
import MoreButton from 'components/MoreButton';
import { useHistory } from 'react-router-dom';

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
  setSelectedRestaurant,
  items = [],
  setRestaurantModal,
  setEdit,
  setCurrentRestaurant,
}) {
  const history = useHistory();
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
          name: item.name,
          opening: moment(item.opening_time, 'LT').format('HH:mm a'),
          closing: moment(item.closing_time, 'LT').format('HH:mm a'),
          desc: (
            <div>
              <p
                onClick={() =>
                  item.status === 'active' && setSelectedRestaurant(item)
                }
                className="text-purple-600 cursor-pointer text-sm">
                {item.name}
              </p>
              <div className="flex justify-between">
                <KeyValue title="Address" value={<p>{item.address}</p>} />
              </div>
            </div>
          ),
          image: (
            <img
              src={item.display_image}
              alt="event"
              className="h-20 w-20 rounded-sm object-contain"
            />
          ),
          actions: (
            <div className=" flex">
              {item.status === 'active' ? (
                <MoreButton
                  links={[
                    {
                      text: 'View Menu',
                      clickHandler: () =>
                        history.push(`/food/restaurant/${item.id}`),
                    },
                    {
                      text: 'View Orders',
                      clickHandler: () => history.push(`/food/orders`),
                    },
                    {
                      text: 'Delete',
                      clickHandler: () => handleDelete(item.id),
                    },
                  ]}
                />
              ) : (
                <span className="text-gray-500 opacity-70">Deactivated</span>
              )}
              <span className="inline-block p-2" />
              {item.status === 'active' && (
                <span
                  onClick={() => {
                    setCurrentRestaurant(item);
                    setEdit(true);
                    setRestaurantModal(true);
                  }}>
                  <Button rounded primary>
                    Edit
                  </Button>
                </span>
              )}
            </div>
          ),
        })),
    [
      setSelectedRestaurant,
      handleDelete,
      items,
      active,
      setCurrentRestaurant,
      setEdit,
      setRestaurantModal,
      history,
    ]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      { Header: 'Image', accessor: 'image' },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Opening Time',
        accessor: 'opening',
      },
      { Header: 'Closing Time', accessor: 'closing' },
      {
        Header: 'Event Details',
        accessor: 'desc',
      },
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
