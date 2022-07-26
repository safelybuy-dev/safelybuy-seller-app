import React, { useState, useReducer } from 'react';
import { CloseIcon, FowardSymbolSVG } from 'svg';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Button from 'components/Button';
import axios from 'axios';
import { baseUrl } from 'api';
import { BackArrowSVG, FowardArrowSVG, CameraSVG } from '../addProductModal';
import DayButton from 'components/DayButton';

function BorderImageUpload({
  title,
  containerID,
  dispatch,
  dispatchImage,
  imgSrc,
  useReducerKey,
  setMainImageUploaded,
}) {
  const loadFile = (e) => {
    if (!e.target.files.length) return;

    const reader = new FileReader();

    reader.onloadend = function () {
      dispatch({
        type: 'updateRestaurantState',
        payload: reader.result,
        field: useReducerKey,
      });

      dispatchImage({
        type: 'updateImage',
        payload: e.target.files[0],
        field: useReducerKey,
      });
    };
    reader.readAsDataURL(e.target.files[0]);

    if (useReducerKey === 'display_image') return setMainImageUploaded(true);
  };

  if (containerID === 'cover-product-img') {
  }

  return (
    <label
      className="border-2 p-4 border-gray-200 
        border-dashed  w-32 cursor-pointer
        rounded-lg block  text-center 
         mr-3  ">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="getFile"
        onChange={loadFile}
      />

      <div
        style={{ height: imgSrc ? '100px' : '0px' }}
        className={` "w-full h-1/4 m-0 rounded-full ${
          imgSrc ? 'visible' : 'invisible'
        } `}>
        <img
          className="object-cover w-full h-full"
          id={containerID}
          src={imgSrc || ''}
          alt={imgSrc ? 'product' : ''}
        />
      </div>
      {!imgSrc && <CameraSVG />}

      {!imgSrc && title}
    </label>
  );
}

function KeyValue({ title, value }) {
  return (
    <div className="flex my-3 flex-col">
      <small className="text-gray-500">{title}</small>
      <h5 className="text-lg">{value}</h5>
    </div>
  );
}

function restaurant_Reducer(state, action) {
  const { type, payload, field } = action;
  switch (type) {
    case 'updateRestaurantState':
      return {
        ...state,
        [field]: payload,
      };
    case 'addMoreDays':
      return {
        ...state,
        available_days: [...state.available_days, ''],
      };
    case 'addMoreTime':
      return {
        ...state,
        available_time: [...state.available_time, ''],
      };
    default:
      return { ...state };
  }
}

const initialImageState = {
  restaurant_image: '',
};

