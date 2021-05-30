import React from 'react';
import Highlight from './Highlight';
import RecentSalesTable from './RecentSales';
import { ArrowRight } from 'svg';
import { useTable } from 'react-table';
import { PieChart } from 'react-minimal-pie-chart';

const RecentSales = () => {
  const data = React.useMemo(
    () => [
      {
        status: (
          <div className='text-gray-900 flex items-center'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute w-4 bg-gray-100 mr-2 h-4 inline-block '></div>
              <div className='absolute top-1 left-1 w-2 bg-gray-800 h-2 inline-block '></div>
            </div>
            To be confirmed
          </div>
        ),
        quantity: <p className='text-right'>3</p>,
      },
      {
        status: (
          <div className='text-yellow-500 flex items-center'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute w-4 bg-yellow-100 mr-2 h-4 inline-block '></div>
              <div className='absolute top-1 left-1 w-2 bg-yellow-400 h-2 inline-block '></div>
            </div>
            Shipped
          </div>
        ),
        quantity: <p className='text-right'>12</p>,
      },
      {
        status: (
          <div className='text-purple-500 flex items-center'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute w-4 bg-purple-100 mr-2 h-4 inline-block '></div>
              <div className='absolute top-1 left-1 w-2 bg-purple-400 h-2 inline-block '></div>
            </div>
            Delivered
          </div>
        ),
        quantity: <p className='text-right'>30</p>,
      },
      {
        status: (
          <div className='text-red-500 flex items-center'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute w-4 bg-red-100 mr-2 h-4 inline-block '></div>
              <div className='absolute top-1 left-1 w-2 bg-red-400 h-2 inline-block '></div>
            </div>
            Returned
          </div>
        ),
        quantity: <p className='text-right'>2</p>,
      },
      {
        status: (
          <div className='text-green-500 flex items-center'>
            <div className='relative w-8 h-4 inline-block'>
              <div className='absolute w-4 bg-green-100 mr-2 h-4 inline-block '></div>
              <div className='absolute top-1 left-1 w-2 bg-green-400 h-2 inline-block '></div>
            </div>
            Completed
          </div>
        ),
        quantity: <p className='text-right'>200</p>,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: ' ', accessor: 'status' },
      { Header: ' ', accessor: 'quantity' },
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
    <div className='overflow-x-scroll'>
      <table {...getTableProps()} className='w-full text-sm'>
        <thead className='text-left border-b-2 border-gray-100'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className='pb-4 font-normal last:text-right'
                  {...column.getHeaderProps()}
                >
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
                      className='border-b-2 pr-4 min-w-max last:pr-0 border-gray-100 py-4'
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

const Main = () => {
  // const { admin, loading } = state;

  return (
    <div className='flex md:flex-wrap md:justify-center'>
      <div className='flex flex-col flex-1 w-6/12 md:w-full md:mt-8'>
        <div className='mt-5 p-10  md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
          <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
            Your Orders
          </h3>
          <div className='flex space-x-4'>
            <div className='flex flex-1 items-center'>
              <div className='w-60 relative'>
                <PieChart
                  data={[
                    { title: 'Three', value: 200, color: '#10b981' },
                    { title: 'One', value: 3, color: '#1f2937' },
                    { title: 'Two', value: 12, color: '#fbbf24' },
                    { title: 'Two', value: 30, color: '#a78bfa' },
                    { title: 'Two', value: 2, color: '#F87171' },
                  ]}
                  lineWidth={15}
                  paddingAngle={5}
                />
                <div
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  className='absolute w-36 flex flex-col px-6 bg-green-50 text-center items-center justify-center rounded-full h-36 border-2 border-green-100'
                >
                  <div className='text-green-600'>Amazing!!!</div>
                  <div className='text-gray-900'>You're doing well 🎉</div>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <RecentSales />
            </div>
          </div>
        </div>
        <div className='mt-8 mb-4 md:-mx-6 md:bg-white md:py-8 md:px-10'>
          <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
            Recent Sales
          </h3>
          <div className='mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
            <RecentSalesTable />
            <div className='flex justify-between mt-8 pb-8 w-full'>
              <span className='text-gray-500'>Showing 8 of 100</span>
              <div className='flex items-center text-purple-500'>
                See all &nbsp; <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex ml-2 flex-col w-3/12 tracking-wide md:w-6/12 sm:w-10/12'>
        <Highlight />
      </div>
    </div>
  );
};

export default Main;
