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
      {/* Highlight */}
      <div className="flex py-20 px-16 pb-60">
        <div className="flex flex-col tracking-wider w-3/12">
          <Highlight />
        </div>

        <div className="flex flex-col w-full">
          {/* Top Stats */}
          <div className="flex w-full">
            <TopStat
              title="Shopping"
              value={509}
              caption="New orders in the last 24 hours"
              svg={<Bag />}
              color="lime"
            />
            <TopStat
              title="Delivery"
              value={25}
              caption="Delivery orders in the last 24 hours"
              svg={<DeliveryIcon />}
              color="green"
            />
            <TopStat
              title="Tickets"
              value={340}
              caption="Tickets sold in the last 24 hours"
              svg={<Tickets />}
              color="purple"
            />
            <TopStat
              title="Trading"
              value={3}
              caption="Items traded in the last 24 hours"
              svg={<BitcoinIcon />}
              color="yellow"
            />
          </div>
          {/* Recent Sales (Table) */}
          <div className="mt-12 mb-6">
            <h3 className="text-3xl tracking-wider">Recent Sales</h3>
            <div className="mt-5 py-10 px-12 rounded-3xl bg-white w-100">
              <RecentSalesTable />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
