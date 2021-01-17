import React, { useEffect, useReducer } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TopStat from "./TopStat";
import { Archive, Wallet, Invoice, ArrowRight } from "../../svg";
import Highlight from "../Dashboard/Main/Highlight";
import RecentSalesTable from "./RecentSales";
import { ContextShopping } from "../../context";
import { shopping } from "../../reducers/initialState";
import shoppingReducer from "../../reducers/shopping";
import {
  fetchShoppingDashboard,
  fetchShoppingOrders,
} from "../../actions/shopping";

const Shopping = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shopping);

  localStorage.safely_buy_token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGMyZmI0MGY3Yjk4MDQ0OTZhYTQzZDE5YjFkNTkyNjUwMTEyYmQyYjEyNDQ2YTVjZDViZjYyYmFkZTZiMzc2MzNmNmQ2ZjI3OWE3MGE1MmYiLCJpYXQiOjE2MTA2NDMwMDEsIm5iZiI6MTYxMDY0MzAwMSwiZXhwIjoxNjQyMTc5MDAxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ikd3JIAbnrz7BudiEygaNZDSgXJcvOpaywpF_nvSXSqAnhTYRjrvwgq-65KJOJyQmwIU8cTiUbyQ1VxymL2H1TSf5rKgx7nQqBZJ1lPpn-_Motctw9hQGmfgMJdhVWj4WJmiyTRrroDXupaMjpxycLw7VCD_gPuuTeJU7zbKCM5dbErMd5k3fqZ6I583cPq-waLKQWwNlXTh_EEDBiOfyT-VU741thkMTfx-OHyKLLozXpi_KOuJlV0BxkAZQayo1nar3oHqMaoNums-FFNXZGthDqtTVoIjrFNAS5OtRUu48fi72IK8fFSxbfBdbkuuXCXYxFPWJfyAW4XLN3XA601yDVJMJasydF7MbZouLZqIl72U4zINo5gOzZean1haQPUz20kL-692nHzGpjTWN0w94rItUJ-hAmRN755lxrpbTsIGfxkPkb6wug2jC72qgSux947Udq0_y4gxxybqBcFNfmSw0s7dmtj3RU3pd_EwuZAlocNrAbKSnLCEens7FZgPmj2cdNJMIWK3SpdcSqGO1Gyu9w-kAv7SUSLtZC0oNpd5zFOtHathAHO-J7p9G9CaxoG4HqD3Elzdii3SCWUvFcYmEG9FJX3Lrk0iz_icvP9NYX5tBuAUXjSUFsmoVeinfBW6Xnsgw6ZUaWWjkUwHdAlpdE04nLvOYjwTfhI`;

  const {
    dashboard,
    isLoadingDashboard,
    dashboardError,
    orders,
    isLoadingOrders,
    ordersError,
  } = state;

  useEffect(() => {
    fetchShoppingOrders(dispatch);
    fetchShoppingDashboard(dispatch);
  }, [dispatch]);

  console.log(
    orders,
    dashboard,
    isLoadingDashboard,
    dashboardError,
    isLoadingOrders,
    ordersError
  );

  return (
    <ContextShopping.Provider value={[state, dispatch]}>
      <div className="flex flex-col w-full items-start">
        <Breadcrumb parentText="Shopping" parentLink="/shopping" />
        <div className="flex w-full justify-between md:justify-around md:flex-wrap">
          <TopStat
            title="Inventory"
            value={dashboard.inventory}
            caption="Total items in inventory"
            svg={<Archive color="#8661ff" scale={1.5} />}
            color="purple"
            link="/shopping/inventory"
            linkText="Manage"
            loading={isLoadingDashboard}
          />
          <TopStat
            title="Orders"
            value={dashboard.orders}
            caption="Total items sold in orders"
            svg={<Invoice color="#8661ff" scale={1.7} />}
            color="purple"
            link="/shopping/orders"
            linkText="View"
            loading={isLoadingDashboard}
          />
          <TopStat
            title="Sales"
            value={dashboard.sales}
            caption="Total sales made in last 24 hours"
            svg={<Wallet color="#8661ff" scale={1} />}
            color="purple"
            loading={isLoadingDashboard}
          />
        </div>

        <div className="flex pt-12 w-full md:flex-col md:items-center">
          <div className="tracking-wide md:w-6/12 sm:w-10/12">
            <Highlight />
          </div>
          <div
            className="mx-4 md:-mx-6 md:mt-6 md:bg-white md:py-8 md:px-4"
            style={{ width: "calc(100% + 3rem)" }}
          >
            <h3 className="text-2xl md:pb-6 md:bg-white tracking-wider">
              Recent Sales
            </h3>
            <div className="mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white">
              <RecentSalesTable />
              <div className="flex justify-between mt-8 pb-8 w-full">
                <span className="text-gray-500">Showing 8 of 100</span>
                <div className="flex items-center text-purple-500">
                  See all &nbsp; <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContextShopping.Provider>
  );
};

export default Shopping;
