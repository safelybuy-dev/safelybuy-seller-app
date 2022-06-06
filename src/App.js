import React, { useReducer, Suspense, lazy, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spinner } from 'components/Spinner';
import { ContextUser } from './context';
import PrivateRoute from './auth/PrivateRoute';
import PrivateOTPRoute from './auth/Otp';
import { auth } from './reducers/initialState';
import userReducer from './reducers/auth';
import { loadUser } from './requests';
import BaseErrorBoundary from 'error-boundary/base-boundary';

const SuccessError = lazy(() => import('./Views/Success-Error/index'));
const Dashboard = lazy(() => import('./Views/Dashboard'));
const ProfileSettings = lazy(() => import('./Views/ProfileSettings'));
const SamplePage = lazy(() => import('./Views/SamplePage'));
const SellerKyc = lazy(() => import('./Views/SellerKyc'));
const LoginPage = lazy(() => import('./Views/LoginPage'));
const Otp = lazy(() => import('./Views/Otp'));
const SignUpPage = lazy(() => import('./Views/SignUp'));

function App() {
  const [state, dispatch] = useReducer(userReducer, auth);

  useEffect(() => {
    loadUser(dispatch);
    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, [dispatch]);

  return (
    <BaseErrorBoundary>
      <ToastProvider>
        <Router>
          <Suspense fallback={<Spinner />}>
            <ContextUser.Provider value={[state, dispatch]}>
              <Switch>
                <PrivateRoute path="/shopping">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/tickets">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/food">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/settings">
                  <ProfileSettings />
                </PrivateRoute>
                <Route path="/success-error">
                  <SuccessError />
                </Route>
                <PrivateOTPRoute path="/verifyOTP">
                  <Otp />
                </PrivateOTPRoute>
                <Route path="/seller-kyc">
                  <SellerKyc />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/signup">
                  <SignUpPage />
                </Route>
                <Route path="/">
                  <SamplePage />
                </Route>
              </Switch>
            </ContextUser.Provider>
          </Suspense>
        </Router>
      </ToastProvider>
    </BaseErrorBoundary>
  );
}

export default App;
