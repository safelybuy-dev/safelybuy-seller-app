import React, { useState, useReducer } from 'react';
import { CloseIcon, FowardSymbolSVG } from 'svg';
import { useForm, Controller } from 'react-hook-form';
import Button from 'components/Button';
import { BackArrowSVG, FowardArrowSVG, CameraSVG } from '../addProductModal';
import NumberFormat from 'react-number-format';

const BorderImageUpload = ({
  title,
  containerID,
  dispatch,
  imgSrc,
  useReducerKey,
  setMainImageUploaded,
}) => {
  const loadFile = (e) => {
    if (!e.target.files.length) return;

    const reader = new FileReader();

    reader.onloadend = function () {
      dispatch({
        type: 'updateTicketEventState',
        payload: reader.result,
        field: useReducerKey,
      });
    };
    reader.readAsDataURL(e.target.files[0]);

    if (useReducerKey === 'main_event_ticket_image')
      return setMainImageUploaded(true);
  };

  if (containerID === 'cover-product-img') {
  }

  return (
    <label
      className='border-2 p-4 border-gray-200 
        border-dashed  w-32 cursor-pointer
        rounded-lg block  text-center 
         mr-3  '
    >
      <input
        type='file'
        accept='.png, .jpg, .jpeg'
        id='getFile'
        onChange={loadFile}
      />

      <div
        style={{ height: imgSrc ? '100px' : '0px' }}
        className={` "w-full h-1/4 m-0 rounded-full ${
          imgSrc ? 'visible' : 'invisible'
        } `}
      >
        <img
          className={`object-cover w-full h-full`}
          id={containerID}
          src={imgSrc ? imgSrc : ''}
          alt={imgSrc ? 'product' : ''}
        />
      </div>
      {!imgSrc && <CameraSVG />}

      {!imgSrc && title}
    </label>
  );
};

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col'>
    <small className='text-gray-500'>{title}</small>
    <h5 className='text-lg'>{value}</h5>
  </div>
);

const initialState = {
  category: '',
  title: '',
  details: '',
  event_date: '',
  event_time: '',
  location: '',
  listing_number: '',
  available: 0,
  main_event_ticket_image: '',
  other_event_ticket_image_1: '',
  other_event_ticket_image_2: '',
  other_event_ticket_image_3: '',
  event_images: [],
  event_seat_type: '',
  event_available_seat: '',
  event_seat_price: '',
};

function event_Ticket_Reducer(state, action) {
  const { type, payload, field } = action;
  switch (type) {
    case 'updateTicketEventState':
      return {
        ...state,
        [field]: payload,
      };
    default:
      return { ...state };
  }
}

