import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import states from "../../state";
const ProductLocation = ({ setFourthContinueBtn }) => {
  const { register, handleSubmit, errors } = useForm();

  const [state, selectedState] = useState("");
  const [city, setCity] = useState("");
  const [weight, setWeight] = useState("");

  const onSubmit = async data => console.log(data);

  useEffect(() => {
    if (state && city.trim().length && weight) return setFourthContinueBtn(true);
    setFourthContinueBtn(false);
    return () => {};
  }, [setFourthContinueBtn, state, city, weight]);
  return (
    <>
      <div className='flex '>
        <div className='flex w-5/12 justify-center'>
          <div className='divide-y divide-light-blue-400 w-full'>
            <div className='text-xs pb-2'>
              <svg
                className='inline-flex cursor-pointer'
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2.27624 5.99999L7.13817 10.8619L6.19536 11.8047L0.390625 5.99999L6.19536 0.195251L7.13817 1.13806L2.27624 5.99999Z'
                  fill='#A7A7A7'
                />
              </svg>
              &nbsp;&nbsp;&nbsp;
              <svg
                className='inline-flex cursor-pointer'
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5.72326 5.99999L0.861328 1.13806L1.80414 0.195251L7.60888 5.99999L1.80414 11.8047L0.861328 10.8619L5.72326 5.99999Z'
                  fill='#A7A7A7'
                />
              </svg>
              &nbsp;&nbsp;&nbsp; 4 <span className='text-gray-400'>/ 4</span>
            </div>

            <div>
              <span className='text-safebuyColor mt-2 font-medium inline-block'>
                Product Location
              </span>
              <p>
                {" "}
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
                      onChange={e => selectedState(e.target.value)}
                      className='border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                      name='state'
                      ref={register}
                    >
                      <option selected disabled>
                        {" "}
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
                    <input
                      type='text'
                      name='city'
                      value={city}
                      onChange={e => {
                        setCity(e.target.value);
                      }}
                      placeholder='Enter your city / town'
                      className={`border ${
                        errors.city ? "border-red" : "border-black"
                      } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                    />
                  </div>
                </div>

                <div className='text-left mr-2'>
                  <label className='text-sm my-2' htmlFor='Product_title'>
                    Weight (kg)
                  </label>
                  <div className='relative md:w-full mb-2 mt-2'>
                    <input
                      type='text'
                      name='weight'
                      value={weight}
                      onChange={e => {
                        setWeight(e.target.value.replace(/[^0-9]/g, ""));
                      }}
                      placeholder='Enter your weight'
                      className={`border ${
                        errors.weight ? "border-red" : "border-black"
                      } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                    />
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
