import React, { useState, useReducer } from "react";
import { CloseIcon, FowardSymbolSVG } from "../../svg";
import Button from "../../components/Button";
import TitleAndSpec from "./titleSpecForm";
import InventorySales from "./InventorySales";
import ProductImages from "./productImages";
import ProductLocation from "./ProductLocation";
// const KeyValue = ({ title, value }) => (
//   <div className='flex my-3 flex-col'>
//     <small className='text-gray-500'>{title}</small>
//     <h5 className='text-lg'>{value}</h5>
//   </div>
// );


export const CameraSVG  = () => (
  <svg
  width="60"
  height="60"
  viewBox="0 0 50 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="inline"
>
  <circle opacity="0.1" cx="25" cy="25" r="25" fill="#18DCFF" />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M21.6188 20.7919C21.6725 20.7173 21.7321 20.6259 21.8081 20.5027C21.8359 20.4578 21.9116 20.3329 21.968 20.2399L21.9681 20.2397L22.0315 20.1351C22.6596 19.1078 23.1161 18.6363 23.9393 18.6363H27.7272V20.1514H23.9393C23.8736 20.1514 23.6669 20.3649 23.3243 20.9254L23.2692 21.0161L23.2692 21.0162C23.2123 21.11 23.1294 21.2468 23.0975 21.2985C23.0044 21.4494 22.927 21.568 22.8488 21.6766C22.5093 22.1487 22.1698 22.4242 21.6665 22.4242H19.3938C18.9754 22.4242 18.6362 22.7633 18.6362 23.1817V29.9999C18.6362 30.4183 18.9754 30.7575 19.3938 30.7575H31.515C31.9334 30.7575 32.2726 30.4183 32.2726 29.9999V25.4545H33.7878V29.9999C33.7878 31.2551 32.7702 32.2727 31.515 32.2727H19.3938C18.1386 32.2727 17.1211 31.2551 17.1211 29.9999V23.1817C17.1211 21.9266 18.1386 20.909 19.3938 20.909H21.5273C21.5525 20.8802 21.5834 20.8411 21.6188 20.7919ZM29.2427 22.4241V20.9089H30.7571V19.3938H32.2723V20.9089H33.7881V22.4241H32.2723V23.9392H30.7571V22.4241H29.2427Z"
    fill="#DADADA"
  />
</svg>
)
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
  categoryOptions: "phone_access",
  subCategory: "",
  condition: "",
  brand: ""
};


const initialProductState = {
  Product_title: "",
  ram: "",
  RearCamera: "",
  FrontCamera: "",
  Battery: "",
  Display: "",
  InternalMemory: "",
  CPUSpeed: "",
  NetworkConnectivity: "",
  OperatingSystem: "",
  Colour: "",
  Weight: "",
  Processor: "",
  Specification: "",
  seller_sku: "",
  quantity: "",
  price: "",
  main_image: "",
};

function productReducer(state, action) {
  const { type, payload, field } = action;
  switch (type) {
    case "updateProductForm":
      return {
        ...state,
        [field]: payload
      };
    default:
      return { ...state };
  }
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "change-category":
      return {
        ...state,
        categoryOptions: payload,
        subCategory: "",
        condition: "",
        brand: ""
      };
    case "change-subCategory":
      return { ...state, subCategory: payload, condition: "", brand: "" };
    case "change-condition":
      return { ...state, condition: payload, brand: "" };
    case "change-brand":
      return { ...state, brand: payload };
    default:
      return { ...state };
  }
}