const TicketModal = ({ openTicketModal, setTicketModal }) => {
  const [step, setStep] = useState(1);
  const [mainImageUploaded, setMainImageUploaded] = useState(false);

  const [eventData, dispatch] = useReducer(event_Ticket_Reducer, initialState);

  const {
    category,
    title,
    details,
    event_date,
    event_time,
    location,
    listing_number,
    available,
    event_seats,
    event_seat_price,
    main_event_ticket_image,
    other_event_ticket_image_1,
    other_event_ticket_image_2,
    other_event_ticket_image_3,
  } = eventData;

  // console.log(category, title, details, event_date, event_time, location);

  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues: {
      category,
      title: '',
      details,
      event_date,
      event_time,
      location,

      event_available_seat: '',
      event_images: [],
      event_seat_price: '',
      event_seat_type: '',
      listing_number: '',
      main_event_ticket_image: '',
      other_event_ticket_image_1: '',
      other_event_ticket_image_2: '',
      other_event_ticket_image_3: '',
    },
  });

  const watchFields_Step1 = watch([
    'category',
    'title',
    'details',
    'event_date',
    'event_time',
    'location',
  ]);

  const watchFields_Step2 = watch([
    'listing_number',
    'event_seat_price',
    'event_available_seat',
    'event_seat_type',
  ]);

  const formValuesLength_1 = Object.values(watchFields_Step1)
    .filter(Boolean)
    .filter((e) => e.trim().length).length;

  const formValuesLength_2 = Object.values(watchFields_Step2)
    .filter(Boolean)
    .filter((e) => e.trim().length).length;

  const onSubmit = () => console.log('f');

  if (!openTicketModal) return null;

  return (
    <div
      onClick={() => setTicketModal(null)}
      className='fixed overflow-scroll top-0 left-0 z-50 w-screen py-40 px-40 md:py-0 md:px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2'
      >
        <div className='flex justify-between w-full pb-10 items-start'>
          <h3 className='text-2xl'>
            {step === 4 ? 'Review details' : 'Create a ticket or an event'}
            {step === 4 && (
              <div onClick={() => setStep(3)} className='text-xs pb-2'>
                <BackArrowSVG setSteps={setStep} value={3} />
                &nbsp;&nbsp; Go back
              </div>
            )}
          </h3>

          <div className=''>
            {step === 1 &&
              (formValuesLength_1 === 6 ? (
                <Button
                  className='focus:outline-none'
                  text='Continue'
                  canClick={true}
                  clickHandler={() => setStep(2)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                /> // if
              ) : formValuesLength_1 !== 6 ? (
                <Button
                  className='focus:outline-none'
                  text='Continue'
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}

            {step === 2 &&
              (formValuesLength_2 === 4 ? (
                <Button
                  className='focus:outline-none'
                  text='Continue'
                  canClick={true}
                  clickHandler={() => setStep(3)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : formValuesLength_2 !== 4 ? (
                <Button
                  className='focus:outline-none'
                  text='Continue'
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}

            {step === 3 &&
              (mainImageUploaded ? (
                <Button
                  className='focus:outline-none'
                  text='Continue'
                  canClick={true}
                  clickHandler={() => setStep(4)}
                  primary
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : !mainImageUploaded ? (
                <Button
                  className='focus:outline-none'
                  text='Continue'
                  disabled
                  roundedFull
                  icon={<FowardSymbolSVG />}
                />
              ) : null)}

            <span
              onClick={() => setTicketModal(null)}
              className='inline-block cursor-pointer rounded-full bg-red-500 p-3  absolute -right-8 -top-7'
            >
              <div>
                <CloseIcon color='white' />
              </div>
            </span>
          </div>
        </div>

        {step === 1 && (
          <>
            <div className='flex '>
              <div className='flex w-5/12 justify-center'>
                <div className='divide-y divide-light-blue-400 w-full'>
                  <div className='text-xs pb-2'>
                    &nbsp;&nbsp;&nbsp; 1{' '}
                    <span className='text-gray-400'>/ 3</span>
                  </div>

                  <div>
                    <span className='text-safebuyColor mt-2 font-medium inline-block'>
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

              <div className='flex w-7/12 justify-center'>
                <>
                  <div className='flex'>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='flex flex-col  md:max-w-7xl md:px-8'
                    >
                      <div className='text-left mr-2'>
                        <label className='text-sm my-2' htmlFor='email'>
                          Event Category
                        </label>
                        <div className='relative md:w-full mb-2 mt-2'>
                          <select
                            onChange={(e) => {
                              dispatch({
                                type: 'updateTicketEventState',
                                payload: e.target.value,
                                field: 'category',
                              });
                            }}
                            className='border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                            name='category'
                            ref={register}
                          >
                            <option value='' disabled selected>
                              Select Category
                            </option>
                            {['Concerts', 'Tickets'].map((e, i) => (
                              <option key={i} value={e}>
                                {e}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className='text-left mr-2 mt-2'>
                        <label className='text-sm my-2' htmlFor='Product_title'>
                          Event Title
                        </label>
                        <input
                          type='text'
                          name='title'
                          onChange={(e) => {
                            dispatch({
                              type: 'updateTicketEventState',
                              payload: e.target.value,
                              field: 'title',
                            });
                          }}
                          ref={register}
                          placeholder='Live Concert'
                          className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>

                      <div className='mt-2'>
                        <label className='text-sm my-2' htmlFor='Product_title'>
                          Event Details
                        </label>

                        <textarea
                          className={`border ${
                            errors.name ? 'border-red' : 'border-black'
                          } w-full  px-6 py-2 rounded-md focus:outline-none focus:shadow-xl`}
                          rows='4'
                          cols='50'
                          name='details'
                          placeholder='Enter a clear and coincise information about the event'
                          onChange={(e) => {
                            dispatch({
                              type: 'updateTicketEventState',
                              payload: e.target.value,
                              field: 'details',
                            });
                          }}
                          ref={register({
                            required: 'Required',
                          })}
                        ></textarea>
                      </div>

                      <div className='text-left mr-2 mt-2'>
                        <label className='text-sm my-2' htmlFor='Product_title'>
                          Event Date
                        </label>
                        <input
                          type='date'
                          name='event_date'
                          onChange={(e) => {
                            dispatch({
                              type: 'updateTicketEventState',
                              payload: e.target.value,
                              field: 'event_date',
                            });
                          }}
                          ref={register({
                            required: 'Required',
                          })}
                          placeholder='Enter date'
                          className={`border border-black
                           w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>

                      <div className='text-left mr-2 mt-2'>
                        <label className='text-sm my-2' htmlFor='Product_title'>
                          Event time
                        </label>
                        <input
                          type='time'
                          name='event_time'
                          onChange={(e) => {
                            dispatch({
                              type: 'updateTicketEventState',
                              payload: e.target.value,
                              field: 'event_time',
                            });
                          }}
                          ref={register({
                            required: 'Required',
                          })}
                          placeholder='Enter event time'
                          className={`border 
                             border-black
                           w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>

                      <div className='text-left mr-2 mt-2'>
                        <label className='text-sm my-2' htmlFor='Product_title'>
                          Event Location
                        </label>
                        <input
                          type='text'
                          name='location'
                          onChange={(e) => {
                            dispatch({
                              type: 'updateTicketEventState',
                              payload: e.target.value,
                              field: 'location',
                            });
                          }}
                          ref={register({
                            required: 'Required',
                          })}
                          placeholder='Enter event location'
                          className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                        />
                      </div>
                    </form>
                  </div>
                </>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className='flex '>
            <div className='flex w-5/12 justify-center'>
              <div className='divide-y divide-light-blue-400 w-full'>
                <div className='text-xs pb-2'>
                  <BackArrowSVG setSteps={setStep} value={1} />
                  &nbsp;&nbsp;&nbsp;
                  <FowardArrowSVG
                    setSteps={setStep}
                    value={formValuesLength_2 === 4 ? 3 : ''}
                  />
                  &nbsp;&nbsp;&nbsp; 2{' '}
                  <span className='text-gray-400'>/ 3</span>
                </div>

                <div>
                  <span className='text-safebuyColor mt-2 font-medium inline-block'>
                    Listing Number & Seats
                  </span>
                  <p>
                    {' '}
                    <small>
                      Ensure you enter the proper information as these data are
                      critical to selling and keeping track of the tickets.
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
                <div className='flex'>
                  <form className='flex flex-col md:max-w-7xl md:px-8'>
                    <div className='text-left  mt-8 mb-8'>
                      <label className='text-sm my-2' htmlFor='evevt'>
                        Listing Number
                      </label>
                      <input
                        type='text'
                        name='listing_number'
                        onChange={(e) => {
                          dispatch({
                            type: 'updateTicketEventState',
                            payload: e.target.value,
                            field: 'listing_number',
                          });
                        }}
                        ref={register({
                          required: 'Required',
                        })}
                        placeholder='Ex. 2322-23332-322'
                        className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                      />
                    </div>

                    <div className='text-left  border-t-2 border-grey-600'>
                      <h3 className='my-4'>Seat Category</h3>

                      <div className='flex flex-row justify-between'>
                        <div className='mr-2'>
                          <label className='text-sm my-2' htmlFor='email'>
                            Seat type
                          </label>
                          <div className='relative md:w-full mb-2 mt-2'>
                            <select
                              onChange={(e) => {
                                dispatch({
                                  type: 'updateTicketEventState',
                                  payload: e.target.value,
                                  field: 'event_seat_type',
                                });
                              }}
                              className='border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl'
                              name='event_seat_type'
                              ref={register}
                            >
                              <option value='' disabled selected>
                                Select Category
                              </option>
                              {[
                                'Regular',
                                'VVIP',
                                'Table for 2',
                                'Table for 6',
                              ].map((e, i) => (
                                <option key={i} value={e}>
                                  {e}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className='mr-2'>
                          <label className='text-sm my-2' htmlFor='email'>
                            Seat Price (NGN)
                          </label>
                          <div className='relative md:w-full mb-2 mt-2'>
                            <Controller
                              name='event_seat_price'
                              control={control}
                              defaultValue={event_seat_price}
                              rules={{ required: true }}
                              render={(props) => (
                                <NumberFormat
                                  ref={register}
                                  defaultValue={event_seat_price}
                                  onChange={(e) => {
                                    dispatch({
                                      type: 'updateTicketEventState',
                                      payload: e.target.value,
                                      field: 'event_seat_price',
                                    });
                                    props.onChange(e.target.value);
                                  }}
                                  name='event_seat_price'
                                  placeholder='Ex. 10,000'
                                  thousandSeparator={true}
                                  prefix={' ₦ '}
                                  className={`border ${
                                    errors.name ? 'border-red' : 'border-black'
                                  } w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div>
                          <label className='text-sm my-2' htmlFor='email'>
                            Available Seats
                          </label>
                          <div className='relative md:w-full mb-2 mt-2'>
                            <input
                              type='number'
                              onKeyDown={(e) => {
                                if (['-', '+', 'e'].includes(e.key)) {
                                  e.preventDefault();
                                }
                              }}
                              name='event_available_seat'
                              onChange={(e) => {
                                dispatch({
                                  type: 'updateTicketEventState',
                                  payload: e.target.value,
                                  field: 'event_available_seat',
                                });
                              }}
                              ref={register({
                                required: 'Required',
                              })}
                              placeholder='Available Seats'
                              className={`border border-black w-full rounded-full px-6 py-2 focus:outline-none focus:shadow-xl`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ background: 'rgba(134, 97, 255, 0.15)' }}
                      className='p-5 border-dashed border-4 border-purple-500 rounded-3xl mt-5 text-center cursor-pointer'
                    >
                      Add a new seat category
                    </div>
                  </form>
                </div>
              </>
            </div>
          </div>
        )}

        {step === 3 && (
          <>
            <div className='flex '>
              <div className='flex w-5/12 justify-center'>
                <div className='divide-y divide-light-blue-400 w-full'>
                  <div className='text-xs pb-2'>
                    <BackArrowSVG setSteps={setStep} value={2} />
                    &nbsp;&nbsp;&nbsp;
                    <FowardArrowSVG
                      setSteps={setStep}
                      value={mainImageUploaded ? 4 : ''}
                      // value={main_event_ticket_image.length ? 4 : ""}
                    />
                    &nbsp;&nbsp;&nbsp; 3{' '}
                    <span className='text-gray-400'>/ 3</span>
                  </div>

                  <div>
                    <span className='text-safebuyColor mt-2 font-medium inline-block'>
                      Promotional Images
                    </span>
                    <p>
                      {' '}
                      <small>
                        Events or tickets without a main image will not appear
                        in the search or browse area unless added. Ensure the
                        images are clear, crisp, informative and appealing.
                        Follow the requirements below:
                      </small>
                    </p>

                    <ul className='list-disc mt-2 text-safebuyColor'>
                      {[
                        'Preferred formats are; JPEG & TIFF',
                        'Products must fill 80% of the image.  It should only contain information about the specific event and nothing more, flyers or posters will do.',
                        'Main images should have a preferred dimension of 1200 by 600 pixels.',
                        'Images must be at least 1000 pixels and not more than 10,000 pixels.',
                      ].map((each, index) => (
                        <li key={index}>
                          <small className='text-black'>{each}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex w-7/12 justify-center '>
                <div>
                  <BorderImageUpload
                    title='Cover Image'
                    containerID='cover-product-img'
                    dispatch={dispatch}
                    imgSrc={main_event_ticket_image}
                    useReducerKey='main_event_ticket_image'
                    setMainImageUploaded={setMainImageUploaded}
                  />

                  <div className='grid grid-cols-1 divide-y divide-grey-500'>
                    <div className='mt-8 '></div>
                    <div className='mb-8'></div>
                  </div>
                  <div className='flex mt-5'>
                    {[
                      {
                        name: 'other_event_ticket_image_1',
                        value: other_event_ticket_image_1,
                      },
                      {
                        name: 'other_event_ticket_image_2',
                        value: other_event_ticket_image_2,
                      },
                      {
                        name: 'other_event_ticket_image_3',
                        value: other_event_ticket_image_3,
                      },
                    ].map(({ name, value }, index) => (
                      <BorderImageUpload
                        key={index}
                        title='Other Image'
                        dispatch={dispatch}
                        containerID={name}
                        imgSrc={value}
                        useReducerKey={name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div className='flex mr-4 md:mr-0 md:flex-col'>
            <div className='flex flex-col w-6/12 md:w-full'>
              <div className='border-b border-gray-100 pb-4 w-full'>
                <div className='w-64 md:w-24 rounded-xl h-32 md:h-24 bg-gray-200'>
                  <img
                    src={main_event_ticket_image}
                    className={`object-cover w-full h-full`}
                  />
                </div>
              </div>
              <div className='flex flex-wrap'>
                <div className='w-32 md:w-24 rounded-xl mt-4 mr-4 h-32 md:h-24 bg-gray-200'>
                  {other_event_ticket_image_1 && (
                    <img
                      src={other_event_ticket_image_1}
                      className={`object-cover w-full h-full`}
                    />
                  )}
                </div>
                <div className='w-32 md:w-24 rounded-xl mt-4 mr-4 h-32 md:h-24 bg-gray-200'>
                  {other_event_ticket_image_2 && (
                    <img
                      src={other_event_ticket_image_2}
                      className={`object-cover w-full h-full`}
                    />
                  )}
                </div>
                <div className='w-32 md:w-24 rounded-xl mt-4 mr-4 h-32 md:h-24 bg-gray-200'>
                  {other_event_ticket_image_3 && (
                    <img
                      src={other_event_ticket_image_3}
                      className={`object-cover w-full h-full`}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col w-6/12 ml-4 md:w-full'>
              <div className='flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4'>
                <h4 className='text-xl text-purple-500'>Display Information</h4>
                <div className='flex mt-6 flex-col'>
                  <div className='flex justify-between w-full'>
                    <KeyValue title='Event Category' value={category} />
                    <KeyValue title='Event Title' value={title} />
                  </div>
                  <div className='flex justify-between w-full'>
                    <KeyValue title='Event Details' value={details} />
                  </div>
                  <div className='flex justify-between w-full'>
                    <KeyValue
                      title='Event Date/Time'
                      value={`${event_date}  ${event_time}`}
                    />
                    <KeyValue title='Event Location' value={location} />
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-full pt-4 md:ml-0 md:mt-4'>
                <h4 className='text-xl text-purple-500'>
                  Ticket Number & Seats
                </h4>
                <div className='flex mt-6 flex-col'>
                  <KeyValue title='Listing Number' value={listing_number} />
                  <h5 className='text-lg'>Seat Category</h5>
                  <div className='flex border-b justify-between w-full'>
                    <KeyValue title='Seat Type' value='Regular' />
                    <KeyValue title='Seat Price' value='5,000NGN' />
                    <KeyValue title='Available Seats' value='5,000' />
                  </div>
                  <div className='flex border-b justify-between w-full'>
                    <KeyValue title='Seat Type' value='VVIP' />
                    <KeyValue title='Seat Price' value='15,000NGN' />
                    <KeyValue title='Available Seats' value='5,000' />
                  </div>
                  <div className='flex border-b justify-between w-full'>
                    <KeyValue title='Seat Type' value='Table for 2' />
                    <KeyValue title='Seat Price' value='30,000NGN' />
                    <KeyValue title='Available Seats' value='5,000' />
                  </div>
                  <div className='flex justify-between w-full'>
                    <KeyValue title='Seat Type' value='Table for 6' />
                    <KeyValue title='Seat Price' value='50,000NGN' />
                    <KeyValue title='Available Seats' value='5,000' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketModal;
