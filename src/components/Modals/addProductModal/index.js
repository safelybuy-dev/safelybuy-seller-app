import React, { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { CloseIcon, FowardSymbolSVG } from 'svg';
import Button from 'components/Button';
import TitleAndSpec from './titleSpecForm';
import InventorySales from './InventorySales';
import ProductImages from './productImages';
import ProductLocation from './productLocation';
import ReviewProducts from './reviewProduct';
import axios from 'axios';
import { baseURL } from 'helpers';
import Container from 'components/Container';

export const CameraSVG = () => (
  <svg
    width='60'
    height='60'
    viewBox='0 0 50 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='inline'
  >
    <circle opacity='0.1' cx='25' cy='25' r='25' fill='#18DCFF' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.6188 20.7919C21.6725 20.7173 21.7321 20.6259 21.8081 20.5027C21.8359 20.4578 21.9116 20.3329 21.968 20.2399L21.9681 20.2397L22.0315 20.1351C22.6596 19.1078 23.1161 18.6363 23.9393 18.6363H27.7272V20.1514H23.9393C23.8736 20.1514 23.6669 20.3649 23.3243 20.9254L23.2692 21.0161L23.2692 21.0162C23.2123 21.11 23.1294 21.2468 23.0975 21.2985C23.0044 21.4494 22.927 21.568 22.8488 21.6766C22.5093 22.1487 22.1698 22.4242 21.6665 22.4242H19.3938C18.9754 22.4242 18.6362 22.7633 18.6362 23.1817V29.9999C18.6362 30.4183 18.9754 30.7575 19.3938 30.7575H31.515C31.9334 30.7575 32.2726 30.4183 32.2726 29.9999V25.4545H33.7878V29.9999C33.7878 31.2551 32.7702 32.2727 31.515 32.2727H19.3938C18.1386 32.2727 17.1211 31.2551 17.1211 29.9999V23.1817C17.1211 21.9266 18.1386 20.909 19.3938 20.909H21.5273C21.5525 20.8802 21.5834 20.8411 21.6188 20.7919ZM29.2427 22.4241V20.9089H30.7571V19.3938H32.2723V20.9089H33.7881V22.4241H32.2723V23.9392H30.7571V22.4241H29.2427Z'
      fill='#DADADA'
    />
  </svg>
);
export const BackArrowSVG = ({ setSteps, value }) => {
  return (
    <svg
      onClick={() => {
        if (value) return setSteps(value);
        if (!value && value === 0) return setSteps(0);
        if (!value) return;
      }}
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
  );
};

export const FowardArrowSVG = ({ setSteps, value }) => (
  <svg
    onClick={() => {
      if (value) return setSteps(value);
      if (!value && value === 0) return setSteps(0);
      if (!value) return;
    }}
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
);

const initialState = {
  subcategory_id: '',
  condition: '',
  brand: '',
  category_id: 1,
};

const initialProductState = {
  title: '',
  ram_size: '',
  rear_camera: '',
  front_camera: '',
  battery: '',
  display: '',
  internal_memory: '',
  cpu_speed: '',
  network: '',
  operating_system: '',
  description: 'Safelybuy product',
  colour: '',
  processor: '',

  specifications: '',
  weight: '',

  seller_sku: '',
  available: '',
  price: '',

  main_image: '',
  other_product_img_1: '',
  other_product_img_2: '',
  other_product_img_3: '',
  other_product_img_4: '',
  other_product_img_5: '',
  other_product_img_6: '',

  shipping_state: '',
  shipping_city: '',
  shipping_weight: '',
};

const initialProductImg = {
  main_image: {},
  other_product_img_1: '',
  other_product_img_2: '',
  other_product_img_3: '',
  other_product_img_4: '',
  other_product_img_5: '',
  other_product_img_6: '',
};

function productImageReducer(state, action) {
  const { type, payload, field } = action;
  switch (type) {
    case 'updateProductImage':
      return {
        ...state,
        [field]: payload,
      };
    default:
      return { ...state };
  }
}

function productReducer(state, action) {
  const { type, payload, field } = action;
  switch (type) {
    case 'updateProductForm':
      return {
        ...state,
        [field]: payload,
      };
    case 'updateProductFormShippingState':
      return {
        ...state,
        shipping_city: '',
        [field]: payload,
      };
    default:
      return { ...state };
  }
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'change-category':
      return {
        ...state,
        category_id: payload,
        subcategory_id: '',
        condition: '',
        brand: '',
      };
    case 'change-subCategory':
      return {
        ...state,
        subcategory_id: payload,
        condition: '',
        brand: '',
      };
    case 'change-condition':
      return {
        ...state,
        condition: payload,
        brand: '',
      };
    case 'change-brand':
      return {
        ...state,
        brand: payload,
      };
    default:
      return { ...state };
  }
}

