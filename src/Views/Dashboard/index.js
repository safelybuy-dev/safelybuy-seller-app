import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "./Main/Header";
import { MobileMenu } from "./Main/MobileMenu";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Messaging from "./Main/Messaging";
import Shopping from "../Shopping";
import Inventory from "../Shopping/Inventory";
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

export default function Dashboard() {
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
            <Inventory />
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
            <Main />
          </Route>
        </Switch>
      </div>
      <Footer admin />
    </div>
  );
}
