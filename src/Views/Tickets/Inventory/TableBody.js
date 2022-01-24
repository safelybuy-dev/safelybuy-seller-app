import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-400 uppercase text-xs'>{title}</small>
    <h5 className='text-sm w-28'>{value}</h5>
  </div>
);

const TableBody = ({
  active,
  setActive,
  deleteItem,
  selloutItem,
  setSelectedProduct,
  setSelectedSeller,
  items=[],
}) => {

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
      .map((item) => ({
        status: item.status,
        sku: `#${item.listing_number}`,
        tickets_available: item.total_tickets,
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct(item)}
              className='text-purple-600 cursor-pointer text-sm'
            >
              {item.title}
            </p>
            <div className='flex justify-between'>
              <KeyValue
                title='Location'
                value={
                  <p>
                    {item.location}
                  </p>
                }
              />
              <KeyValue
                title='Seat Categories'
                value='VIP, Regular, VVIP, Table for 6, Table for 2'
              />
            </div>
          </div>
        ),
        category: item.category === 1 ? "Concerts" : "Tickets",
        seller: (
          <p
            onClick={() => setSelectedSeller(item)}
            className='text-purple-500 cursor-pointer'
          >
            Kareem Chibuzor
          </p>
        ),
        date: (
          <div>
            <p className=''>
              {new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                hour12: true,
                minute: 'numeric',
              }).format(Date.now())}
            </p>
          </div>
        ),
        actions: (
          <div className=' '>
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
                <div className='justify-around'>
                  <span onClick={() => handleSellout(item.id)}>
                    <Button rounded alternate>
                      Sold Out
                    </Button>
                  </span>
                  <span className='inline-block p-2'></span>
                  <span onClick={() => handleDelete(item.id)}>
                    <Button rounded danger>
                      Delete
                    </Button>
                  </span>
                </div>
              </>
            ) : (
              <p className='text-gray-300'>Item denied</p>
            )}
          </div>
        ),
      }))
      ,
    [setSelectedSeller, setSelectedProduct, handleDelete, handleSellout, items]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Status', accessor: 'status' },
      {
        Header: 'Listing Number',
        accessor: 'sku',
      },
      { Header: 'Seller', accessor: 'seller' },
      {
        Header: 'Event Date',
        accessor: 'date',
      },
      { Header: 'Event Category', accessor: 'category' },
      {
        Header: 'Event Details',
        accessor: 'desc',
      },
      { Header: 'Available Tickets', accessor: 'tickets_available' },
      { Header: 'Actions', accessor: 'actions' },
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
    <div className='overflow-x-scroll md:overflow-x-hidden mt-8'>
      <table {...getTableProps()} className='w-full text-sm'>
        <thead className='text-left border-b-2 border-gray-100'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className='pb-4 font-normal' {...column.getHeaderProps()}>
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
                      className='border-b-2 pr-4   border-gray-100 py-4'
                      {...cell.getCellProps()}
                    >
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
};

export default TableBody;
