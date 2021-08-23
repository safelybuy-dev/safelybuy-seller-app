import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import states from 'states';
import { BackArrowSVG, FowardArrowSVG } from '.';
const ProductLocation = ({
  setFourthContinueBtn,
  setSteps,
  ProductsFormAndUpdater,
}) => {
  const {
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = ProductsFormAndUpdater[1];
  const {
    shipping_state,
    shipping_city,
    shipping_weight,
  } = ProductsFormAndUpdater[0];

  const onSubmit = async (data) => console.log(data);

  useEffect(() => {
    if (shipping_state && shipping_city.trim().length && shipping_weight)
      return setFourthContinueBtn(true);
    setFourthContinueBtn(false);
    return () => {};
  }, [setFourthContinueBtn, shipping_state, shipping_city, shipping_weight]);
  return (
    <>
      <div className='flex '>
        <div className='flex w-5/12 justify-center'>
          <div className='divide-y divide-light-blue-400 w-full'>
            <div className='text-xs pb-2'>
              <BackArrowSVG setSteps={setSteps} value={3} />
              &nbsp;&nbsp;&nbsp;
              <FowardArrowSVG
                setSteps={setSteps}
                value={
                  shipping_state && shipping_city && shipping_weight ? 5 : ''
                }
              />
              &nbsp;&nbsp;&nbsp; 4 <span className='text-gray-400'>/ 4</span>
            </div>

            <div>
              <span className='text-safebuyColor mt-2 font-medium inline-block'>
                Product Location
              </span>
              <p>
                {' '}
                <small>
                  The product location and weight is essential in determining
                  the delivery fee.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-7/12 justify-center '>
          <>
            <div className='flex mt-5'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col w-96 md:max-w-7xl md:px-8'
              >
                <div className='text-left mr-2'>
                  <label className='text-sm my-2' htmlFor='email'>
                    State
                  </label>
                  <div className='relative md:w-full mb-2 mt-2'>
                    <select
                      // {...register('shipping_state')}
                      name='shipping_state'
                      value={shipping_state}
                      onChange={(e) => {
                        dispatch({
                          type: 'updateProductFormShippingState',
                          payload: e.target.value,
                          field: 'shipping_state',
                        });
                      }}
                      defaultValue=''
                      className='border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                    >
                      <option value='' disabled>
                        State
                      </option>
                      {states.map((e, i) => (
                        <option key={i} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='text-left mr-2'>
                  <label className='text-sm my-2' htmlFor='Product_title'>
                    City / Town
                  </label>
                  <div className='relative md:w-full mb-2 mt-2'>
                    {shipping_state &&
                    shipping_state.length &&
                    shipping_state === 'Lagos' ? (
                      <select
                        name='shipping_city'
                        value={shipping_city}
                        onChange={(e) => {
                          dispatch({
                            type: 'updateProductForm',
                            payload: e.target.value,
                            field: 'shipping_city',
                          });
                        }}
                        className='border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                        // {...register('shipping_city', { required: true })}
                      >
                        <option value=''disabled> City</option>
                        {[
                          {
                            lagos_city: 'Alimosho',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Agidingbi',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Akiode',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Alausa',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Agege',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ayobo',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Amuwo',
                            city_status: 'inactive',
                          },
                          {
                            lagos_city: 'Apapa',
                            city_status: 'inactive',
                          },
                          {
                            lagos_city: 'Ajeromi',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Alaba',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ajah',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Badagry',
                            city_status: 'inactive',
                          },
                          {
                            lagos_city: 'Egbeda',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Epe',
                            city_status: 'inactive',
                          },
                          {
                            lagos_city: 'Festac',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Gbagada',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ipaja',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Igando',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ikeja',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ikeja GRA',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ijegun',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Isolo',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ilupeju',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ikorodu',
                            city_status: 'inactive',
                          },
                          {
                            lagos_city: 'Ketu',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Lekki',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Lekki Phase 1',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Maryland',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Magodo',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Mushin',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ogba',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ojodu',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Opebi',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ojota',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Oshodi',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Ogudu',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Surulere',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Somolu',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Sangotedo',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Victoria Island',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'VGC',
                            city_status: 'active',
                          },
                          {
                            lagos_city: 'Yaba',
                            city_status: 'active',
                          },
                        ]
                          .filter((e) => e['city_status'] === 'active')
                          .map(({ lagos_city }, i) => (
                            <option key={i} value={lagos_city}>
                              {lagos_city}
                            </option>
                          ))}
                      </select>
                    ) : (
                      <input
                        type='text'
                        name='city'
                        value={shipping_city}
                        onChange={(e) => {
                          dispatch({
                            type: 'updateProductForm',
                            payload: e.target.value,
                            field: 'shipping_city',
                          });
                        }}
                        placeholder='Enter your city / town'
                        className={`border ${
                          errors.shipping_city ? 'border-red' : 'border-black'
                        } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      />
                    )}
                  </div>
                </div>

                <div className='text-left mr-2'>
                  <label className='text-sm my-2' htmlFor='Product_title'>
                    Weight (kg)
                  </label>
                  <div className='relative md:w-full mb-2 mt-2'>
                    <select
                      name='shipping_weight'
                      value={shipping_weight}
                      onChange={(e) => {
                        dispatch({
                          type: 'updateProductForm',
                          payload: e.target.value,
                          field: 'shipping_weight',
                        });
                      }}
                      className='border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                      // {...register('shipping_weight', { required: true })}
                    >
                      <option value='' disabled>
                        {' '}
                        Weight
                      </option>
                      {[2.5, 3.5, 5].map((e, i) => (
                        <option key={i} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default ProductLocation;
