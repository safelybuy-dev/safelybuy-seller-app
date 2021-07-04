import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'svg';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContextUser } from 'context';
import { updateUser } from 'actions/auth';
import { cities } from 'data';

const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const signUpSchema = yup.object().shape({
  firstname: yup
    .string()
    .required('Please enter name')
    .matches(/^[a-zA-Z][a-zA-Z '-]*$/, 'Invalid character supplied'),
  lastname: yup
    .string()
    .required('Please enter name')
    .matches(/^[a-zA-Z][a-zA-Z '-]*$/, 'Invalid character supplied'),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .required('Please enter  phone number')
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .min(11, 'Phone number must be exactly 11 digits')
    .max(11, 'Phone number must be exactly 11 digits'),
  gender: yup.string().required(),
});

export default function Account() {
  const [{ user, loadingUser }, dispatch] = useContext(ContextUser);
  const { addToast } = useToasts();
  // const [loadingUser, setLoadingUser] = useState(false);
  const [dob, setDob] = useState(!user.dob ? '' : new Date(user.dob));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    // console.log(loadingUser);
    if (user.firstname) {
      const fields = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'gender',
        'dob',
      ];
      fields.forEach((field) => setValue(field, user[field]));
      setDob(new Date(user.dob));
    }
    return () => {};
  }, [setValue, user]);

  const onSubmit = async (data) => {
    data.dob = dob;
    updateUser(dispatch, data, addToast);
  };

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };

  const [selectedState, setSelectedState] = useState('');
  // const [selectedTown, setSelectedTown] = useState('');
  const [states] = useState(Object.keys(cities).sort());
  const [towns, setTowns] = useState([]);

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
    <div className='py-4'>
      <div className='flex justify-start'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex mt-6 flex-col md:px-8 w-full'
        >
          {/* {!loadingUser && ( */}
          <>
            {' '}
            <div className='text-left mr-2'>
              <label className='text-sm my-2' htmlFor='firstname'>
                Business Name
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  // defaultValue={user.firstname}
                  type='text'
                  placeholder='Enter your business name'
                  {...register('business_name', {
                    required: true,
                  })}
                  id='firstname'
                  required
                  className={`border ${
                    errors.business_name ? 'border-red' : 'border-black'
                  } w-96 rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                />
                <div className='text-red-500'>
                  {errors.business_name && (
                    <span>{errors.business_name.message}</span>
                  )}
                </div>
              </div>
            </div>
            <div className='text-left  md:mr-0 w-full'>
              <label className='text-sm my-2' htmlFor='street'>
                Street Address
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  type='text'
                  placeholder='Enter your street address'
                  {...register('street', {
                    required: true,
                  })}
                  id='street'
                  required
                  className={`border ${
                    errors.street ? 'border-red' : 'border-black'
                  } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                />
                <span className='text-red-500'>
                  {errors.street && 'Please enter your street address'}
                </span>
              </div>
            </div>
            <div className='text-left  md:mr-0 w-full'>
              <label className='text-sm my-2' htmlFor='email'>
                State
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <select
                  {...register('state', {
                    required: true,
                  })}
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                  name='state'
                  id='state'
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value=''>Select State</option>
                  {states.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <span className='text-red-500'>
                  {errors.state && <span>{errors.state.message}</span>}
                </span>
              </div>
            </div>
            <div className='text-left  md:mr-0 w-full'>
              <label className='text-sm my-2' htmlFor='town'>
                Town/City
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <select
                  className='border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                  name='city'
                  id='city'
                  {...register('city', {
                    required: true,
                  })}
                  // defaultValue={
                  //   existing && modalOpen[1] === 'edit' ? existing.city : ''
                  // }
                >
                  <option value=''>Select City</option>
                  {towns.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <span className='text-red-500'>
                  {errors.city && <span>{errors.city.message}</span>}
                </span>
              </div>
            </div>
            <div className='text-left'>
              <label className='text-sm my-2' htmlFor='tin'>
                Tax Identification Number{' '}
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  // defaultValue={user.tin}
                  type='text'
                  placeholder='Enter your Tax Identification Number (TIN)'
                  {...register('tin', {
                    required: true,
                  })}
                  id='tin'
                  required
                  className={`border ${
                    errors.tin ? 'border-red' : 'border-black'
                  } w-96 rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                />
                <div className='text-red-500'>
                  {errors.tin && <span>{errors.tin.message}</span>}
                </div>
              </div>
            </div>
            <div className='text-left '>
              <label className='text-sm my-2' htmlFor='business_num'>
                Business Registration Number
              </label>
              <div className='relative md:w-full mb-6 mt-2'>
                <input
                  // defaultValue={user.business_num}
                  type='text'
                  placeholder='Enter your business registration number'
                  {...register('business_num', {
                    required: true,
                  })}
                  id='business_num'
                  required
                  className={`border ${
                    errors.business_num ? 'border-red' : 'border-black'
                  } w-96 rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                />
                <div className='text-red-500'>
                  {errors.business_num && (
                    <span>{errors.business_num.message}</span>
                  )}
                </div>
              </div>
            </div>
            <div className='my-3'>
              {loadingUser ? (
                <span
                  style={{
                    borderRightWidth: '2px',
                    borderLeftWidth: '2px',
                    borderRightColor: 'white',
                  }}
                  className='animate-spin rounded-full inline-block w-6 h-6 border-purple-700'
                ></span>
              ) : (
                <Button
                  primary
                  roundedMd
                  icon={
                    <div className='animate-bounceSide'>
                      <ArrowRight color='white' />
                    </div>
                  }
                  text='Save Changes'
                  submit
                />
              )}
            </div>
          </>
          {/* )} */}
        </form>
      </div>
    </div>
  );
}
