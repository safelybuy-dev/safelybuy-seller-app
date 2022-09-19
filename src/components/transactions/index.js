import { useState, useEffect } from 'react';
import moment from 'moment';
import ItemsPerPage from 'components/ItemsPerPage';
import { convertToNaira } from 'utilities/getCurrency';
import { ArrowRight, CloseIcon } from 'svg';
import { LoadingIcon } from 'components/Spinner/LoadingIcon';
import { useWallet } from 'context/wallet.context';
import { getWalletHistory } from 'actions/wallet.action';

const options = ['Last 5days', 'Last 15days', 'Last 20days', 'Last 50days'];

export const Transactions = () => {
  const [transactionsPerPage, setTransactionsPerPage] = useState(options[0]);
  const [{ walletHistory, loadingWalletHistory }, dispatch] = useWallet();

  useEffect(() => {
    if (!walletHistory?.data?.length) {
      getWalletHistory(dispatch);
    }
  }, [dispatch, walletHistory]);

  if (loadingWalletHistory) {
    return (
      <div className="flex justify-center items-center py-6 w-full">
        <LoadingIcon />
      </div>
    );
  }

  if (!loadingWalletHistory && walletHistory?.data?.length === 0) {
    return (
      <div className="text-gray-400 text-center py-5 text-sm ">
        <p>No Recent History</p>
      </div>
    );
  }

  return (
    <div className="p-6  absolute  -left-10 w-full top-40  z-10  border-gray-100 border-2  rounded-xl bg-white">
      <div className="text-right">
        <div className="inline-block cursor-pointer rounded-full bg-red-500 p-2">
          <CloseIcon color="white" />
        </div>
      </div>
      <div className="px-4">
        <div className="flex justify-between items-center w-full mb-5">
          <h3 className="text-xl font-medium">Transactions</h3>
          <div className="flex-shrink-0">
            <ItemsPerPage
              options={options}
              selected={transactionsPerPage}
              setSelected={setTransactionsPerPage}
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-y-3">
            {walletHistory?.data?.map(
              ({ amount, created_at, id, transaction_type, status }) => (
                <div
                  className="flex justify-between items-center border-b-2 pb-2 border-[#E0E0E0] border-opacity-40"
                  key={id}>
                  <div className="">
                    <small className="text-gray-400 mb-1 text-xs">
                      {moment(new Date(created_at)).fromNow()}
                    </small>
                    <div className="flex gap-x-2 items-center">
                      <p className="uppercase text-sm">{transaction_type}</p>
                      <span className="w-3 h-3 flex justify-center items-center rounded-full bg-[#4BBF75] bg-opacity-[0.15]">
                        <span className="bg-[#4BBF75]  rounded-full w-1 h-1" />
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <p className="font-semibold text-sm">
                      {convertToNaira(amount)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="text-center mt-2">
            <button className="align-center rounded-xl hover:bg-purple-100 w-full p-4 border-gray-100 ">
              <span className="text-purple-500 inline-block mr-4">
                See more
              </span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
