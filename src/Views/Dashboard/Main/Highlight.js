import React, { useContext } from 'react';
import { TOGGLE_WITHDRAWAL_MODAL } from 'actions/wallet.action';
import { ContextUser } from 'context';
import { useToasts } from 'react-toast-notifications';
import { useWallet } from 'context/wallet.context';

export const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const optionsAlt = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export default function Highlight({ balance }) {
  const date = new Date();
  const [{ user }] = useContext(ContextUser);
  const [, walletDispatch] = useWallet();
  const { addToast } = useToasts();

  console.log(user);

  const handleWidrawal = () => {
    if (!Object.values(user).length) {
      addToast('Please hold on...', {
        appearance: 'info',
        autoDismiss: true,
      });
      return;
    }
    if (
      !user.isBankDetailsVerified ||
      Object.keys(user.isBankDetailsVerified).length === 0
    ) {
      addToast('No Banks Added For This Account', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }
    walletDispatch({
      type: TOGGLE_WITHDRAWAL_MODAL,
    });
  };

  return (
    <div className=" md:text-center py-4 px-6 pb-8 text-white md:mr-0">
      <p className="text-xs opacity-70">
        {new Intl.DateTimeFormat('en-GB', options).format(date)}
      </p>
      <h3 className="text-xl text-black pb-4">Your Wallet</h3>
      <div className="flex flex-col bg-gradient-to-tl from-purple-700 via-purple-600 to-indigo-400 rounded-2xl p-8">
        <div className="flex justify-between items-center pb-4">
          <div className="flex  items-center md:justify-center">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.15" width="45" height="45" rx="6" fill="white" />
              <path
                d="M20.0667 27.1333L20.0667 22L29.6001 22M24.4667 27.1333L24.4667 24.2M28.8667 27.1333L28.8667 24.2M20.0667 19.8L20.0667 16.8667M24.4667 19.8L24.4667 16.8667M28.8667 19.8L28.8667 16.8667M33.2667 14.6667L33.2667 29.3333C33.2667 30.1433 32.6101 30.8 31.8001 30.8L14.2001 30.8C13.39 30.8 12.7334 30.1433 12.7334 29.3333L12.7334 19.0667L18.6001 13.2L31.8001 13.2C32.6101 13.2 33.2667 13.8566 33.2667 14.6667Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="">
            <button className="bg-[#ab79ff66] text-gray-50 py-2 px-4 rounded cursor-pointer">
              View history
            </button>
          </div>
        </div>
        <div className="py-6">
          <span className="text-xs opacity-70">AVAILABLE BALANCE</span>
          <span className="block text-4xl tracking-widest font-semibold">
            <span className="text-lg">₦</span>
            {Number(balance).toLocaleString()}
          </span>
        </div>
        <div className="py-5">
          <button
            className="px-3 py-2 text-center w-full bg-white text-black rounded-md"
            onClick={handleWidrawal}>
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  );
}
