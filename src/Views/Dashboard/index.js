import React, { useReducer, useState, Suspense, lazy, useEffect } from 'react';
import Footer from 'components/Footer';
import Header from './Main/Header';
import { MobileMenu } from './Main/MobileMenu';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import Auth from 'auth';
import { useToasts } from 'react-toast-notifications';
import userReducer from 'reducers/auth';
import { loadUser } from 'requests';
import { auth } from 'reducers/initialState';
import Container from 'components/Container';

const Main = lazy(() => import('./Main'));
const Messaging = lazy(() => import('./Main/Messaging'));
// const Shopping = lazy(() => import('../Shopping'));
const Orders = lazy(() => import('../Shopping/Orders'));
const Reports = lazy(() => import('../Shopping/Reports'));
const Tickets = lazy(() => import('../Tickets'));
const TicketsInventory = lazy(() => import('../Tickets/Inventory'));
const Inventory = lazy(() => import('../Inventory'));
const TicketSales = lazy(() => import('../Tickets/Sales'));

export default function Dashboard() {
  const [state, dispatch] = useReducer(userReducer, auth);
  const [value, setValue] = useLocalStorage(
    'dashboard_view_preference',
    'Shopping'
  );
  const { addToast } = useToasts();
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    loadUser(dispatch);
    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, [dispatch]);

  useEffect(() => {
    if (!state.isAuthenticated && state.error) {
      addToast(state.error, { appearance: 'error', autoDismiss: true });
      Auth.signout(() => history.push('login'));
    }
  }, [addToast, history, state]);

  return (
    <div className='relative bg-purple-50 min-h-screen'>
      <Header
        prefrence={value}
        setPrefrence={setValue}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <MobileMenu isMenuOpen={isMenuOpen} />
      <div className='flex pb-60 md:pb-96 md:flex-wrap md:justify-center md:py-24 md:px-6'>
        <Container topPadding>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/messages'>
                <Messaging />
              </Route>
              <Route exact path={['/shopping/inventory', '/shopping/inventory/add']}>
                <Inventory />
              </Route>
              <Route exact path='/shopping/orders'>
                <Orders />
              </Route>
              <Route exact path='/shopping/reports'>
                <Reports />
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
        </Container>
      </div>
      <Footer admin />
    </div>
  );
}
