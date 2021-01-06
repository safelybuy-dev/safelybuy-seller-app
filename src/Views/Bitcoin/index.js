import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TopStat from "./TopStat";
import {
  Wallet,
  History,
  AreaChart,
  BitcoinAlt,
  ArrowUp,
  ArrowDown,
  ArrowRight,
} from "../../svg";
import RecentSalesTable from "./RecentSales";

const LiveStat = ({ dollar, percentage, time }) => (
  <div className="flex shadow-md hover:shadow-2xl my-6 py-4 px-6 rounded-md">
    <div className="w-5/12">
      <span className="">1 BTC</span>
      <span className="inline-block mx-2">=</span>
      <span className="">${dollar}</span>
    </div>
    <div className="w-4/12 text-center">
      {" "}
      <span
        className={`inline-flex text-${
          percentage > 0 ? "green" : "red"
        }-600 items-center`}
      >
        {percentage > 0 ? "+" : "-"}
        {Math.abs(percentage)}%<span className="inline-block ml-1"></span>
        {percentage > 0 ? (
          <ArrowUp
            scale={1.1}
            color="rgba(5, 150, 105, var(--tw-text-opacity))"
          />
        ) : (
          <ArrowDown
            scale={1.1}
            color="rgba(220, 38, 38, var(--tw-text-opacity))"
          />
        )}
      </span>
    </div>
    <div className="w-3/12 text-center">
      <span className="text-gray-400 text-xs">{time}</span>
    </div>
  </div>
);

const Tickets = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb parentText="Bitcoin" parentLink="/bitcoin" />
      <div className="flex w-full justify-between md:justify-around md:flex-wrap">
        <TopStat
          title="Bitcoin History"
          value={349}
          caption="Total times bitcoin has been traded in the last 3 months"
          svg={<History color="#8661ff" />}
          color="purple"
          link="/bitcoin/history"
          linkText="View History"
        />
        <TopStat
          title="Bitcoin Rates"
          value={"$1/436NGN"}
          caption="The buying and selling price of Bitcoin"
          svg={<AreaChart />}
          color="purple"
          link="/bitcoin/price"
          linkText="View"
        />
        <TopStat
          title="Sales"
          value={"₦230,690"}
          caption="Total sales made in last 24 hours"
          svg={<Wallet color="#8661ff" scale={1} />}
          color="purple"
        />
      </div>

      <div className="flex items-start pt-12 w-full md:flex-col md:items-center">
        <div className="tracking-wide w-5/12 md:w-full rounded-3xl p-10 bg-white">
          <div className="flex items-center">
            <span className="inline-block px-3 py-2 mr-2 bg-yellow-400 rounded-full">
              <BitcoinAlt />
            </span>
            <span className="text-xl">Bitcoin</span>
            <span className="text-xl ml-4 inline-block text-gray-400">
              Live Updates
            </span>
          </div>
          <div className="py-8">
            <LiveStat dollar="10,943.76" percentage={0.67} time="Now" />
            <LiveStat dollar="10,743.76" percentage={-0.48} time="1 min ago" />
            <LiveStat dollar="10,843.76" percentage={0.48} time="5 min ago" />
          </div>
        </div>
        <div className="ml-12 md:ml-0 md:mt-6 md:bg-white md:py-8 w-7/12 md:w-full md:px-4">
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

export default Tickets;
