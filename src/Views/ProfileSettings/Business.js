import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'svg';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import utilities from 'utilities';
import { cities } from 'data';
import { loadUser, requests } from 'requests';

export default function Account({ userContext }) {
  const [
    {
      user: { isBusinessDetails: business },
      loadingUser,
    },
    dispatch,
  ] = userContext;
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState(
    (business && business?.state) || ''
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      business_name: (business && business?.business_name) || '',
      city: (business && business?.city) || '',
      state: (business && business?.state) || '',
      street: (business && business?.street) || '',
      business_num: (business && business?.business_num) || '',
      tin: (business && business?.tin) || '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      data.legal_form = 'N/A';
      data.vat_registered = 'no';
      await requests.post('/seller/business/update', data);
      addToast('Successfully updated seller business information', {
        appearance: 'success',
        autoDismiss: true,
      });
      await loadUser(dispatch);
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

  return (
    <div className="py-4">
      <div className="flex justify-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mt-6 flex-col md:px-5 w-full">
          <div className="text-left mr-2">
            <label className=" text-xs md:text-sm my-2" htmlFor="firstname">
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
                } w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.business_name && (
                  <span>{errors.business_name.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className="text-left  md:mr-0 w-full">
            <label className="text-xs md:text-sm my-2" htmlFor="street">
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
                } w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <span className="text-red-500">
                {errors.street && 'Please enter your street address'}
              </span>
            </div>
          </div>
          <div className="text-left  md:mr-0 w-full">
            <label className="text-xs md:text-sm my-2" htmlFor="email">
              State
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <select
                {...register('state', {
                  required: true,
                })}
                onChange={(e) => setSelectedState(e.target.value)}
                className="border w-full border-[#E0E0E0] focus:border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl tracking-[0.04em]"
                name="state"
                id="state">
                <option value="">Select State</option>
                {Object.keys(cities).map((e) => (
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
            <label className="text-xs md:text-sm my-2" htmlFor="town">
              Town/City
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <select
                className="border w-full border-[#E0E0E0] focus:border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl tracking-[0.04em]"
                name="city"
                id="city"
                {...register('city', {
                  required: true,
                })}>
                <option value="">Select City</option>
                {selectedState &&
                  cities[selectedState]?.map((e) => (
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
            <label className="text-xs md:text-sm my-2" htmlFor="tin">
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
                } w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.tin && <span>{errors.tin.message}</span>}
              </div>
            </div>
          </div>
          <div className="text-left ">
            <label className=" text-xs md:text-sm my-2" htmlFor="business_num">
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
                } w-full rounded-full px-6 py-2 tracking-[0.04em] placeholder:text-[#828282] focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.business_num && (
                  <span>{errors.business_num.message}</span>
                )}
              </div>
            </div>
          </div>
          <div onClick={handleSubmit(onSubmit)} className="my-3">
            {isLoading || loadingUser ? (
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
