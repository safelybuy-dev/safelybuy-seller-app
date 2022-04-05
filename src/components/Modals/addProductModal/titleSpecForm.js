import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BackArrowSVG, FowardArrowSVG } from '.';

function TitleAndSpec({
  setFirstContinueBtn,
  setSteps,
  ProductsFormAndUpdater,
  category_id,
  subcategory_id,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: ProductsFormAndUpdater[0],
  });

  const [state, dispatch] = ProductsFormAndUpdater;
  const onSubmit = async (data) => console.log(data);

  const fieldValues = [2, 5, 7].includes(subcategory_id)
    ? [
        // {
        //   title: 'Accessory Type',
        //   name: 'type',
        //   placeholder: 'Ex. iPhone Xmax',
        // },
        {
          title: 'Product Title',
          name: 'title',
          placeholder: 'Ex. iPhone Xmax',
        },
        {
          title: 'Specifications',
          name: 'specifications',
          placeholder:
            'Enter a clear and concise information about the product',
          types: [4],
        },
        {
          title: 'Weight (kg)',
          name: 'weight',
          placeholder: 'Ex. 50kg',
          types: [1, 2, 3, 4],
          isNumOnly: true,
        },
      ]
    : [
        {
          title: 'Product Title',
          name: 'title',
          placeholder: 'Ex. iPhone Xmax',
          types: [1, 2, 3, 4],
        },

        {
          title: 'RAM',
          name: 'ram_size',
          placeholder: 'Ex. 12GB',
          types: [1, 2, 3],
        },

        {
          title: 'Processor',
          name: 'processor',
          placeholder: 'Ex. Octa-core MediaTek MT6873',
          types: [1, 2, 3],
        },

        {
          title: 'Rear Camera',
          name: 'rear_camera',
          placeholder: 'Ex. 64 Megapixels',
          types: [1, 2],
        },

        {
          title: 'Front Camera',
          name: 'front_camera',
          placeholder: 'Ex. 12GB',
          types: [1, 2],
        },

        {
          title: 'Battery',
          name: 'battery',
          placeholder: 'Ex. 4300mAh',
          types: [1, 2, 3],
        },

        {
          title: 'Display',
          name: 'display',
          placeholder: 'Ex. 6.1 inches IPS LCD Display',
          types: [1, 2, 3],
        },

        {
          title:
            category_id === 3
              ? 'Internal Memory (Hard drisk size)'
              : 'Internal Memory',
          name: 'internal_memory',
          placeholder: 'Ex. 64GB',
          types: [1, 2, 3],
        },

        {
          title: 'CPU Speed',
          name: 'cpu_speed',
          placeholder: 'Ex. 2.4GHz',
          types: [1, 2, 3],
        },

        {
          title: 'Network Connectivity',
          name: 'network',
          placeholder: 'Ex. 4G LTE Network',
          types: [1, 2, 3],
        },

        {
          title: 'Operating System',
          name: 'operating_system',
          placeholder: 'Ex. Android 10',
          types: [1, 2, 3],
        },

        {
          title: 'Colour',
          name: 'colour',
          placeholder: 'Ex. Gold',
          types: [1, 2, 3],
        },
        {
          title: 'Specifications',
          name: 'specifications',
          placeholder:
            'Enter a clear and coincise information about the product',
          types: [4],
        },
        {
          title: 'Weight (kg)',
          name: 'weight',
          placeholder: 'Ex. 50kg',
          types: [1, 2, 3, 4],
          isNumOnly: true,
        },
      ];

  let formLength;
  // Phones and Tablets
  if (subcategory_id === 1 || subcategory_id === 3 || subcategory_id === 4) {
    formLength = 13;
    state.specifications = '';
  }
  // Laptops
  else if (subcategory_id === 6) {
    formLength = 11;
    state.front_camera = '';
    state.rear_camera = '';
    state.specifications = '';
  }
  // Accessories
  else {
    formLength = 3;
    state.ram_size = '';
    state.rear_camera = '';
    state.front_camera = '';
    state.battery = '';
    state.display = '';
    state.internal_memory = '';
    state.cpu_speed = '';
    state.network = '';
    state.operating_system = '';
    state.description = 'Safelybuy product';
    state.colour = '';
    state.processor = '';
  }

  const watchMe = fieldValues.map((e) => state[e.name]);
  useEffect(() => {
    if (
      Object.values(watchMe)
        .filter(Boolean)
        .filter((e) => e.trim().length).length === formLength
    ) {
      setFirstContinueBtn(true);
    } else {
      setFirstContinueBtn(false);
    }
    return () => {};
  }, [setFirstContinueBtn, watchMe, formLength]);

  return (
    <div className="flex ">
      <div className="flex w-5/12 justify-center">
        <div className="divide-y divide-light-blue-400 w-full">
          <div className="text-xs pb-2">
            <BackArrowSVG setSteps={setSteps} value={0} />
            &nbsp;&nbsp;&nbsp;
            <FowardArrowSVG
              setSteps={setSteps}
              value={
                Object.values(watchMe)
                  .filter(Boolean)
                  .filter((e) => e.trim().length).length === formLength
                  ? 2
                  : ''
              }
            />
            &nbsp;&nbsp;&nbsp; 1 <span className="text-gray-400">/ 4</span>
          </div>

          <div>
            <span className="text-safebuyColor mt-2 font-medium inline-block">
              Title and Specifications.
            </span>
            <p>
              {' '}
              <small>
                Enter a display title for your product as well as other vital
                information.
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-7/12 justify-center ">
        <div className="flex mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-96 md:max-w-7xl md:px-8">
            {[2, 5, 7].includes(subcategory_id || 80)
              ? fieldValues.map(
                  ({ name, placeholder, title, isNumOnly }, index) => (
                    <div key={index} className="text-left mr-2">
                      <label className="text-sm my-2" htmlFor="Product_title">
                        {title}
                      </label>
                      <div className="relative md:w-full mb-2 mt-2">
                        {name === 'specifications' ? (
                          <textarea
                            className={`border ${
                              errors.name ? 'border-red' : 'border-black'
                            } w-full  px-6 py-2 rounded-md focus:outline-none focus:shadow-xl`}
                            rows="4"
                            cols="50"
                            placeholder={placeholder}
                            {...register(name, { required: true })}
                            onChange={(e) => {
                              dispatch({
                                type: 'updateProductForm',
                                payload: e.target.value,
                                field: name,
                              });
                            }}
                          />
                        ) : (
                          <input
                            type="text"
                            {...register(name, { required: true })}
                            onChange={(e) => {
                              const { value } = e.target;
                              dispatch({
                                type: 'updateProductForm',
                                payload: isNumOnly
                                  ? value.replace(/[^0-9]/g, '')
                                  : e.target.value,
                                field: name,
                              });

                              return isNumOnly
                                ? (e.target.value = value.replace(
                                    /[^0-9]/g,
                                    ''
                                  ))
                                : null;
                            }}
                            placeholder={placeholder}
                            className={`border ${
                              errors.name ? 'border-red' : 'border-black'
                            } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                          />
                        )}

                        {errors.Product_title && (
                          <span className="error-span">
                            {errors.Product_title?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                )
              : fieldValues
                  .filter((e) => e.types.includes(category_id))
                  .map(({ name, placeholder, title, isNumOnly }, index) => (
                    <div key={index} className="text-left mr-2">
                      <label className="text-sm my-2" htmlFor="Product_title">
                        {title}
                      </label>
                      <div className="relative md:w-full mb-2 mt-2">
                        {name === 'specifications' ? (
                          <textarea
                            className={`border ${
                              errors.name ? 'border-red' : 'border-black'
                            } w-full  px-6 py-2 rounded-md focus:outline-none focus:shadow-xl`}
                            rows="4"
                            cols="50"
                            placeholder={placeholder}
                            {...register(name, { required: true })}
                            onChange={(e) => {
                              dispatch({
                                type: 'updateProductForm',
                                payload: e.target.value,
                                field: name,
                              });
                            }}
                          />
                        ) : (
                          <input
                            type="text"
                            {...register(name, { required: true })}
                            onChange={(e) => {
                              const { value } = e.target;
                              dispatch({
                                type: 'updateProductForm',
                                payload: isNumOnly
                                  ? value.replace(/[^0-9]/g, '')
                                  : e.target.value,
                                field: name,
                              });

                              return isNumOnly
                                ? (e.target.value = value.replace(
                                    /[^0-9]/g,
                                    ''
                                  ))
                                : null;
                            }}
                            placeholder={placeholder}
                            className={`border ${
                              errors.name ? 'border-red' : 'border-black'
                            } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                          />
                        )}

                        {errors.Product_title && (
                          <span className="error-span">
                            {errors.Product_title?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

            <div className="text-left">
              <div className="my-4 flex justify-center">
                <small className="mt-3">
                  All items filled, press “Enter” or click “Proceed” above to
                  continue. &nbsp;&nbsp;&nbsp;&nbsp;{' '}
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TitleAndSpec;
