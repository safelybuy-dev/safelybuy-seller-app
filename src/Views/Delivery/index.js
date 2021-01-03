import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TopStat from "./TopStat";
import { Archive, Wallet, DeliveryIcon, ArrowRight } from "../../svg";
import Highlight from "./Highlight";
import RecentSalesTable from "./RecentSales";

const index = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb parentText="Delivery" parentLink="/delivery" />
      <div className="flex w-full justify-between md:justify-around md:flex-wrap">
        <TopStat
          title="Total items delivered"
          value={349}
          caption="Total items delivered in the last 24 hours"
          svg={<Archive color="#8661ff" scale={1.5} />}
          color="purple"
          link="/delivery/orders"
          linkText="View"
        />
        <TopStat
          title="Deliveries in progress"
          value={23}
          caption="Total deliveries made in the last 3 months"
          svg={<DeliveryIcon color="#8661ff" scale={0.5} />}
          color="purple"
          link="/delivery/orders"
          linkText="View"
        />
        <TopStat
          title="Sales"
          value={"₦530,690"}
          caption="Total sales made in last 24 hours"
          svg={<Wallet color="#8661ff" scale={1} />}
          color="purple"
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
  );
};

export default index;
