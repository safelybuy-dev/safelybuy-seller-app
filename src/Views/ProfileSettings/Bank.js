import React, { useState, useEffect, useCallback } from 'react';
import { requests } from 'requests';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'svg';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button';

function BankForm({ setIsLoading, dispatch }) {
  const history = useHistory();
  const { addToast } = useToasts();
  const [banks, setBanks] = useState([]);
  const [userBank, setUserBank] = useState({});
  const [accountNameLoading, setAccountNameLoading] = useState(false);
  const [account_name, setAccountName] = useState('');
  const [account_number, setAccountNumber] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [loadingBank, setLoadingBank] = useState(false);

  const schema = yup.object().shape({
    bank_code: yup.string(),
    account_number: yup.string().min(10, 'Invalid Account Number'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getAccountName = useCallback(
    async (data) => {
      if (!Number(data.bank_code)) return;
      setAccountNameLoading(true);
      setAccountName('');
      try {
        const { data: da_ta } = await requests.post('/bank/confirm', data);

        const { status, message } = da_ta;
        setAccountNameLoading(false);

        if (!status) {
          addToast(message, { appearance: 'error', autoDismiss: true });
          return;
        }

        if (status) {
          const { data } = da_ta;
          setAccountName(data.account_name);
          return;
        }
      } catch (err) {
        addToast(err.message || 'Failed to get account Name', {
          appearance: 'error',
          autoDismiss: true,
        });
        setAccountNameLoading(false);
      }
    },
    [addToast]
  );

  const onSubmit = async (data) => {
    if (!account_name.length) return;
    data.bank_id = data.bank_code;
    delete data.bank_code;
    try {
      const { message, status } = await requests.post(`/seller/bank`, {
        ...data,
        account_name,
      });

      if (status === 'success') {
        addToast('Successfully added bank details', {
          appearance: 'success',
          autoDismiss: true,
        });
        return history.push('/shopping');
      }
      if (message === 'Bank Details updated!') {
        addToast(message, {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    } catch (err) {
      let errorResonse;
      if (err.response && err.response.data) {
        errorResonse = err.response.data?.message;
      } else if (err.message) {
        errorResonse = err.message;
      } else {
        errorResonse = 'Unable to add bank details';
      }
      addToast(errorResonse, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (banks.length) return;
      try {
        const res = await requests.get('/getbanks');
        setBanks(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [banks.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingBank(true);
        const res = await requests.get('/seller/bank');
        if (res.data.length > 0) {
          setUserBank({
            id: res.data[0].id,
            account_name: res.data[0].account_name,
            bank_code: res.data[0].bank_id,
            account_number: res.data[0].account_number,
          });
          setBankCode(res.data[0].bank_id);
          setLoadingBank(false);
        }
      } catch (error) {
        setLoadingBank(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userBank.bank_code) {
      const fields = ['bank_code', 'account_number'];
      fields.forEach((field) => setValue(field, userBank[field]));
      setAccountName(userBank.account_name);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userBank]);

  useEffect(() => {
    if (account_number.length === 10 && Number(bankCode)) {
      getAccountName({ bank_code: bankCode, account_number });
    }
  }, [bankCode, account_number, getAccountName]);

  if (loadingBank) {
    return <p className="px-6 my-6">Please Wait...</p>;
  }

  return (
    <div className="py-4">
      <div className="flex justify-start">
        <form
          className="flex mt-6 flex-col md:px-8 w-full"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left">
            <label className="text-xs md:text-sm my-2" htmlFor="bank_code">
              Bank
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <select
                className="border border-[#E0E0E0] focus:border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                {...register('bank_code', { required: true })}
                value={bankCode}
                onChange={(e) => {
                  setAccountName('');
                  setBankCode(e.target.value);
                }}
                disabled={Object.keys(userBank).length > 0}>
                <option key="null/bank" value="0">
                  Select Bank
                </option>
                {banks.map((e, i) => (
                  <option key={i} value={e.bank_code}>
                    {e.bank_name}
                  </option>
                ))}
              </select>
              {errors.bank_code && (
                <span className="error-span">{errors.bank_code?.message}</span>
              )}
            </div>
          </div>

          <div className="text-left">
            <label className="text-sm my-2" htmlFor="email">
              Account Number
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                type="text"
                {...register('account_number')}
                onChange={(e) => {
                  const { value } = e.target;
                  e.target.value = value.replace(/[^0-9]/g, '');
                  if (value.length > 10) e.target.value = value.slice(0, 10);
                  setAccountName('');
                  setAccountNumber(e.target.value);
                }}
                placeholder="Enter your account number"
                className={`border ${
                  errors.account_name
                    ? 'border-red'
                    : 'border-[#E0E0E0] focus:border-black'
                } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                disabled={Object.keys(userBank).length > 0}
              />

              {errors.account_number && (
                <span className="error-span">
                  {errors.account_number?.message}
                </span>
              )}
            </div>
          </div>

          <div className="text-left">
            <label className="text-sm my-2" htmlFor="email">
              Account Name
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                type="text"
                disabled
                placeholder="Account Name"
                value={account_name}
                className={`border 
                ${account_name ? 'border-black' : 'border-[#E0E0E0]'}
                ${accountNameLoading && 'bg-gray-200 animate-pulse'}
                 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
              />
            </div>
          </div>

          {Object.keys(userBank).length === 0 && (
            <div className="text-left">
              <div className="my-3 flex">
                <Button
                  primaryOutline={account_name.length}
                  disabled={!account_name.length}
                  roundedMd
                  icon={
                    <div className="animate-bounceSide">
                      <ArrowRight color="black" />
                    </div>
                  }
                  text="Save Changes"
                  Continue
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default BankForm;
