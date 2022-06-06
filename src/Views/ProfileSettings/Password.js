import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, HidePassword, ViewPassword } from 'svg';
import Button from 'components/Button';
import { ContextUser } from 'context';
import { updatePassword } from 'actions/auth';
import { useToasts } from 'react-toast-notifications';

const PasswordInput = React.forwardRef((props, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  const [active, setActive] = useState(false);
  const clickHandler = () => setIsHidden((prev) => !prev);
  return (
    <div
      className={`border  ${
        active ? 'border-black shadow-xl' : 'border-[#E0E0E0]'
      } w-96 md:w-full rounded-full px-6 py-2   flex justify-between items-center`}>
      <input
        type={isHidden ? 'password' : 'text'}
        {...props}
        ref={ref}
        className="flex-1 mr-2 focus:outline-none h-full"
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => setActive(false)}
      />
      <button type="button" onClick={clickHandler}>
        {isHidden ? <HidePassword /> : <ViewPassword />}
      </button>
    </div>
  );
});

function SamplePage() {
  const { addToast } = useToasts();
  const [state, dispatch] = useContext(ContextUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    updatePassword(
      dispatch,
      { old_password: data.old_password, password: data.password },
      addToast,
      reset
    );
  };

  return (
    <div className="py-4">
      <div className="flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mt-6 flex-col md:px-8 w-full">
          {state.loadingUser && (
            <span
              style={{
                borderRightWidth: '2px',
                borderLeftWidth: '2px',
                borderRightColor: 'white',
              }}
              className="animate-spin rounded-full inline-block w-6 h-6 border-purple-700"
            />
          )}
          {!state.loadingUser && (
            <>
              <div className="text-left">
                <div className="flex justify-between my-2">
                  <label htmlFor="old_password">Old password</label>
                </div>
                <div className="relative md:w-full mb-6 mt-2">
                  {/* <input
                    type="password"
                    placeholder="Your old password"
                    {...register('old_password', {
                      required: true,
                    })}
                    id="old_password"
                    className="border border-[#E0E0E0] focus:border-black w-96 md:w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                  /> */}
                  <PasswordInput
                    placeholder="Your old password"
                    {...register('old_password', {
                      required: true,
                    })}
                    id="old_password"
                  />
                  <div className="text-red-500">
                    {errors.old_password && errors.old_password.message}
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex justify-between my-2">
                  <label htmlFor="password">New password</label>
                </div>
                <div className="relative md:w-full mb-6 mt-2">
                  {/* <input
                    type="password"
                    placeholder="Your new password"
                    {...register('password', {
                      required: true,
                      minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters',
                      },
                    })}
                    id="password"
                    className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                  /> */}
                  <PasswordInput
                    placeholder="Your new password"
                    {...register('password', {
                      required: true,
                      minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters',
                      },
                    })}
                    id="password"
                  />
                  <div className="text-red-500">
                    {errors.password && errors.password.message}
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex justify-between my-2">
                  <label htmlFor="confirm_password">Confirm password</label>
                </div>
                <div className="relative md:w-full mb-6 mt-2">
                  {/* <input
                    type="password"
                    placeholder="Retype your new password"
                    {...register('confirm_password', {
                      validate: (value) =>
                        value === password.current ||
                        'The passwords do not match',
                    })}
                    id="confirm_password"
                    className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                  /> */}
                  <PasswordInput
                    placeholder="Retype your new password"
                    {...register('confirm_password', {
                      validate: (value) =>
                        value === password.current ||
                        'The passwords do not match',
                    })}
                    id="confirm_password"
                  />
                  <div className="text-red-500">
                    {errors.confirm_password && errors.confirm_password.message}
                  </div>
                </div>
              </div>

              <div className="my-3">
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
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default SamplePage;
