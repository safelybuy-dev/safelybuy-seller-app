import React, { useReducer, Suspense, lazy, useEffect,  } from "react";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import "./tailwind.generated.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextUser } from "./context";
import PrivateRoute from "./auth/PrivateRoute";
import PrivateOTPRoute from "./auth/Otp";
import { auth } from "./reducers/initialState";
import userReducer from "./reducers/auth";
import { loadUser } from  "./requests";




const Dashboard = lazy(() => import('./Views/Dashboard'));
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
    <ToastProvider>
      <ContextUser.Provider value={[state, dispatch]}>
        <Router>
        <Suspense fallback={<p>Loading....</p>}>
          <Switch>
            <Route path="/about"></Route>

            <PrivateOTPRoute path="/verifyOTP">
             <Otp />
            </PrivateOTPRoute>

            
            <Route path="/seller-kyc">
              <SellerKyc />
            </Route>

            <Route path="/sample">
              <SamplePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>

          </Switch>
          </Suspense>
        </Router>
      </ContextUser.Provider>
    </ToastProvider>
  );
}

export default App;
