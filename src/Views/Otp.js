import React, { useState, useEffect, useContext } from 'react';
import { ArrowRight } from 'svg';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import Button from 'components/Button';
import { useHistory, Redirect } from 'react-router-dom';
// import utilities from 'utilities';
import { requests, action } from 'requests';
import { useToasts } from 'react-toast-notifications';
import { ContextUser } from 'context';
import OtpInput from 'react-otp-input';

function Otp() {
  const history = useHistory();
  const pre_otp_details = sessionStorage.getItem('safely_buy_pre_otp');

  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(ContextUser);
  const user_id = pre_otp_details ? JSON.parse(pre_otp_details)[1] : '';
  const user_phone = pre_otp_details ? JSON.parse(pre_otp_details)[0] : '';

  const { addToast } = useToasts();
  // const [loadingUser, setLoadingUser] = useState(false);
  const [loadingVerification, setLoadingVerification] = useState(false);
  const [otp, setOtp] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoadingVerification(true);
      try {
        const res = await requests.post('/auth/verify-otp', {
          user_id,
          code: parseInt(otp),
        });

        localStorage.setItem('safely_buy_token', res.token);
        dispatch(action('LOGIN', res));
        setLoadingVerification(false);

        sessionStorage.removeItem('safely_buy_pre_otp');
        history.push('/seller-kyc');

        return addToast('Number successfully verified', {
          appearance: 'success',
          autoDismiss: true,
        });
      } catch (err) {
        setLoadingVerification(false);
        addToast(err?.response?.data?.message || 'Failed to verify OTP', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    };

    if (otp && otp.length > 5) return fetchData();
    return () => {};
  }, [otp, addToast, dispatch, history, user_id]);

  // const onSubmit = async (data) => {
  //   setLoadingUser(true);
  //   try {
  //     const response = await requests.post('/register', data);
  //     setLoadingUser(false);
  //   } catch (err) {
  //     setLoadingUser(false);

  //     if (err.response?.data?.error) {
  //       return addToast(
  //         utilities.formatErrorResponse(
  //           Object.values(err.response?.data?.error).flat()
  //         ),
  //         { appearance: 'error' }
  //       );
  //     }

  //     return addToast('Failed to sign up try again', { appearance: 'error' });
  //   }
  // };

  return sessionStorage.getItem('safely_buy_pre_otp') ? (
    <div className="relative justify-between flex flex-col min-h-screen text-center">
      <div>
        <header className="flex tracking-wide justify-center mx-12 my-8 md:mx-6 md:my-3">
          <Logo color="black" text="SELLER CENTER" />
        </header>
        <h1 className="tracking-wide pt-8 pb-2 font-bold px-12 text-4xl z-10 md:px-8 md:text-3xl">
          Verify your phone number
        </h1>
        <p>
          <small style={{ color: '#828282' }}>
            {' '}
            To verify your phone number, we’ve sent a one time password (OTP){' '}
          </small>
        </p>
        <small>to +234 {user_phone} </small>
        <div className="flex justify-center">
          {loadingVerification ? (
            <small>Loading...</small>
          ) : (
            <OtpInput
              className="otp mt-10"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              isInputNum
              separator={<span> </span>}
            />
          )}
        </div>
      </div>
      <div className="mb-12 flex justify-center">
        <Button
          onClick={alert}
          disabled={!(otp > 5)}
          primaryOutline
          roundedMd
          icon={
            <div className="animate-bounceSide">
              <ArrowRight color="black" />
            </div>
          }
          text="Proceed"
        />
      </div>
      <Footer />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Otp;
