import React, { useState, Suspense, lazy } from "react";
import Footer from "components/Footer";
import Header from "./Main/Header";
import { MobileMenu } from "./Main/MobileMenu";
import { Route, Switch } from "react-router-dom";
import { useLocalStorage } from 'react-use';
const Main = lazy(() => import("./Main"));
const Messaging = lazy(() => import("./Main/Messaging"));
const Shopping = lazy(() => import("../Shopping"));
const ShoppingInventory = lazy(() => import("../Shopping/Inventory"));
const Orders = lazy(() => import("../Shopping/Orders"));
const Delivery = lazy(() => import("../Delivery"));
const DeliveryOrders = lazy(() => import("../Delivery/Orders"));
const Tickets = lazy(() => import("../Tickets"));
const TicketsInventory = lazy(() => import("../Tickets/Inventory"));
const Inventory = lazy(() => import("../Inventory"));
const TicketSales = lazy(() => import("../Tickets/Sales"));
const Bitcoin = lazy(() => import("../Bitcoin"));
const BitcoinHistory = lazy(() => import("../Bitcoin/History"));
const BitcoinPrices = lazy(() => import("../Bitcoin/Prices"));
const GiftCard = lazy(() => import("../GitCard"));
const GiftCardHistory = lazy(() => import("../GitCard/History"));
const GiftCardPrices = lazy(() => import("../GitCard/Prices"));
const Customers = lazy(() => import("../Customers"));
const Sellers = lazy(() => import("../Sellers"));
const Mails = lazy(() => import("../Mails"));
const Users = lazy(() => import("../Users"));
const Contents = lazy(() => import("../Contents"));
const Referrals = lazy(() => import("../Referrals"));
const Discounts = lazy(() => import("../Discounts"));
const Payments = lazy(() => import("../Payments"));



export default function Dashboard() {

  const [value, setValue, remove] = useLocalStorage('dashboard_view_preference', 'Shopping');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative bg-purple-50 min-h-screen">
      <Header 
      prefrence={value}
      setPrefrence={setValue}
      setIsMenuOpen={setIsMenuOpen} 
      isMenuOpen={isMenuOpen} 
      />
      <MobileMenu isMenuOpen={isMenuOpen} />
      <div className="flex py-56 px-16 pb-60 md:pb-96 md:flex-wrap md:justify-center md:py-24 md:px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/messages">
              <Messaging />
            </Route>
            <Route exact path="/shopping">
              <Shopping />
            </Route>
            <Route exact path="/shopping/orders">
              <Orders />
            </Route>
            <Route exact path="/shopping/inventory">
              <ShoppingInventory />
            </Route>

            <Route exact path={["/inventory", "/inventory/add"]}>
              <Inventory value={value}  />
            </Route>


            <Route exact path="/tickets/inventory">
              <TicketsInventory />
            </Route>

            <Route exact path="/delivery">
              <Delivery />
            </Route>
            <Route exact path="/delivery/orders">
              <DeliveryOrders />
            </Route>
            <Route exact path="/tickets">
              <Tickets />
            </Route>
        
            <Route exact path="/tickets/sales">
              <TicketSales />
            </Route>
            <Route exact path="/bitcoin">
              <Bitcoin />
            </Route>
            <Route exact path="/bitcoin/history">
              <BitcoinHistory />
            </Route>
            <Route exact path="/bitcoin/price">
              <BitcoinPrices />
            </Route>
            <Route exact path="/giftcard">
              <GiftCard />
            </Route>
            <Route exact path="/giftcard/history">
              <GiftCardHistory />
            </Route>
            <Route exact path="/giftcard/prices">
              <GiftCardPrices />
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
          </Switch>{" "}
        </Suspense>
      </div>
      <Footer admin />
    </div>
  );
}
