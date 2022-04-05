import React from 'react';
// import Breadcrumb from 'components/Breadcrumb';
// import TopStat from './TopStat';
// import { Archive, Wallet, Invoice } from 'svg';
// import Highlight from '../Dashboard/Main/Highlight';
// import image6 from 'assets/images/image6.jpeg';
import { PieChart } from 'react-minimal-pie-chart';
import { useTable } from 'react-table';
import Highlight from 'Views/Dashboard/Main/Highlight';

// import RecentSales from './RecentSales';

// const KeyValue = ({ title, value }) => (
//   <div className='flex my-3 flex-col'>
//     <small className='text-gray-400 capitalize'>{title}</small>
//     <h5 className='text-lg'>{value}</h5>
//   </div>
// );

function RecentSales({ orders }) {
  const data = React.useMemo(
    () => [
      {
        status: (
          <div className="text-gray-900 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-gray-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-gray-800 h-2 inline-block " />
            </div>
            To be confirmed
          </div>
        ),
        quantity: <p className="text-right">{orders.processing}</p>,
      },
      {
        status: (
          <div className="text-yellow-500 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-yellow-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-yellow-400 h-2 inline-block " />
            </div>
            Shipped
          </div>
        ),
        quantity: <p className="text-right">{orders.shipped}</p>,
      },
      {
        status: (
          <div className="text-purple-500 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-purple-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-purple-400 h-2 inline-block " />
            </div>
            Delivered
          </div>
        ),
        quantity: <p className="text-right">{orders.delivered}</p>,
      },
      {
        status: (
          <div className="text-red-500 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-red-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-red-400 h-2 inline-block " />
            </div>
            Returned
          </div>
        ),
        quantity: <p className="text-right">{orders.returned}</p>,
      },
      {
        status: (
          <div className="text-green-500 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-green-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-green-400 h-2 inline-block " />
            </div>
            Completed
          </div>
        ),
        quantity: <p className="text-right">{orders.completed}</p>,
      },
    ],
    [
      orders.completed,
      orders.delivered,
      orders.processing,
      orders.returned,
      orders.shipped,
    ]
  );

  const columns = React.useMemo(
    () => [
      { Header: ' ', accessor: 'status' },
      { Header: ' ', accessor: 'quantity' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="">
      <table {...getTableProps()} className="w-full text-sm">
        <thead className="text-left border-b-2 border-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="pb-4 font-normal last:text-right"
                  {...column.getHeaderProps()}>
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
                      // style={{ minWidth: '120px' }}
                      className="border-b-2 pr-4 last:pr-0 border-gray-100 py-4"
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

function Tickets() {
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between ">
      <div className="flex-0.7">
        {/* test */}

        <div className="mt-5 p-10 md:py-5 md:px-5 md:mt-0 rounded-3xl bg-white">
          <h3 className="text-2xl md:pb-6 text-gray-800 md:bg-white md:mt-2 tracking-wider">
            Tickets Summary
          </h3>
          <div className="flex space-x-4 flex-col md:flex-row">
            <div className="flex flex-1 items-center">
              <div className="w-60 relative">
                <PieChart
                  data={[
                    {
                      title: 'Three',
                      value: 1,
                      color: '#10b981',
                    },
                    {
                      title: 'One',
                      value: 1,
                      color: '#1f2937',
                    },
                    {
                      title: 'Two',
                      value: 1,
                      color: '#fbbf24',
                    },
                    {
                      title: 'Four',
                      value: 1,
                      color: '#a78bfa',
                    },
                    {
                      title: 'Five',
                      value: 1,
                      color: '#F87171',
                    },
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
                  className="absolute w-36 flex flex-col px-6 bg-green-50 text-center items-center justify-center rounded-full h-36 border-2 border-green-100">
                  <div className="text-green-600">Keep Selling!!!</div>
                  <div className="text-gray-900 text-xs mt-1">
                    Nothing to show yet
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <RecentSales
                orders={{
                  completed: 0,
                  processing: 0,
                  returned: 0,
                  delivered: 0,
                  shipped: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 mb-4  md:bg-white md:py-8 md:px-10 rounded-3xl">
          <h3 className="text-2xl md:pb-6 text-gray-800  md:bg-white tracking-wider">
            Recent Sales
          </h3>
          <div className="mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0  bg-white">
            {/* <RecentSalesTable /> */}
            {/* <div className='flex justify-between mt-8 pb-8 w-full'>
              <span className='text-gray-500'>Showing 8 of 100</span>
              <div className='flex items-center text-purple-500'>
                See all &nbsp; <ArrowRight />
              </div>
            </div> */}
          </div>
        </div>

        {/* test */}
      </div>
      <div className="flex-0.3">
        <Highlight balance="40000" />
      </div>
    </div>
  );
}

export default Tickets;
// const Tickets = () => {
//   return (
//     <div className='flex flex-col w-full items-start'>
//       <Breadcrumb parentText='Tickets' parentLink='/tickets' />
//       <div className='flex w-full justify-between md:justify-around md:flex-wrap'>
//         <TopStat
//           title='Inventory'
//           value={5009}
//           caption='Total tickets in inventory'
//           svg={<Archive color='#8661ff' scale={1.5} />}
//           color='purple'
//           link='/tickets/inventory'
//           linkText='Manage'
//         />
//         <TopStat
//           title='Sold Tickets'
//           value={273}
//           caption='Total tickets sold in the last 24 hours'
//           svg={<Invoice color='#8661ff' scale={1.7} />}
//           color='purple'
//           link='/tickets/orders'
//           linkText='View'
//         />
//         <TopStat
//           title='Sales'
//           value={'₦230,690'}
//           caption='Total sales made in last 24 hours'
//           svg={<Wallet color='#8661ff' scale={1} />}
//           color='purple'
//         />
//       </div>

//       <div className='flex pt-12 w-full md:flex-col md:items-center'>
//         <div className='tracking-wide md:w-6/12 sm:w-10/12'>
//           <Highlight />
//         </div>
//         <div
//           className='mx-4 md:-mx-6 md:mt-6 md:bg-white md:py-8 md:px-4'
//           style={{ width: 'calc(100% + 3rem)' }}
//         >
//           <h3 className='text-2xl md:pb-6 md:bg-white tracking-wider'>
//             Most Sold Ticket
//           </h3>
//           <div className='mt-5 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white'>
//             <div className='relative'>
//               <img
//                 className='w-full h-96 object-cover rounded-3xl'
//                 src={image6}
//                 alt='...'
//               />
//               <div className='absolute bottom-0 p-16 pb-12 pt-24 md:p-6 md:pb-6 md:pt-6 text-overlay w-full text-white bg-gradient-to-t from-black rounded-3xl'>
//                 <h2 className='text-4xl md:text-2xl'>
//                   Rema’s Beamer live-in concert
//                 </h2>
//                 <small className='text-lg md:text-sm'>
//                   23 Dec 2020, The Muson Center Lagos
//                 </small>
//               </div>
//             </div>
//             <div className='p-16 pt-10 md:p-6 md:pt-4'>
//               <div className='flex justify-between flex-wrap md:flex-col'>
//                 <KeyValue title='Event Category' value='Concerts' />
//                 <KeyValue title='Listing Number' value='#2335412334' />
//                 <KeyValue
//                   title='Event Date / Time'
//                   value='12pm. 12 Sept, 2020'
//                 />
//                 <KeyValue
//                   title='Event Location'
//                   value='The Muson Centre, Lagos Island'
//                 />
//               </div>
//               <div className='pt-8 md:pt-4'>
//                 <KeyValue
//                   title='Event Details'
//                   value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tickets;
