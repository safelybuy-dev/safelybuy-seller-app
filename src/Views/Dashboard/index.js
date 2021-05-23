import React, { useState, Suspense, lazy } from 'react';
import Footer from 'components/Footer';
import Header from './Main/Header';
import { MobileMenu } from './Main/MobileMenu';
import { Route, Switch } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
const Main = lazy(() => import('./Main'));
const Messaging = lazy(() => import('./Main/Messaging'));
const Shopping = lazy(() => import('../Shopping'));
const ShoppingInventory = lazy(() => import('../Shopping/Inventory'));
const Orders = lazy(() => import('../Shopping/Orders'));
const Tickets = lazy(() => import('../Tickets'));
const TicketsInventory = lazy(() => import('../Tickets/Inventory'));
const Inventory = lazy(() => import('../Inventory'));
const TicketSales = lazy(() => import('../Tickets/Sales'));

export default function Dashboard() {
  const [value, setValue, remove] = useLocalStorage(
    'dashboard_view_preference',
    'Shopping'
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='relative bg-purple-50 min-h-screen'>
      <Header
        prefrence={value}
        setPrefrence={setValue}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <MobileMenu isMenuOpen={isMenuOpen} />
      <div className='flex py-56 px-16 pb-60 md:pb-96 md:flex-wrap md:justify-center md:py-24 md:px-6'>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/messages'>
              <Messaging />
            </Route>
            <Route exact path='/shopping'>
              <Shopping />
            </Route>
            <Route exact path='/shopping/orders'>
              <Orders />
            </Route>
            <Route exact path='/shopping/inventory'>
              <ShoppingInventory />
            </Route>
            <Route exact path={['/inventory', '/inventory/add']}>
              <Inventory value={value} />
            </Route>
            <Route exact path='/tickets/inventory'>
              <TicketsInventory />
            </Route>
            <Route exact path='/tickets'>
              <Tickets />
            </Route>
            <Route exact path='/tickets/sales'>
              <TicketSales />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>{' '}
        </Suspense>
      </div>
      <Footer admin />
    </div>
  );
}
