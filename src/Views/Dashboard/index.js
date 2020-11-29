import React from "react";
import Footer from "../../components/Footer";
import Header from "./Main/Header";
import Highlight from "./Main/Highlight";
import TopStat from "./Main/TopStat";
import RecentSalesTable from "./Main/RecentSales";
import { Bag, BitcoinIcon, Tickets, DeliveryIcon } from "../../svg";

export default function Main() {
  return (
    <div className="relative bg-purple-50 min-h-screen">
      <Header />
      <div className="flex py-12 px-16 pb-60 md:py-10">
        <div className="flex flex-col tracking-wide w-4/12">
          <Highlight />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-between">
            <TopStat
              title="Shopping"
              value={509}
              caption="New orders in the last 24 hours"
              svg={<Bag color="white" scale={0.5} />}
              color="lime"
            />
            <TopStat
              title="Delivery"
              value={25}
              caption="Delivery orders in the last 24 hours"
              svg={<DeliveryIcon color="white" scale={0.5} />}
              color="green"
            />
            <TopStat
              title="Tickets"
              value={340}
              caption="Tickets sold in the last 24 hours"
              svg={<Tickets color="white" scale={0.5} />}
              color="purple"
            />
            <TopStat
              title="Trading"
              value={3}
              last
              caption="Items traded in the last 24 hours"
              svg={<BitcoinIcon color="white" scale={0.5} />}
              color="yellow"
            />
          </div>
          <div className="mt-8 mb-4">
            <h3 className="text-2xl tracking-wider">Recent Sales</h3>
            <div className="mt-5 py-8 px-10 rounded-3xl bg-white w-100 overflow-x-scroll">
              <RecentSalesTable />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
