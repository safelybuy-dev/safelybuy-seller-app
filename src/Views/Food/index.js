import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useTable } from 'react-table';
import Highlight from 'Views/Dashboard/Main/Highlight';
import { SearchIcon } from 'svg';
import SortMealModal from 'components/Modals/sortMealModal';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import { useComponentVisible } from 'hooks';
import ItemsPerPage from './Inventory/ItemsPerPage';
import RecentPurchases from './RecentSales';
import RecentDetails from './RecentDetails';

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
            Total Orders
          </div>
        ),
        quantity: <p className="text-right">{orders.total_orders_count}</p>,
      },
      {
        status: (
          <div className="text-yellow-500 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-yellow-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-yellow-400 h-2 inline-block " />
            </div>
            Meal Plan Orders
          </div>
        ),
        quantity: <p className="text-right">{orders.meal_plan_orders_count}</p>,
      },

      {
        status: (
          <div className="text-green-500 flex items-center">
            <div className="relative w-8 h-4 inline-block">
              <div className="absolute w-4 bg-green-100 mr-2 h-4 inline-block " />
              <div className="absolute top-1 left-1 w-2 bg-green-400 h-2 inline-block " />
            </div>
            Restaurant Orders
          </div>
        ),
        quantity: (
          <p className="text-right">{orders.restaurant_orders_count}</p>
        ),
      },
    ],
    [
      orders.total_orders_count,
      orders.restaurant_orders_count,
      orders.meal_plan_orders_count,
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

function Food() {
  const [triggerSort, setTriggerSort] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [dashboardDetails, setDashboardDetails] = useState({
    loading: false,
    details: {},
  });

  console.log(dashboardDetails);

  const [recentType, setRecentType] = useState('restaurant');

  const {
    ref: salesRef,
    isComponentVisible: salesVisible,
    setIsComponentVisible: setIsSalesVisible,
  } = useComponentVisible(false);
  const {
    ref: daysRef,
    isComponentVisible: daysVisible,
    setIsComponentVisible: setIsDaysVisible,
  } = useComponentVisible(false);

  useEffect(() => {
    const fetchDashboardDetails = async () => {
      try {
        setDashboardDetails((state) => ({ ...state, loading: true }));
        const response = await axiosWithAuth().get(
          `${baseUrl}/api/v1/seller/food/dashboard-details`
        );
        setDashboardDetails((state) => ({
          ...state,
          details: response?.data?.data,
          loading: false,
        }));
      } catch (error) {
        console.error(error.response || error.message);
      }
    };
    fetchDashboardDetails();
  }, []);

  return (
    <div>
      {/* Total Orders And Transactions */}
      <div className="mt-12 flex flex-col md:flex-row justify-between ">
        <div className="flex-0.7">
          <div className="mt-5 md:p-10 py-5 px-5 md:mt-0 rounded-3xl bg-white md:h-[400px]">
            <h3 className="text-2xl md:pb-6 text-gray-800 md:bg-white md:mt-2 tracking-wider">
              Your Orders
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
                    meal_plan_orders_count:
                      dashboardDetails.details?.meal_plan_orders_count || 0,
                    restaurant_orders_count:
                      dashboardDetails.details?.restuarant_orders_count || 0,
                    total_orders_count:
                      dashboardDetails.details?.meal_plan_orders_count +
                        dashboardDetails.details?.restuarant_orders_count || 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-0.3">
          <Highlight
            balance={
              dashboardDetails.loading
                ? '0'
                : dashboardDetails.details?.wallet?.balance
            }
          />
        </div>
      </div>
      <div className="mt-8 mb-4  md:bg-white md:py-8 md:px-10 rounded-3xl ">
        <div className="flex justify-between items-center mb-10">
          <ItemsPerPage
            selectRef={salesRef}
            isVisible={salesVisible}
            recentType={recentType}
            setRecentType={setRecentType}
            setIsVisible={setIsSalesVisible}
            options={['Restaurant Sales', 'Meal Plan Sales']}
            salesToggle
            customWidth
          />
          <div className="flex justify-between items-center rounded-full border-2 border-[#F1F0FF] py-2 px-4 md:w-[400px]">
            <SearchIcon color="#8661FF" />
            <input
              type="text"
              placeholder="Search by SKU, Food title..."
              className="flex-1 mx-3 placeholder:text-sm text-sm outline-none border-none"
            />
            <button
              className="text-xs  md:w-16 text-[#8661FF] bg-[#8661ff26] rounded-full py-1 px-2"
              onClick={() => setTriggerSort(true)}
              disabled={recentType === 'restaurant'}>
              Sort
            </button>
          </div>
          <div>
            <ItemsPerPage
              selectRef={daysRef}
              isVisible={daysVisible}
              setIsVisible={setIsDaysVisible}
              options={['Last 5 Days', 'Last 10 Days', 'Last 15 Days']}
              customWidth
            />
          </div>
        </div>
        {dashboardDetails.loading ? (
          <div className="mt-20 mb-20 flex justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-purple-500 animate-pulse">
              Loading items...
            </span>
          </div>
        ) : (
          <RecentPurchases
            items={
              recentType === 'restaurant'
                ? dashboardDetails.details?.restuarant_recent_sales || []
                : dashboardDetails.details?.meal_plan_recent_sales || []
            }
            setSelectedItem={setSelectedItem}
            recentType={recentType}
          />
        )}
      </div>
      {triggerSort && (
        <SortMealModal
          setTriggerSort={setTriggerSort}
          items={
            recentType === 'restaurant'
              ? dashboardDetails.details?.restuarant_recent_sales || []
              : dashboardDetails.details?.meal_plan_recent_sales || []
          }
          setDashboardDetails={setDashboardDetails}
        />
      )}
      {selectedItem && (
        <RecentDetails
          selectedProduct={selectedItem}
          setSelectedProduct={setSelectedItem}
        />
      )}
    </div>
  );
}

export default Food;
