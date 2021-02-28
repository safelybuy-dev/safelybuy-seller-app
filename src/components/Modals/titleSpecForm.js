import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BackArrowSVG, FowardArrowSVG } from "./productModal";

const TitleAndSpec = ({
  setFirstContinueBtn,
  setSteps,
  ProductsFormAndUpdater,
  categoryOptions
}) => {
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: ProductsFormAndUpdater[0]
  });

  const [state, dispatch] = ProductsFormAndUpdater;
  const onSubmit = async data => console.log(data);


  const fieldValues = [
    {
      title: "Product Title",
      name: "Product_title",
      placeholder: "Ex. iPhone Xmax",
      types: "phone_access, ipad_tablet_access, laptop_access, other"
    },

    {
      title: "RAM",
      name: "ram",
      placeholder: "Ex. 12GB",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "Processor",
      name: "Processor",
      placeholder: "Ex. Octa-core MediaTek MT6873",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "Rear Camera",
      name: "RearCamera",
      placeholder: "Ex. 64 Megapixels",
      types: "phone_access, ipad_tablet_access"
    },

    {
      title: "Front Camera",
      name: "FrontCamera",
      placeholder: "Ex. 12GB",
      types: "phone_access, ipad_tablet_access"
    },

    {
      title: "Battery",
      name: "Battery",
      placeholder: "Ex. 4300mAh",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "Display",
      name: "Display",
      placeholder: "Ex. 6.1 inches IPS LCD Display",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title:
        categoryOptions === "laptop_access"
          ? "Internal Memory (Hard drisk size)"
          : "Internal Memory",
      name: "InternalMemory",
      placeholder: "Ex. 64GB",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "CPU Speed",
      name: "CPUSpeed",
      placeholder: "Ex. 2.4GHz",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "Network Connectivity",
      name: "NetworkConnectivity",
      placeholder: "Ex. 4G LTE Network",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "Operating System",
      name: "OperatingSystem",
      placeholder: "Ex. Android 10",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },

    {
      title: "Colour",
      name: "Colour",
      placeholder: "Ex. Gold",
      types: "phone_access, ipad_tablet_access, laptop_access"
    },
    {
      title: "Specifications",
      name: "Specification",
      placeholder: "Enter a clear and coincise information about the product",
      types: "other"
    },
    {
      title: "Weight (kg)",
      name: "Weight",
      placeholder: "Ex. 50kg",
      types: "phone_access, ipad_tablet_access, laptop_access, other"
    }
  ];

  let formLength;
  if (categoryOptions === "laptop_access") {
    formLength = 11;
  }
  if (categoryOptions === "phone_access") {
    formLength = 13;
  }

  if (categoryOptions === "ipad_tablet_access") {
    formLength = 13;
  }

  if (categoryOptions === "other") {
    formLength = 3;
  }

  const watchFields = watch(fieldValues.map(e => e.name));
  useEffect(() => {
    if (
      Object.values(watchFields)
        .filter(Boolean)
        .filter(e => e.trim().length).length === formLength
    ) {
      setFirstContinueBtn(true);
    } else {
      setFirstContinueBtn(false);
    }
    return () => {};
  }, [setFirstContinueBtn, watchFields,  formLength]);

  return (
    <>
      <div className='flex '>
        <div className='flex w-5/12 justify-center'>
          <div className='divide-y divide-light-blue-400 w-full'>
            <div className='text-xs pb-2'>
              <BackArrowSVG setSteps={setSteps} value={0} />
              &nbsp;&nbsp;&nbsp;
              <FowardArrowSVG
                setSteps={setSteps}
                value={
                  Object.values(watchFields)
                    .filter(Boolean)
                    .filter(e => e.trim().length).length === formLength
                    ? 2
                    : ""
                }
              />
              &nbsp;&nbsp;&nbsp; 1 <span className='text-gray-400'>/ 4</span>
            </div>

            <div>
              <span className='text-safebuyColor mt-2 font-medium inline-block'>
                Title and Specifications.
              </span>
              <p>
                {" "}
                <small>
                  Enter a display title for your product as well as other vital
                  information.
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
                {fieldValues
                  .filter(e => e.types.includes(categoryOptions))
                  .map(({ name, placeholder, title }, index) => (
                    <div key={index} className='text-left mr-2'>
                      <label className='text-sm my-2' htmlFor='Product_title'>
                        {title}
                      </label>
                      <div className='relative md:w-full mb-2 mt-2'>
                        {name === "Specification" ? (
                          <textarea
                            className={`border ${
                              errors.name ? "border-red" : "border-black"
                            } w-full  px-6 py-2 rounded-md focus:outline-none focus:shadow-xl`}
                            rows='4'
                            cols='50'
                            placeholder={placeholder}
                            name={name}
                            onChange={e => {
                              dispatch({
                                type: "updateProductForm",
                                payload: e.target.value,
                                field: name
                              });
                            }}
                            ref={register({
                              required: "Required"
                            })}
                          ></textarea>
                        ) : (
                          <input
                            type='text'
                            name={name}
                            onChange={e => {
                              dispatch({
                                type: "updateProductForm",
                                payload: e.target.value,
                                field: name
                              });
                            }}
                            ref={register({
                              required: "Required"
                            })}
                            placeholder={placeholder}
                            className={`border ${
                              errors.name ? "border-red" : "border-black"
                            } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                          />
                        )}

                        {errors.Product_title && (
                          <span className='error-span'>
                            {errors.Product_title?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                <div className='text-left'>
                  <div className='my-4 flex justify-center'>
                    <small className='mt-3'>
                      All items filled, press “Enter” or click “Proceed” above
                      to continue. &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    </small>
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

export default TitleAndSpec;
