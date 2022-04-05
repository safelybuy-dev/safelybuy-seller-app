import React, { useState, useEffect } from 'react';
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
  const [accountNameLoading, setAccountNameLoading] = useState(false);
  const [account_name, setAccountName] = useState('');

  const schema = yup.object().shape({
    bank_code: yup.string().required('Bank name is required'),
    // account_number: yup.string().required('Account Number is required'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getAccountName = async (data) => {
    setAccountNameLoading(true);
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
  };

  const onSubmit = async (data) => {
    if (!account_name.length) return;
    data.bank_id = data.bank_code;
    delete data.bank_code;
    try {
      const { status } = await requests.post('/seller/bank', {
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
    } catch (err) {
      addToast(err.message || 'Failed to save bank details', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  const onSubmitAccountNum = async (data) => await getAccountName(data);

  useEffect(() => {
    const fetchData = async () => {
      if (banks.length) return;
      const res = await requests.get('/getbanks');
      setBanks(res.data);
    };

    fetchData();
  }, [banks.length]);

  return (
    <>
      <h1 className="tracking-wide pt-2 pb-2 font-bold px-12 text-4xl z-10 md:px-8 md:text-3xl">
        Add bank details
      </h1>
      <small style={{ color: 'rgba(130, 130, 130, 1)' }} className="font-thin">
        {' '}
        Enter your bank details for payments.
      </small>
      <div className="flex justify-center mt-5">
        <form
          className="scrollable-form flex flex-col w-96 md:max-w-7xl md:px-8"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left mr-2">
            <label className="text-sm my-2" htmlFor="email">
              Bank
            </label>
            <div className="relative md:w-full mb-2 mt-2">
              <select
                className="border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                {...register('bank_code')}>
                {banks.map((e, i) => (
                  <option key={i} value={e.bank_code}>
                    {e.bank_name}
                  </option>
                ))}
              </select>
              {errors.bank_id && (
                <span className="error-span">{errors.bank_id?.message}</span>
              )}
            </div>
          </div>

          <div className="text-left mr-2">
            <label className="text-sm my-2" htmlFor="email">
              Account Number
            </label>
            <div className="relative md:w-full mb-2 mt-2">
              <input
                type="text"
                {...register('account_number')}
                onChange={(e) => {
                  const { value } = e.target;
                  e.target.value = value.replace(/[^0-9]/g, '');
                  setValue('account_number', e.target.value);
                  if (value.length > 10) {
                    e.target.value = value.slice(0, 10);
                    return;
                  }
                  if (value.length === 10) {
                    // onSubmitAccountNum(e.target.value)
                    return handleSubmit(onSubmitAccountNum)();
                  }
                }}
                placeholder="Enter your account number"
                className={`border ${
                  errors.account_name ? 'border-red' : 'border-black'
                } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
              />

              {errors.account_number && (
                <span className="error-span">
                  {errors.account_number?.message}
                </span>
              )}
            </div>
          </div>

          <div className="text-left mr-2">
            <label className="text-sm my-2" htmlFor="email">
              Account Name
            </label>
            <div className="relative md:w-full mb-3 mt-2">
              <input
                type="text"
                disabled
                placeholder="Account Name"
                value={account_name}
                className={`border 
                border-black 
                ${accountNameLoading ? 'bg-gray-200 animate-pulse' : ''}
                 w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
              />
            </div>
          </div>

          <div className="text-left">
            <div className="my-4 flex justify-center">
              <small
                onClick={() => history.push('/shopping')}
                style={{
                  cursor: 'pointer',
                }}
                className="mt-3 mr-20">
                Skip for later &nbsp;&nbsp;&nbsp;&nbsp;{' '}
              </small>

              <Button
                primaryOutline
                disabled={!account_name.length}
                roundedMd
                icon={
                  <div className="animate-bounceSide">
                    <ArrowRight color="black" />
                  </div>
                }
                text="Continue"
                Continue
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BankForm;