const imageReducer = (state, action) => {
  const { payload, field, type } = action;
  switch (type) {
    case 'updateImage':
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

function RestaurantMenuModal({
  setRestaurantMenuModal,
  id,
  isEdit,
  currentItem,
  setEdit,
}) {
  const initialState = {
    display_image: isEdit ? currentItem.display_image : '',
    available_days: isEdit ? currentItem.available_days : [],
    menu_type: isEdit ? currentItem.menu_type : '',
  };

  const [days, setDays] = useState({
    monday: isEdit
      ? currentItem.available_days.find((day) => day === 'monday')
      : '',
    tuesday: isEdit
      ? currentItem.available_days.find((day) => day === 'tuesday')
      : '',
    wednesday: isEdit
      ? currentItem.available_days.find((day) => day === 'wednesday')
      : '',
    thursday: isEdit
      ? currentItem.available_days.find((day) => day === 'thursday')
      : '',
    friday: isEdit
      ? currentItem.available_days.find((day) => day === 'friday')
      : '',
    saturday: isEdit
      ? currentItem.available_days.find((day) => day === 'saturday')
      : '',
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { addToast } = useToasts();
  const [mainImageUploaded, setMainImageUploaded] = useState(false);
  const [imageState, dispatchImage] = useReducer(
    imageReducer,
    initialImageState
  );
  const [eventData, dispatch] = useReducer(restaurant_Reducer, initialState);

  const { display_image, available_days, menu_type } = eventData;

  console.log(available_days);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: isEdit ? currentItem.name : '',
      description: isEdit ? currentItem.description : '',
      price_per_portion: isEdit ? currentItem.price_per_portion : '',
    },
  });
  const watchFields_Step1 = watch(['name', 'description', 'price_per_portion']);

  const formValuesLength_1 = Object.values(watchFields_Step1)
    .filter(Boolean)
    .filter((e) => e.trim().length).length;

  const onSubmit = () => console.log('f');

  const { name, description, price_per_portion } = getValues();

  const handleDays = (state, day) => {
    let newAvailability;
    if (!state) {
      newAvailability = [...available_days, day.toLowerCase()];
    } else {
      setDays({ ...days, [state]: '' });
      newAvailability = available_days.filter((days) => days !== day);
    }
    dispatch({
      type: 'updateRestaurantState',
      payload: newAvailability,
      field: 'available_days',
    });
  };

  const handleRestaurantCreation = async () => {
    setLoading(true);
    const data = {
      name,
      description,
      price_per_portion,
      available_days,
      menu_type,
    };

    if (isEdit) {
      data.id = currentItem.id;
    } else {
      data.restuarant_id = id;
    }

    try {
      if (imageState.display_image) {
        const cloudinaryURl =
          'https://api.cloudinary.com/v1_1/hack-sc/image/upload';
        const body = new FormData();
        body.append('file', imageState.display_image);
        body.append('upload_preset', 'events');

        const mainImageUrl = await axios.post(cloudinaryURl, body);

        data.display_image = mainImageUrl.data.secure_url;
      } else {
        data.display_image = display_image;
      }

      await axios({
        method: 'post',
        url: `${baseUrl}/api/v1/menus/${isEdit ? 'update' : 'create'}`,
        data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('safely_buy_token')}`,
        },
      });

      setLoading(false);
      history.push({
        pathname: '/success-error',
        state: {
          data: true,
          menu: true,
          path: '/food/inventory',
          isEdit,
        },
      });
    } catch (error) {
      let errorMessage;

      if (error.response && error.response.data.errors) {
        const errors = Object.values(error.response.data.errors);
        errorMessage = errors.map((error) => error[0]).join('\n');
      } else {
        errorMessage =
          error.response.data.message ||
          error.message ||
          'Something went wrong';
      }
      setLoading(false);
      addToast(errorMessage, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <div
      onClick={() => {
        setEdit(false);
        setRestaurantMenuModal(false);
      }}
      className="fixed overflow-y-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-8 left-0 bg-white opacity-100 h-full overflow-y-scroll md:overflow-visible  md:h-fit">
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">
            {step === 3 ? 'Review details' : 'Create a restaurant menu'}
            {step === 3 && (
              <div onClick={() => setStep(2)} className="text-xs pb-2">
                <BackArrowSVG setSteps={setStep} value={3} />
                &nbsp;&nbsp; Go back
              </div>
            )}
          </h3>

          <div className="">
            <span className="hidden md:inline">
              {step === 1 &&
                (formValuesLength_1 === 3 &&
                available_days.length &&
                menu_type ? (
                  <Button
                    className="focus:outline-none"
                    text="Continue"
                    canClick
                    clickHandler={() => setStep(2)}
                    primary
                    roundedFull
                    icon={<FowardSymbolSVG />}
                  />
                ) : formValuesLength_1 !== 6 ? (
                  <Button
                    className="focus:outline-none"
                    text="Continue"
                    disabled
                    roundedFull
                    icon={<FowardSymbolSVG />}
                  />
                ) : null)}

              {step === 2 &&
                (mainImageUploaded || isEdit ? (
                  <Button
                    className="focus:outline-none"
                    text="Continue"
                    canClick
                    clickHandler={() => setStep(3)}
                    primary
                    roundedFull
                    icon={<FowardSymbolSVG />}
                  />
                ) : !mainImageUploaded ? (
                  <Button
                    className="focus:outline-none"
                    text="Continue"
                    disabled
                    roundedFull
                    icon={<FowardSymbolSVG />}
                  />
                ) : null)}

              {step === 3 && loading ? (
                <Button
                  className="focus:outline-none"
                  text="Submit"
                  roundedFull
                  disabled
                  icon={<FowardSymbolSVG />}
                />
              ) : step === 3 ? (
                <Button
                  className="focus:outline-none"
                  text="Submit"
                  canClick
                  clickHandler={handleRestaurantCreation}
                  roundedFull
                  primary
                  icon={<FowardSymbolSVG />}
                />
              ) : null}
            </span>

            <span
              onClick={() => {
                setEdit(false);
                setRestaurantMenuModal(false);
              }}
              className="inline-block cursor-pointer rounded-full bg-red-500 p-3  absolute md:-right-8 right-2 top-6 md:-top-7">
              <div>
                <CloseIcon color="white" />
              </div>
            </span>
          </div>
        </div>

        {step === 1 && (
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex md:w-5/12 mb-4 justify-center">
              <div className="divide-y divide-light-blue-400 w-full">
                <div className="text-xs pb-2">
                  &nbsp;&nbsp;&nbsp; 1{' '}
                  <span className="text-gray-400">/ 2</span>
                </div>

                <div>
                  <span className="text-safebuyColor mt-2 font-medium inline-block">
                    Display Information
                  </span>
                  <p>
                    {' '}
                    <small>
                      Enter the proper information as this section will be
                      displayed to the users.
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  md:w-6/12 justify-center">
              <div className="flex">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col  md:max-w-7xl md:px-8">
                  <div className="text-left mr-2 mt-2">
                    <label className="text-sm my-2" htmlFor="menu_name">
                      Menu Name
                    </label>
                    <input
                      type="text"
                      {...register('name', {
                        required: true,
                      })}
                      placeholder="Enter Restaurant Menu"
                      className="border  border-[#E0E0E0] focus:border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                    />
                  </div>

                  <div className="mt-2">
                    <label className="text-sm my-2" htmlFor="address">
                      Menu Description
                    </label>

                    <textarea
                      className={`border ${
                        errors.name
                          ? 'border-red'
                          : 'border-[#E0E0E0] focus:border-black'
                      } w-full  px-6 py-2 rounded-md focus:outline-none focus:shadow-xl`}
                      rows="4"
                      cols="50"
                      placeholder="Description for the menu"
                      {...register('description')}
                    />
                  </div>
                  <div className="text-left mr-2 mt-2">
                    <label className="text-sm my-2" htmlFor="menu_type">
                      Menu Type
                    </label>
                    <div
                      className="border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-[1.875rem] px-6 py-2 focus:outline-none focus:shadow-xl min-h-[90px]">
                      <div className="flex items-center gap-2 w-[90%] mx-auto ">
                        <button
                          className={`
                        ${
                          menu_type === 'normal'
                            ? 'bg-purple-600 text-white'
                            : 'bg-[#c4c4c44d] text-[#828282]'
                        } py-1 px-2 mr-2 mb-2  text-sm text-whitefont-medium rounded cursor-pointer tracking-[0.04em] capitalize`}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: 'updateRestaurantState',
                              payload: 'normal',
                              field: 'menu_type',
                            });
                          }}>
                          Normal Menu
                        </button>
                        <button
                          className={`
                          ${
                            menu_type === 'swallow'
                              ? 'bg-purple-600 text-white'
                              : 'bg-[#c4c4c44d] text-[#828282]'
                          }
                          py-1 px-2 mr-2 mb-2  text-sm text-whitefont-medium rounded cursor-pointer tracking-[0.04em] capitalize`}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: 'updateRestaurantState',
                              payload: 'swallow',
                              field: 'menu_type',
                            });
                          }}>
                          Swallow Menu
                        </button>
                      </div>
                      {menu_type && (
                        <div className=" bg-[#c4c4c4] bg-opacity-20 rounded-full w-[90%] mx-auto py-2 px-6  my-4 ">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder={
                              menu_type === 'swallow'
                                ? 'price per wrap'
                                : 'price per portion'
                            }
                            className="w-full h-full outline-none bg-transparent  text-sm"
                            {...register('price_per_portion', {
                              required: true,
                            })}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-left  border-t-2 mt-5 pt-4 border-grey-600">
                    <label className="text-sm my-2" htmlFor="availability">
                      Food Availablity
                    </label>
                    <div
                      className="border border-[#E0E0E0] 
                        transition focus:border-gray-800 w-full rounded-[1.875rem] px-6 py-2 focus:outline-none focus:shadow-xl h-[90px]">
                      {[
                        'monday',
                        'tuesday',
                        'wednesday',
                        'thursday',
                        'friday',
                        'saturday',
                      ].map((day) => (
                        <DayButton
                          day={day}
                          key={day}
                          days={days}
                          setDays={setDays}
                          handleDays={handleDays}
                        />
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col md:flex-row  justify-between">
            <div className="flex md:w-5/12 mb-5 md:mb-0 px-4 justify-center">
              <div className="divide-y divide-light-blue-400 w-full">
                <div className="text-xs pb-2">
                  <BackArrowSVG setSteps={setStep} value={1} />
                  &nbsp;&nbsp;&nbsp;
                  <FowardArrowSVG
                    setSteps={setStep}
                    value={mainImageUploaded ? 3 : ''}
                    // value={main_event_ticket_image.length ? 4 : ""}
                  />
                  &nbsp;&nbsp;&nbsp; 2{' '}
                  <span className="text-gray-400">/ 2</span>
                </div>

                <div>
                  <span className="text-safebuyColor mt-2 font-medium inline-block">
                    Promotional Images
                  </span>
                  <p>
                    {' '}
                    <small>
                      Events or tickets without a main image will not appear in
                      the search or browse area unless added. Ensure the images
                      are clear, crisp, informative and appealing. Follow the
                      requirements below:
                    </small>
                  </p>

                  <ul className="list-disc mt-2 text-safebuyColor">
                    {[
                      'Preferred formats are; JPEG & TIFF',
                      'Products must fill 80% of the image.  It should only contain information about the specific event and nothing more, flyers or posters will do.',
                      'Main images should have a preferred dimension of 1200 by 600 pixels.',
                      'Images must be at least 1000 pixels and not more than 10,000 pixels.',
                    ].map((each, index) => (
                      <li key={index}>
                        <small className="text-black">{each}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex md:w-6/12 justify-center ">
              <div>
                <BorderImageUpload
                  title="Cover Image"
                  containerID="cover-product-img"
                  dispatch={dispatch}
                  imgSrc={display_image}
                  useReducerKey="display_image"
                  setMainImageUploaded={setMainImageUploaded}
                  dispatchImage={dispatchImage}
                />

                <div className="grid grid-cols-1 divide-y divide-grey-500">
                  <div className="mt-8 " />
                  <div className="mb-8" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex md:mr-4 mr-0 flex-col md:flex-row">
            <div className="flex flex-col md:w-6/12 w-full">
              <div className="border-b border-gray-100 pb-4 w-full">
                <div className="md:w-64 w-24 rounded-xl overflow-hidden md:h-32 h-24 bg-gray-200">
                  <img
                    src={display_image}
                    className="object-cover w-full h-full"
                    alt="Restaurant"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-6/12 md:ml-4 w-full">
              <div className="flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4">
                <h4 className="text-xl text-purple-500">Display Information</h4>
                <div className="flex mt-6 flex-col">
                  <div className="flex justify-between w-full">
                    <KeyValue title="Menu Name" value={name} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue title="Menu Description" value={description} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Price Per Portion"
                      value={price_per_portion}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Available Days"
                      value={available_days.join(',\t')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center mt-8 md:hidden">
          {step === 1 &&
            (formValuesLength_1 === 3 && available_days.length && menu_type ? (
              <Button
                className="focus:outline-none"
                text="Continue"
                canClick
                clickHandler={() => setStep(2)}
                primary
                roundedFull
                icon={<FowardSymbolSVG />}
              />
            ) : formValuesLength_1 !== 6 ? (
              <Button
                className="focus:outline-none"
                text="Continue"
                disabled
                roundedFull
                icon={<FowardSymbolSVG />}
              />
            ) : null)}

          {step === 2 &&
            (mainImageUploaded || isEdit ? (
              <Button
                className="focus:outline-none"
                text="Continue"
                canClick
                clickHandler={() => setStep(3)}
                primary
                roundedFull
                icon={<FowardSymbolSVG />}
              />
            ) : !mainImageUploaded ? (
              <Button
                className="focus:outline-none"
                text="Continue"
                disabled
                roundedFull
                icon={<FowardSymbolSVG />}
              />
            ) : null)}

          {step === 3 && loading ? (
            <Button
              className="focus:outline-none"
              text="Submit"
              roundedFull
              disabled
              icon={<FowardSymbolSVG />}
            />
          ) : step === 3 ? (
            <Button
              className="focus:outline-none"
              text="Submit"
              canClick
              clickHandler={handleRestaurantCreation}
              roundedFull
              primary
              icon={<FowardSymbolSVG />}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenuModal;
