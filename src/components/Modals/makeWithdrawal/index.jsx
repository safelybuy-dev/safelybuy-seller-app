import {
  TOGGLE_WITHDRAWAL_MODAL,
  WITHDRAW_TO_ACCOUNT,
} from 'actions/wallet.action';
import { useToasts } from 'react-toast-notifications';
import { ContextUser } from 'context';
import { useWallet } from 'context/wallet.context';
import { useContext } from 'react';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { CloseIcon } from 'svg';
import { convertToNaira } from 'utilities/getCurrency';
import { axiosWithAuth } from 'auth';
import { baseUrl } from 'api';
import arrowLeft from 'assets/images/arrow-left.png';

const MakeWithdrawal = () => {
  const [steps, setSteps] = useState(1);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [{ wallet }, walletDispatch] = useWallet();
  const [{ user }] = useContext(ContextUser);
  const { addToast } = useToasts();
  const account = user?.isBankDetailsVerified || null;

  const handleModalClose = () => {
    walletDispatch({
      type: TOGGLE_WITHDRAWAL_MODAL,
    });
  };

  const handleAmountChange = useCallback((e) => setAmount(e.target.value), []);

  const handleWithdrawalStep = useCallback((number) => {
    setSteps((prev) => prev + number);
  }, []);

  const handleWithdrawal = useCallback(async () => {
    try {
      setLoading(true);
      await axiosWithAuth().post(`${baseUrl}/api/v1/withdraw-from-wallet`, {
        amount,
        is_commission: false,
      });
      if (Number(amount) && Number(amount) <= 250000) {
        walletDispatch({
          type: WITHDRAW_TO_ACCOUNT,
          payload: Number(amount),
        });
      }
      setSteps((prev) => prev + 1);
    } catch (error) {
      if (
        error.response &&
        error.response?.data &&
        error.response?.data?.message
      ) {
        addToast(error.response?.data?.message, {
          autoDismiss: true,
          appearance: 'error',
        });
        return;
      }
      addToast(error.message, {
        autoDismiss: true,
        appearance: 'error',
      });
    } finally {
      setLoading(false);
    }
  }, [amount, addToast, walletDispatch]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return (
    <div
      className="h-screen p-[2rem] md:p-[6rem] w-screen fixed top-0 left-0  bg-purple-600 bg-opacity-30 z-50 flex md:justify-end items-center"
      onClick={handleModalClose}>
      <div
        className="bg-[#F6F5FF]  md:w-[25rem] p-6 h-[80%] md:min-h-[30rem] relative rounded-lg"
        onClick={(e) => e.stopPropagation()}>
        <div className="absolute   -right-6 -top-6  md:-right-14 md:-top-8">
          <button
            className="bg-red-500 rounded-full text-white p-3"
            onClick={handleModalClose}>
            <CloseIcon color="white" scale={0.7} />
          </button>
        </div>
        {steps === 1 && (
          <InputAmount
            balance={wallet?.balance}
            account={account}
            handleWithdrawalStep={handleWithdrawalStep}
            amount={amount}
            handleAmountChange={handleAmountChange}
          />
        )}
        {steps === 2 && (
          <Review
            amount={amount}
            account={account}
            handleWithdrawal={handleWithdrawal}
            loading={loading}
            handleWithdrawalStep={handleWithdrawalStep}
          />
        )}
        {steps === 3 && (
          <Confirmation
            currentSeller={user.firstname}
            amount={amount}
            account={account}
          />
        )}
      </div>
    </div>
  );
};

function InputAmount({
  balance,
  account,
  handleWithdrawalStep,
  amount,
  handleAmountChange,
}) {
  return (
    <div className="bg-white rounded h-full overflow-hidden">
      <div className="bg-[#8661ff26] h-20 px-8" />
      <div className="p-5">
        <div className="text-center mb-5">
          <p className="mb-1">Available Balance: </p>
          <h3 className="font-bold">{convertToNaira(balance)}</h3>
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            name=""
            id=""
            className="w-full h-10 p-2 border-b border-[#E0E0E0] outline-none bg-transparent "
            placeholder="Enter Amount To Withdraw"
          />
        </div>
        {account && (
          <div className="">
            <p className="">Withdraw to</p>
            <p className="font-bold">{account?.account_name}</p>
            <p className="font-bold">{account?.account_number}</p>
            <p className="font-bold">{account?.bank?.bank_name}</p>
          </div>
        )}
        <div className="flex justify-center items-center my-4">
          <button
            className={`rounded-full w-3/5 text-white bg-[#8661FF] py-[0.5rem] ${
              (!amount || Number(amount) > Number(balance)) &&
              'opacity-30 cursor-not-allowed'
            }`}
            onClick={() => handleWithdrawalStep(1)}
            disabled={!amount || Number(amount) > Number(balance)}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

function Review({
  amount,
  account,
  handleWithdrawal,
  loading,
  handleWithdrawalStep,
}) {
  return (
    <div className="bg-white rounded h-full overflow-hidden">
      <div className="bg-[#8661ff26] h-20 px-8 flex items-center">
        <button type="button" onClick={() => handleWithdrawalStep(-1)}>
          <img src={arrowLeft} alt="" />
        </button>
        <span className="ml-4 text-[#8661FF]">Review</span>
      </div>
      <div className="p-5">
        <div>
          <p>
            Send <b>{convertToNaira(amount)}</b> to <br />
            <b>{account?.account_name}</b>
            <br />
            <b>{account?.account_number}</b>
            <br />
            <b>{account?.bank?.bank_name}</b>
          </p>
        </div>
        <div className="my-4 flex justify-center items-center">
          <button
            className={`rounded-full w-3/5 text-white bg-[#8661FF] py-[0.5rem] ${
              loading && 'opacity-30 cursor-not-allowed'
            }`}
            onClick={handleWithdrawal}
            disabled={loading}>
            {loading ? 'Please wait..' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Confirmation({ currentSeller, amount, account }) {
  return (
    <div className="bg-white rounded h-full overflow-hidden">
      <div className="bg-[#8661ff26] h-20 px-8 flex  items-center">
        <p className="text-[#8661FF]">Confirmation</p>
      </div>
      <div className="p-5">
        <div className="pb-5 mb-4 border-b border-[#E0E0E0]">
          <p>
            Hi <span className="font-bold">{currentSeller}</span>, <br />
            <span className="mt-4 block">
              Your withdrawal is being proceed and your money should arrive in
              your bank soon
            </span>
          </p>
        </div>
        <div>
          <p className="mb-2">Withdrawal Details</p>
          <p className="mb-1 ">
            Date of withdrawal:
            <span className=" ml-2 font-bold">{new Date().toDateString()}</span>
          </p>
          <p className="mb-1">
            Amount Debited:
            <span className="ml-2 font-bold">{convertToNaira(amount)}</span>
          </p>
          <div className="flex w-full flex-col">
            <p className="mb-1">Bank details:</p>
            <div className="flex flex-col">
              <span className="font-bold">{account?.account_name}</span>
              <span className="font-bold">{account?.account_number}</span>
              <span className="font-bold">{account?.bank?.bank_name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeWithdrawal;