const Modal = ({ selectedProduct, setSelectedProduct }) => {
  const history = useHistory();

  const [state, dispatch] = useReducer(reducer, initialState);
  const ProductsFormAndUpdater = useReducer(
    productReducer,
    initialProductState
  );

  const [product_images, dispatchProductImage] = useReducer(
    productImageReducer,
    initialProductImg
  );

  const [step, setSteps] = useState(0);
  const [enableFirstContinueBtn, setFirstContinueBtn] = useState(false);
  const [enableSecondContinueBtn, setSecondContinueBtn] = useState(false);
  const [enableThirdContinueBtn, setThirdContinueBtn] = useState(false);
  const [enableFourthContinueBtn, setFourthContinueBtn] = useState(false);
  const [enableFifthContinueBtn, setFifthContinueBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  const submitSellerProduct = async () => {
    setLoading(true);
    const {
      main_image,
      other_product_img_1,
      other_product_img_2,
      other_product_img_3,
      other_product_img_4,
      other_product_img_5,
      other_product_img_6,
    } = product_images;

    const other_images = [
      other_product_img_1,
      other_product_img_2,
      other_product_img_3,
      other_product_img_4,
      other_product_img_5,
      other_product_img_6,
    ].filter((e) => typeof e !== 'string');

    const productData = {
      ...ProductsFormAndUpdater[0],
      price: ProductsFormAndUpdater[0].price.replace(/\D/g, ''),
      main_image,
      category: state.category_id,
      subcategory: state.subcategory_id,
      brand: state.brand,
      condition: state.condition,
    };

    [
      'other_product_img_1',
      'other_product_img_2',
      'other_product_img_3',
      'other_product_img_4',
      'other_product_img_5',
      'other_product_img_6',
    ].forEach((e) => delete productData[e]);

    let body = new FormData();
    for (const [key, value] of Object.entries(productData)) {
      body.append(key, value);
    }

    for (var i = 0; i < other_images.length; i++) {
      body.append(`other_images[${i}]`, other_images[i]);
    }

    try {
      await axios({
        method: 'post',
        url: `${baseURL}/item/add`,
        data: body,
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Headers':
            'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type, x-xsrf-token',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('safely_buy_token')}`,
        },
      });
      setLoading(false);
      history.push({
        pathname: '/success-error',
        state: {
          data: true,
        },
      });
    } catch (err) {
      history.push({
        pathname: '/success-error',
        state: {
          data: false,
        },
      });
    }
  };
  const { category_id, subcategory_id, condition, brand } = state;

  const subCategoryObj = {
    1: [
      {
        value: 1,
        name: 'Phone_and_access_subcat',
        label: 'Phone',
      },
      {
        value: 2,
        name: 'Phone_and_access_subcat',
        label: 'Accessories',
      },
    ],
    2: [
      {
        value: 3,
        name: 'Ipad_tablet_access_subcat',
        label: 'Ipad',
      },
      {
        value: 4,
        name: 'Ipad_tablet_access_subcat',
        label: 'Tablets',
      },
      {
        value: 5,
        name: 'Ipad_tablet_access_subcat',
        label: 'Accessories',
      },
    ],
    4: [
      {
        value: 8,
        name: 'other_subcat',
        label: 'Power Bank',
      },
      {
        value: 9,
        name: 'other_subcat',
        label: 'Apple Watch',
      },
      {
        value: 10,
        name: 'other_subcat',
        label: 'Speaker',
      },
      {
        value: 11,
        name: 'other_subcat',
        label: 'Headphone',
      },
    ],
    3: [
      {
        value: 6,
        name: 'Laptop_access_subcat',
        label: 'Laptop',
      },
      {
        value: 7,
        name: 'Laptop_access_subcat',
        label: 'Accessories',
      },
    ],
  };

  const ModalButton = ({ able, handler }) =>
    able ? (
      <Button
        className='left-0.5 ml-auto focus:outline-none'
        canClick={true}
        clickHandler={handler}
        event='onClick'
        text={`${step === 0 ? 'Proceed' : step === 5 ? ' Submit' : 'Continue'}`}
        primary
        roundedFull
        icon={<FowardSymbolSVG />}
      />
    ) : (
      <Button
        className='left-0.5 ml-auto focus:outline-none'
        text={`${step === 0 ? 'Proceed' : 'Continue'}`}
        disabled
        roundedFull
        icon={<FowardSymbolSVG />}
      />
    );

  if (!selectedProduct) return null;

  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className='fixed overflow-y-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <Container>
        <div
          onClick={(e) => e.stopPropagation()}
          className='flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2'
        >
          <div className='flex justify-between w-full pb-10 items-start'>
            <h3 className='text-2xl'>
              {' '}
              {step === 5 ? 'Product Details' : 'Add a new product'}
            </h3>

            {!loading && step === 0 && (
              <ModalButton
                able={subcategory_id && condition && brand}
                handler={() => setSteps(1)}
              />
            )}

            {!loading && step === 1 && (
              <ModalButton
                able={enableFirstContinueBtn}
                handler={() => setSteps(2)}
              />
            )}

            {!loading && step === 2 && (
              <ModalButton
                able={enableSecondContinueBtn}
                handler={() => setSteps(3)}
              />
            )}

            {!loading && step === 3 && (
              <ModalButton
                able={enableThirdContinueBtn}
                handler={() => setSteps(4)}
              />
            )}

            {!loading && step === 4 && (
              <ModalButton
                able={enableFourthContinueBtn}
                handler={() => setSteps(5)}
              />
            )}

            {!loading && step === 5 && (
              <ModalButton
                able={enableFifthContinueBtn}
                handler={submitSellerProduct}
              />
            )}

            {loading && (
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-purple-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            )}

            <span
              onClick={() => setSelectedProduct(null)}
              className='inline-block cursor-pointer rounded-full bg-red-500 p-3  absolute -right-8 -top-7'
            >
              <CloseIcon color='white' />
            </span>
          </div>

          {step === 5 && (
            <ReviewProducts
              data={state}
              setSteps={setSteps}
              setFifthContinueBtn={setFifthContinueBtn}
              ProductsFormAndUpdater={ProductsFormAndUpdater}
            />
          )}

          {step === 4 && (
            <ProductLocation
              setSteps={setSteps}
              setFourthContinueBtn={setFourthContinueBtn}
              ProductsFormAndUpdater={ProductsFormAndUpdater}
            />
          )}

          {step === 3 && (
            <ProductImages
              setSteps={setSteps}
              product_images={product_images}
              dispatchProductImage={dispatchProductImage}
              setThirdContinueBtn={setThirdContinueBtn}
              ProductsFormAndUpdater={ProductsFormAndUpdater}
            />
          )}
          {step === 2 && (
            <InventorySales
              ProductsFormAndUpdater={ProductsFormAndUpdater}
              setSteps={setSteps}
              setSecondContinueBtn={setSecondContinueBtn}
            />
          )}
          {step === 1 && (
            <TitleAndSpec
              category_id={category_id}
              subcategory_id={subcategory_id}
              ProductsFormAndUpdater={ProductsFormAndUpdater}
              setFirstContinueBtn={setFirstContinueBtn}
              setSteps={setSteps}
            />
          )}
          {step === 0 && (
            <>
              <div className='flex mr-4 md:mr-0 md:flex-col'>
                <div className='flex flex-col  ml-4 md:w-full'>
                  <div className='flex flex-col  w-full md:ml-0 md:mt-4'>
                    <h4 className='text-xl text-purple-500'>Select category</h4>
                    <p>
                      Pick a category listed below, after completing this
                      process your product will be reviewed.
                    </p>
                    <div className='mt-6 flex col'></div>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-1 ...'>
                  <p>Category</p>
                  <ul>
                    {[
                      {
                        value: 1,
                        name: 'gadgetType',
                        label: 'Phone and Accessories',
                      },
                      {
                        value: 2,
                        name: 'gadgetType',
                        label: 'IPad, Tablet and Accessories',
                      },
                      {
                        value: 3,
                        name: 'gadgetType',
                        label: 'Laptop and Accessories',
                      },
                      {
                        value: 4,
                        name: 'gadgetType',
                        label: 'Other Gadgets',
                      },
                    ].map((each, index) => (
                      <li
                        key={index}
                        className='cursor-pointer'
                        onClick={() => {
                          dispatch({
                            type: 'change-category',
                            payload: each.value,
                          });
                        }}
                      >
                        <input
                          onChange={(e) => {}}
                          checked={each.value === category_id}
                          className='m-2 cursor-pointer'
                          type='radio'
                          value={each.value}
                          name={each.name}
                        />
                        <small>{each.label}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex-1 border-l-2 p-3'>
                  <p>Sub-category</p>
                  <ul>
                    {subCategoryObj[category_id].map((each, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          dispatch({
                            type: 'change-subCategory',
                            payload: each.value,
                          });
                        }}
                        className='cursor-pointer'
                      >
                        <input
                          onChange={(e) => {}}
                          checked={each.value === subcategory_id}
                          className='m-2'
                          type='radio'
                          value={each.value}
                          name={each.name}
                        />
                        <small>{each.label}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex-1 border-l-2 p-3'>
                  <p>Condition</p>
                  <ul>
                    {[
                      {
                        value: 'New',
                        name: 'condition',
                        label: 'New',
                      },
                      {
                        value: 'Used',
                        name: 'condition',
                        label: 'Used',
                      },
                    ].map((each, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          dispatch({
                            type: 'change-condition',
                            payload: each.value,
                          });
                        }}
                        className='cursor-pointer'
                      >
                        <input
                          onChange={(e) => {}}
                          checked={each.value === condition}
                          className='m-2'
                          type='radio'
                          value={each.value}
                          name={each.name}
                        />
                        <small>{each.label}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex-1 ... border-l-2 p-3'>
                  <p>Brand</p>
                  <ul>
                    {[
                      {
                        value: 'Apple',
                        name: 'brand',
                        label: 'Apple',
                      },
                      {
                        value: 'Samsung',
                        name: 'brand',
                        label: 'Samsung',
                      },
                      ...(category_id === 3
                        ? [
                            {
                              value: 'Hp',
                              name: 'laptop_access_brand',
                              label: 'Hp',
                            },
                            {
                              value: 'Lenovo',
                              name: 'laptop_access_brand',
                              label: 'Lenovo',
                            },
                          ]
                        : []),
                      ...(category_id === 4
                        ? [
                            {
                              value: 'JBL',
                              name: 'other_brand',
                              label: 'JBL',
                            },
                          ]
                        : []),
                    ].map((each, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          dispatch({
                            type: 'change-brand',
                            payload: each.value,
                          });
                        }}
                        className='cursor-pointer'
                      >
                        <input
                          onChange={(e) => {}}
                          checked={each.value === brand}
                          className='m-2'
                          type='radio'
                          value={each.value}
                          name={each.name}
                        />
                        <small>{each.label}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Modal;
