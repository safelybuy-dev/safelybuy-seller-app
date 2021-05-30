import React from 'react';
import { useTable } from 'react-table';
import Button from 'components/Button';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-400 uppercase text-xs'>{title}</small>
    <h5 className='text-sm w-28'>{value}</h5>
  </div>
);

const TableBody = ({
  active,
  setActive,
  setSelectedProduct,
  setSelectedSeller,
}) => {
  const data = React.useMemo(
    () => [
      {
        status: 'Active',
        sku: '#2123434343',
        tickets_available: '1,000',
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              Joeboy’s Bad Baby Live-in Concert
            </p>
            <div className='flex justify-between'>
              <KeyValue
                title='Location'
                value={
                  <p>
                    The Muson Center,
                    <br /> Lekki Phase 1
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
        category: 'Concert',
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: 'New Meaning' })}
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
          <div>
            <Button roundedFull primary>
              Approve
            </Button>
            <span className='inline-block p-1'></span>
            <Button roundedFull danger>
              Deny
            </Button>
          </div>
        ),
      },
      {
        status: 'Active',
        sku: '#2123434343',
        tickets_available: '1,000',
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              The Adekunle’s Family Reunion
            </p>
            <div className='flex justify-between'>
              <KeyValue
                title='Location'
                value={
                  <p>
                    The Muson Center,
                    <br /> Lekki Phase 1
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
        category: 'Parties',
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: 'New Meaning' })}
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
          <div className='min-w-max'>
            <div className='justify-around'>
              <Button rounded secondary>
                Edit
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className='inline-block p-px'></span>
            <div className='justify-around'>
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </div>
        ),
      },
      {
        status: 'Active',
        sku: '#2123434343',
        tickets_available: '1,000',
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              The KKB Friends and Family Show
            </p>
            <div className='flex justify-between'>
              <KeyValue
                title='Location'
                value={
                  <p>
                    The Muson Center,
                    <br /> Lekki Phase 1
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
        category: 'Talk Show',
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: 'New Meaning' })}
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
          <>
            <div className='justify-around'>
              <Button rounded secondary>
                Edit
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className='inline-block p-px'></span>
            <div className='justify-around'>
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
      {
        status: 'Active',
        sku: '#2123434343',
        tickets_available: '1,000',
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              Joeboy’s Bad Baby Live-in Concert
            </p>
            <div className='flex justify-between'>
              <KeyValue
                title='Location'
                value={
                  <p>
                    The Muson Center,
                    <br /> Lekki Phase 1
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
        category: 'Concert',
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: 'New Meaning' })}
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
          <>
            <div className='justify-around'>
              <Button rounded secondary>
                Edit
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className='inline-block p-px'></span>
            <div className='justify-around'>
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
      {
        status: 'Active',
        sku: '#2123434343',
        tickets_available: '1,000',
        desc: (
          <div>
            <p
              onClick={() => setSelectedProduct({ name: 'New Meaning' })}
              className='text-purple-600 cursor-pointer text-sm'
            >
              Joeboy’s Bad Baby Live-in Concert
            </p>
            <div className='flex justify-between'>
              <KeyValue
                title='Location'
                value={
                  <p>
                    The Muson Center,
                    <br /> Lekki Phase 1
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
        category: 'Concert',
        seller: (
          <p
            onClick={() => setSelectedSeller({ name: 'New Meaning' })}
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
          <>
            <div className='justify-around'>
              <Button rounded secondary>
                Edit
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded primary>
                Print Details
              </Button>
            </div>
            <span className='inline-block p-px'></span>
            <div className='justify-around'>
              <Button rounded alternate>
                Sold Out
              </Button>
              <span className='inline-block p-2'></span>
              <Button rounded danger>
                Delete
              </Button>
            </div>
          </>
        ),
      },
    ],
    [setSelectedSeller, setSelectedProduct]
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
    <div className='overflow-x-scroll mt-8'>
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
                      className='border-b-2 pr-4 min-w-max border-gray-100 py-4'
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
