import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
// import { confirmAlert } from "react-confirm-alert"; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import MoreButton from 'components/MoreButton';
import moment from 'moment';

function TableBody({
  active,
  deleteItem,
  setSelectedProduct,
  items = [],
  setRestaurantMenuModal,
  setItem,
  setEdit,
}) {
  const data = React.useMemo(
    () =>
      items
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter((item) => item.status === active || active === 'all')
        .map((item, index) => ({
          sn: <span>{index + 1}</span>,
          status: <span className="capitalize">{item.status}</span>,
          image: (
            <div className="h-[2.5rem] w-[2.5rem]  rounded-[4px]">
              <img
                src={item.main_image}
                alt={item.name}
                className=" object-cover cursor-pointer h-full w-full"
              />
            </div>
          ),
          sku: item.sku,
          title: (
            <div className="md:w-50">
              <p
                className="text-purple-600 cursor-pointer text-sm"
                onClick={() => setSelectedProduct(item)}>
                {item.name}
              </p>
              <p className="text-gray-400 text-xs md:text-sm capitalize">
                {item.drinks_and_xtras?.length > 0 &&
                  item.drinks_and_xtras?.map((extra) => extra.name).join(', ')}
              </p>
            </div>
          ),
          location: <p>{item.cities?.map((city) => city.name).join(', ')}</p>,
          date: (
            <div>
              <p className="flex justify-between items-center">
                <span>{item.created_at.split('T')[0]}</span>
                <span className="w-1 h-1 rounded-[50%] bg-[#000]" />
                <span>
                  {moment(item.created_at.split('T')[1], 'LT').format('HH:mma')}
                </span>
              </p>
              <p className="flex justify-between items-center text-gray-400 mt-1 text-sm">
                <span>{item.updated_at.split('T')[0]}</span>
                <span className="w-1 h-1 rounded-[50%] bg-gray-400" />
                <span>
                  {moment(item.updated_at.split('T')[1], 'LT').format('HH:mma')}
                </span>
              </p>
            </div>
          ),
          actions: (
            <div className=" flex items-center">
              <span
                onClick={() => {
                  setItem(item);
                  setEdit(true);
                  setRestaurantMenuModal(true);
                }}>
                <Button rounded secondary>
                  Edit
                </Button>
              </span>
              <div className="px-2" />
              <div>
                <MoreButton
                  links={[
                    {
                      text: 'Print details',
                      clickHandler: () => {},
                    },
                    {
                      text: 'Sold Out',
                      clickHandler: () => {},
                    },
                    {
                      text: 'Delete',
                      clickHandler: () => {},
                    },
                  ]}
                />
              </div>
            </div>
          ),
        })),
    [
      items,
      active,
      setEdit,
      setItem,
      setRestaurantMenuModal,
      setSelectedProduct,
    ]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'SN', accessor: 'sn' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Image', accessor: 'image' },
      { Header: 'SKU', accessor: 'sku' },
      {
        Header: (
          <div>
            <h4>Food Title</h4>
            <p className="text-gray-400 text-sm">Description</p>
          </div>
        ),
        accessor: 'title',
      },
      {
        Header: 'Food Location',
        accessor: 'location',
      },
      {
        Header: (
          <div>
            <h4>Date Created</h4>
            <p className="text-gray-400 text-sm">Status Changed Date</p>
          </div>
        ),
        accessor: 'date',
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
    <div className="mt-8 overflow-scroll lg:overflow-hidden w-full">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100 w-full">
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
