import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'svg';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import utilities from 'utilities';
import { cities } from 'data';
import { requests } from 'requests';

export default function Account() {
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(false);
  const [bizInfo, setBizInfo] = useState({});
  const [selectedState, setSelectedState] = useState('');
  // const [selectedTown, setSelectedTown] = useState('');
  const [states] = useState(Object.keys(cities).sort());
  const [towns, setTowns] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const fetchData = async () => {
    setIsLoading(true);
    const res = await requests.get('/seller/business');
    // console.log(res.data[res.data.length - 1]);
    setBizInfo(res.data[res.data.length - 1]);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (bizInfo?.business_name) {
      if (bizInfo.state) setSelectedState(bizInfo.state);
      if (bizInfo.city) {
        let newTowns = [...towns, bizInfo.city];
        newTowns = new Set(newTowns);
        setTowns([...newTowns]);
      }
      const fields = [
        'business_name',
        'city',
        'state',
        'tin',
        'vat_num',
        'street',
        'business_num',
      ];
      fields.forEach((field) => setValue(field, bizInfo[field]));
      setValue('city', bizInfo.city);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bizInfo, bizInfo?.business_name, setValue]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      data.legal_form = 'N/A';
      data.vat_registered = true;
      const { status } = await requests.post('/seller/business/update', data);
      if (status === 'success') {
        addToast('Successfully updated seller business information', {
          appearance: 'success',
          autoDismiss: true,
        });
        fetchData();
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.response?.data);
      if (err.response?.data?.error) {
        return addToast(
          utilities.formatErrorResponse(
            Object.values(err.response?.data?.error).flat()
          ),
          { appearance: 'error', autoDismiss: true }
        );
      }

      return addToast('Failed to update seller business info. Try again', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  // useEffect(() => {
  //   if (existing && modalOpen[1] === 'edit') {
  //     setValue('street', existing.street);
  //     setValue('state', existing.state);
  //     setSelectedState(existing.state);
  //     setTowns(cities[existing.state].sort());
  //   }
  // }, []);

  useEffect(() => {
    if (selectedState) setTowns(cities[selectedState].sort());
  }, [selectedState]);

  return (
    <div className="py-4">
      <div className="flex justify-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mt-6 flex-col md:px-5 w-full">
          {/* {!loadingUser && ( */}{' '}
          <div className="text-left mr-2">
            <label className="text-sm my-2" htmlFor="firstname">
              Business Name
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.firstname}
                type="text"
                placeholder="Enter your business name"
                {...register('business_name', {
                  required: true,
                })}
                id="firstname"
                required
                className={`border ${
                  errors.business_name ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.business_name && (
                  <span>{errors.business_name.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className="text-left  md:mr-0 w-full">
            <label className="text-sm my-2" htmlFor="street">
              Street Address
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                type="text"
                placeholder="Enter your street address"
                {...register('street', {
                  required: true,
                })}
                id="street"
                required
                className={`border ${
                  errors.street ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <span className="text-red-500">
                {errors.street && 'Please enter your street address'}
              </span>
            </div>
          </div>
          <div className="text-left  md:mr-0 w-full">
            <label className="text-sm my-2" htmlFor="email">
              State
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <select
                {...register('state', {
                  required: true,
                })}
                className="border w-full border-[#E0E0E0] focus:border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl tracking-[0.04em]"
                name="state"
                id="state"
                onChange={(e) => setSelectedState(e.target.value)}>
                <option value="">Select State</option>
                {states.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <span className="text-red-500">
                {errors.state && <span>{errors.state.message}</span>}
              </span>
            </div>
          </div>
          <div className="text-left  md:mr-0 w-full">
            <label className="text-sm my-2" htmlFor="town">
              Town/City
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <select
                className="border w-full border-[#E0E0E0] focus:border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl tracking-[0.04em]"
                name="city"
                id="city"
                {...register('city', {
                  required: true,
                })}
                // defaultValue={
                //   existing && modalOpen[1] === 'edit' ? existing.city : ''
                // }
              >
                <option value="">Select City</option>
                {towns.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <span className="text-red-500">
                {errors.city && <span>{errors.city.message}</span>}
              </span>
            </div>
          </div>
          <div className="text-left">
            <label className="text-sm my-2" htmlFor="tin">
              Tax Identification Number{' '}
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.tin}
                type="text"
                placeholder="Enter your Tax Identification Number (TIN)"
                {...register('tin', {
                  required: true,
                })}
                id="tin"
                required
                className={`border ${
                  errors.tin ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.tin && <span>{errors.tin.message}</span>}
              </div>
            </div>
          </div>
          <div className="text-left ">
            <label className="text-sm my-2" htmlFor="business_num">
              Business Registration Number
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.business_num}
                type="text"
                placeholder="Enter your business registration number"
                {...register('business_num', {
                  required: true,
                })}
                id="business_num"
                required
                className={`border ${
                  errors.business_num ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.business_num && (
                  <span>{errors.business_num.message}</span>
                )}
              </div>
            </div>
          </div>
          <div onClick={handleSubmit(onSubmit)} className="my-3">
            {isLoading ? (
              <span
                style={{
                  borderRightWidth: '2px',
                  borderLeftWidth: '2px',
                  borderRightColor: 'white',
                }}
                className="animate-spin rounded-full inline-block w-6 h-6 border-purple-700"
              />
            ) : (
              <Button
                primaryOutline
                roundedMd
                icon={
                  <div className="animate-bounceSide">
                    <ArrowRight color="black" />
                  </div>
                }
                text="Save Changes"
                submit
              />
            )}
          </div>
          {/* )} */}
        </form>
      </div>
    </div>
  );
}