const Modal = ({ selectedProduct, setSelectedProduct }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ProductsFormAndUpdater = useReducer(
    productReducer,
    initialProductState
  );

  const { categoryOptions, subCategory, condition, brand } = state;
  const [step, setSteps] = useState(3);
  const [enableFirstContinueBtn, setFirstContinueBtn] = useState(false);
  const [enableSecondContinueBtn, setSecondContinueBtn] = useState(false);
  const [enableThirdContinueBtn, setThirdContinueBtn] = useState(false);
  const [enableFourthContinueBtn, setFourthContinueBtn] = useState(false);

  const subCategoryObj = {
    phone_access: [
      {
        value: "Phone",
        name: "Phone_and_access_subcat",
        label: "Phone"
      },
      {
        value: "Accessories",
        name: "Phone_and_access_subcat",
        label: "Accessories"
      }
    ],
    ipad_tablet_access: [
      {
        value: "Ipad",
        name: "Ipad_tablet_access_subcat",
        label: "Ipad"
      },
      {
        value: "Tablets",
        name: "Ipad_tablet_access_subcat",
        label: "Tablets"
      },
      {
        value: "Accessories",
        name: "Ipad_tablet_access_subcat",
        label: "Accessories"
      }
    ],
    other: [
      {
        value: "Power Bank",
        name: "other_subcat",
        label: "Power Bank"
      },
      {
        value: "Apple Watch",
        name: "other_subcat",
        label: "Apple Watch"
      },
      {
        value: "Speaker",
        name: "other_subcat",
        label: "Speaker"
      },
      {
        value: "Headphone",
        name: "other_subcat",
        label: "Headphone"
      }
    ],
    laptop_access: [
      {
        value: "Laptop",
        name: "Laptop_access_subcat",
        label: "Laptop"
      },
      {
        value: "Accessories",
        name: "Laptop_access_subcat",
        label: "Accessories"
      }
    ]
  };

  const ModalButton = ({ able, handler }) =>
    able ? (
      <Button
        className='left-0.5 ml-auto focus:outline-none'
        canClick={true}
        clickHandler={handler}
        event='onClick'
        text={`${step === 0 ? "Proceed" : "Continue"}`}
        primary
        roundedFull
        icon={<FowardSymbolSVG />}
      />
    ) : (
      <Button
        className='left-0.5 ml-auto focus:outline-none'
        text={`${step === 0 ? "Proceed" : "Continue"}`}
        disabled
        roundedFull
        icon={<FowardSymbolSVG />}
      />
    );

  if (!selectedProduct) return null;


  console.log(ProductsFormAndUpdater[0])

  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className='fixed overflow-scroll top-0 left-0 z-50 w-screen py-40 px-40 md:py-0 md:px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <div
        onClick={e => e.stopPropagation()}
        className='flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2'
      >
        <div className='flex justify-between w-full pb-10 items-start'>
          <h3 className='text-2xl'>Add a new product</h3>

          {step === 0 && (
            <ModalButton
              able={subCategory && condition && brand}
              handler={() => setSteps(1)}
            />
          )}

          {step === 1 && (
            <ModalButton
              able={enableFirstContinueBtn} //  when all form inputs all have value
              handler={() => setSteps(2)}
            />
          )}

          {step === 2 && (
            <ModalButton
              able={enableSecondContinueBtn}
              handler={() => setSteps(3)}
            />
          )}

          {step === 3 && (
            <ModalButton
              able={enableThirdContinueBtn}
              handler={() => setSteps(4)}
            />
          )}

          {step === 4 && (
            <ModalButton
              able={enableFourthContinueBtn}
              handler={() => setSteps(5)}
            />
          )}

          <span
            onClick={() => setSelectedProduct(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3  absolute -right-8 -top-7'
          >
            <CloseIcon color='white' />
          </span>
        </div>

        {step === 4 && (
          <ProductLocation
            setSteps={setSteps}
            setFourthContinueBtn={setFourthContinueBtn}
          />
        )}
        {step === 3 && (
          <ProductImages
            setSteps={setSteps}
            setThirdContinueBtn={setThirdContinueBtn}
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
            categoryOptions={categoryOptions}
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
                    Pick a category listed below, after completing this process
                    your product will be reviewed.
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
                      value: "phone_access",
                      name: "gadgetType",
                      label: "Phone and Accessories"
                    },
                    {
                      value: "ipad_tablet_access",
                      name: "gadgetType",
                      label: "IPad, Tablet and Accessories"
                    },
                    {
                      value: "laptop_access",
                      name: "gadgetType",
                      label: "Laptop and Accessories"
                    },
                    {
                      value: "other",
                      name: "gadgetType",
                      label: "Other Gadgets"
                    }
                  ].map((each, index) => (
                    <li
                      key={index}
                      className='cursor-pointer'
                      onClick={() => {
                        dispatch({
                          type: "change-category",
                          payload: each.value
                        });
                      }}
                    >
                      <input
                        onChange={e => {}}
                        checked={each.value === categoryOptions}
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
                  {subCategoryObj[categoryOptions].map((each, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch({
                          type: "change-subCategory",
                          payload: each.value
                        });
                      }}
                      className='cursor-pointer'
                    >
                      <input
                        onChange={e => {}}
                        checked={each.value === subCategory}
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
                      value: "New",
                      name: "condition",
                      label: "New"
                    },
                    {
                      value: "Used",
                      name: "condition",
                      label: "Used"
                    }
                  ].map((each, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch({
                          type: "change-condition",
                          payload: each.value
                        });
                      }}
                      className='cursor-pointer'
                    >
                      <input
                        onChange={e => {}}
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
                      value: "Apple",
                      name: "brand",
                      label: "Apple"
                    },
                    {
                      value: "Samsung",
                      name: "brand",
                      label: "Samsung"
                    },
                    ...(categoryOptions === "laptop_access"
                      ? [
                          {
                            value: "Hp",
                            name: "laptop_access_brand",
                            label: "Hp"
                          },
                          {
                            value: "Lenovo",
                            name: "laptop_access_brand",
                            label: "Lenovo"
                          }
                        ]
                      : []),
                    ...(categoryOptions === "other"
                      ? [
                          {
                            value: "JBL",
                            name: "other_brand",
                            label: "JBL"
                          }
                        ]
                      : [])
                  ].map((each, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        dispatch({ type: "change-brand", payload: each.value });
                      }}
                      className='cursor-pointer'
                    >
                      <input
                        onChange={e => {}}
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
    </div>
  );
};

export default Modal;
