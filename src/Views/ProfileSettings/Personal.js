import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'svg';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import Button from 'components/Button';
import { useToasts } from 'react-toast-notifications';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContextUser } from 'context';
import { updateUser } from 'actions/auth';

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
    console.log(user);
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
  }, [loadingUser, setValue, user]);

  const onSubmit = async (data) => {
    data.dob = dob;
    updateUser(dispatch, data, addToast);
  };

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };

  return (
    <div className="py-4">
      <div className="flex justify-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mt-6 flex-col md:px-5 w-full">
          <div className="text-left">
            <label className="text-sm my-2" htmlFor="firstname">
              First Name
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.firstname}
                type="text"
                placeholder="Chibuzor"
                {...register('firstname', {
                  required: true,
                })}
                id="firstname"
                required
                className={`border ${
                  errors.firstname ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.firstname && <span>{errors.firstname.message}</span>}
              </div>
            </div>
          </div>
          <div className="text-left">
            <label className="text-sm my-2" htmlFor="lastname">
              Last Name
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.lastname}
                type="text"
                placeholder="Oluwabukola"
                {...register('lastname', {
                  required: true,
                })}
                id="lastname"
                required
                className={`border ${
                  errors.lastname ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.lastname && <span>{errors.lastname.message}</span>}
              </div>
            </div>
          </div>
          <div className="text-left ">
            <label className="text-sm my-2" htmlFor="phone">
              Phone Number
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.phone}
                type="phone"
                placeholder="070109067**"
                {...register('phone', {
                  required: true,
                })}
                id="phone"
                required
                className={`border ${
                  errors.phone ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.phone && <span>{errors.phone.message}</span>}
              </div>
            </div>
          </div>
          <div className="text-left">
            <label className="text-sm my-2" htmlFor="email">
              Email address
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <input
                // defaultValue={user.email}
                type="email"
                placeholder="user@safelybuy.com"
                {...register('email', {
                  required: true,
                  validate: handleEmailValidation,
                })}
                id="email"
                required
                className={`border ${
                  errors.email ? 'border-red' : 'border-[#E0E0E0]'
                } w-96 md:w-full rounded-full px-6 py-2 focus:outline-none focus:border-black focus:shadow-xl`}
              />
              <div className="text-red-500">
                {errors.email && 'Email is not valid'}
              </div>
            </div>
          </div>
          <div className="text-left">
            <label className="text-sm my-2" htmlFor="dob">
              Date of Birth
            </label>
            <div className="relative md:w-full mb-6 mt-2">
              <div className="relative border focus:border-black border-[#E0E0E0] w-96 md:w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl">
                <DatePicker onChange={setDob} value={dob} />
              </div>
            </div>
          </div>
          <div className="my-3">
            {loadingUser ? (
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
        </form>
      </div>
    </div>
  );
}
