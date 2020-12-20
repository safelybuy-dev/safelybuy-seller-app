import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "./Main/Header";
import Highlight from "./Main/Highlight";
import TopStat from "./Main/TopStat";
import RecentSalesTable from "./Main/RecentSales";
import {
  Bag,
  BitcoinIcon,
  Tickets as TicketsSVG,
  DeliveryIcon,
  ArrowRight,
} from "../../svg";
import { MobileMenu } from "./Main/MobileMenu";
import { Route, Switch } from "react-router-dom";
import Messaging from "./Main/Messaging";
import Shopping from "../Shopping";
import Delivery from "../Delivery";
import Tickets from "../Tickets";
import Bitcoin from "../Bitcoin";
import GiftCard from "../GitCard";
import Customers from "../Customers";
import Sellers from "../Sellers";
import Mails from "../Mails";
import Users from "../Users";
import Contents from "../Contents";
import Referrals from "../Referrals";
import Discounts from "../Discounts";
import Payments from "../Payments";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative bg-purple-50 min-h-screen">
      <Header setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex py-56 px-16 pb-60 md:pb-96 md:flex-wrap md:justify-center md:py-24 md:px-6">
        <Switch>
          <Route exact path="/messages">
            <Messaging />
          </Route>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
          <Route exact path="/shopping/orders">
            <Shopping />
          </Route>
          <Route exact path="/shopping/inventory">
            <Shopping />
          </Route>
          <Route exact path="/delivery">
            <Delivery />
          </Route>
          <Route exact path="/delivery/orders">
            <Delivery />
          </Route>
          <Route exact path="/tickets">
            <Tickets />
          </Route>
          <Route exact path="/tickets/inventory">
            <Tickets />
          </Route>
          <Route exact path="/tickets/sales">
            <Tickets />
          </Route>
          <Route exact path="/bitcoin">
            <Bitcoin />
          </Route>
          <Route exact path="/bitcoin/history">
            <Bitcoin />
          </Route>
          <Route exact path="/giftcard">
            <GiftCard />
          </Route>
          <Route exact path="/giftcard/history">
            <GiftCard />
          </Route>
          <Route exact path="/giftcard/prices">
            <GiftCard />
          </Route>
          <Route exact path="/customers">
            <Customers />
          </Route>
          <Route exact path="/sellers">
            <Sellers />
          </Route>
          <Route exact path="/mails">
            <Mails />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/contents">
            <Contents />
          </Route>
          <Route exact path="/referrals">
            <Referrals />
          </Route>
          <Route exact path="/discounts">
            <Discounts />
          </Route>
          <Route exact path="/payments">
            <Payments />
          </Route>
          <Route path="/">
            <div className="flex flex-col tracking-wide md:w-6/12 sm:w-10/12">
              <Highlight />
            </div>
            <div className="flex flex-col flex-1 w-7/12 md:w-full md:mt-8">
              <div className="flex w-full justify-between md:justify-around md:flex-wrap">
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
                  svg={<TicketsSVG color="white" scale={0.5} />}
                  color="purple"
                />
                <TopStat
                  title="Trading"
                  value={3}
                  // last
                  caption="Items traded in the last 24 hours"
                  svg={<BitcoinIcon color="white" scale={0.5} />}
                  color="yellow"
                />
              </div>
              <div className="mt-8 mb-4 md:-mx-6 md:bg-white md:py-8 md:px-10 md:px-4">
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
          </Route>
        </Switch>
      </div>
      <Footer admin />
    </div>
  );
}
