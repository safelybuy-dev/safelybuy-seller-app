import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import { BackArrowSVG, FowardArrowSVG } from ".";

const InventorySales = ({
  setSecondContinueBtn,
  setSteps,
  ProductsFormAndUpdater
}) => {

  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues: ProductsFormAndUpdater[0]
  });


  const dispatch = ProductsFormAndUpdater[1];

  const onSubmit = async data => console.log(data);

  const fieldValues = [
    {
      title: "Seller SKU",
      name: "seller_sku",
      placeholder: "Ex. SBD-123",
      isNumOnly: false
    },
    {
      title: "Quantity",
      name: "available",
      placeholder: "Ex. 4",
      isNumOnly: true 
    }
  ];

  const watchFields = watch([...fieldValues.map(e => e.name), "price"]);

  useEffect(() => {
    if (
      Object.values(watchFields)
        .filter(Boolean)
        .filter(e => e.trim().length).length === 3
    ) {
      setSecondContinueBtn(true);
    } else {
      setSecondContinueBtn(false);
    }
    return () => {};
  }, [setSecondContinueBtn, watchFields]);
  return (
    <>
      <div className='flex '>
        <div className='flex w-5/12 justify-center'>
          <div className='divide-y divide-light-blue-400 w-full'>
            <div className='text-xs pb-2'>
              <BackArrowSVG setSteps={setSteps} value={1} />
              &nbsp;&nbsp;&nbsp;
              <FowardArrowSVG
                setSteps={setSteps}
                value={
                  Object.values(watchFields)
                    .filter(Boolean)
                    .filter(e => e.trim().length).length === 3
                    ? 3
                    : ""
                }
              />
              &nbsp;&nbsp;&nbsp; 2 <span className='text-gray-400'>/ 4</span>
            </div>

            <div>
              <span className='text-safebuyColor mt-2 font-medium inline-block'>
                Inventory & Sales
              </span>
              <p>
                {" "}
                <small>
                  Ensure you enter the proper information as these data are
                  critical to the inventory and sales area.
                </small>
              </p>

              <div className='mt-10 font-thin text-sm text-gray-400'>
                <svg
                  width='20'
                  height='20'
                  className='inline-block mr-2'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    opacity='0.15'
                    cx='10'
                    cy='10'
                    r='10'
                    fill='#F2C94C'
                  />
                </svg>
                Note: We take a 1.5% charge on any sale you make on our
                platform.
              </div>
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
                {fieldValues.map(
                  ({ name, placeholder, title, isNumOnly }, index) => (
                    <div key={index} className='text-left mr-2'>
                      <label className='text-sm my-2' htmlFor='Product_title'>
                        {title}
                      </label>
                      <div className='relative md:w-full mb-2 mt-2'>
                        <input
                          type='text'
                          name={name}
                          ref={register({
                            required: "Required"
                          })}
                          onChange={e => {
                            const { value } = e.target;

                            dispatch({
                              type: "updateProductForm",
                              payload: isNumOnly
                                ? value.replace(/[^0-9]/g, "")
                                : e.target.value,
                              field: name
                            });

                            return isNumOnly
                              ? (e.target.value = value.replace(/[^0-9]/g, ""))
                              : null;
                          }}
                          placeholder={placeholder}
                          className={`border ${
                            errors.name ? "border-red" : "border-black"
                          } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />

                        {errors.Product_title && (
                          <span className='error-span'>
                            {errors.Product_title?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                )}

                <label className='text-sm my-2' htmlFor='Product_title'>
                  Price
                </label>

                <Controller
                  name='price'
                  control={control}
                  defaultValue={ProductsFormAndUpdater[0].price}
                  rules={{ required: true }}
                  render={props => (
                    <NumberFormat
                      ref={register}
                      defaultValue={ProductsFormAndUpdater[0].price}
                      onChange={e => {
                        dispatch({
                          type: "updateProductForm",
                          payload: e.target.value,
                          field: "price"
                        });

                        props.onChange(e.target.value);
                      }}
                      name='price'
                      placeholder='Ex. 10,000'
                      thousandSeparator={true}
                      prefix={" ₦ "}
                      className={`border ${
                        errors.name ? "border-red" : "border-black"
                      } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                    />
                  )}
                />
              </form>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default InventorySales;
