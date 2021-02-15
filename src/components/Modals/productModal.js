import React, { useState } from "react";
import { CloseIcon, FowardSymbolSVG } from "../../svg";
import Button from "../../components/Button";

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{value}</h5>
  </div>
);

const Modal = ({ selectedProduct, setSelectedProduct }) => {
  const [subCategoryOptions, setSubCategoryOptions] = useState("phone_access");
  const [selectSubCategory, setSelectedSubCategory ] = useState("");
  const [condition, setSelectedCondition] = useState("");
  const [brand, setSelectedBrand] = useState("");

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

  if (!selectedProduct) return null;
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen py-40 px-40 md:py-0 md:px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Add a new product</h3>


          <Button
            disabled
            canClick={true}
            clickHandler={()=> setSelectedProduct(true)}
            event="onClick"
            text="Proceed"
            primary
            roundedFull
            icon={<fowardSymbolSVG />}
          />
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex mr-4 md:mr-0 md:flex-col">
          <div className="flex flex-col  ml-4 md:w-full">
            <div className="flex flex-col  w-full md:ml-0 md:mt-4">
              <h4 className="text-xl text-purple-500">Select category</h4>
              <p>
                Pick a category listed below, after completing this process your
                product will be reviewed.
              </p>
              <div className="mt-6 flex col"></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div class="flex-1 ...">
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
              ].map(each => (
                <li
                 className="cursor-pointer"
                  onClick={() => {
                  setSubCategoryOptions(each.value);
                  setSelectedSubCategory("");
                  setSelectedCondition("");
                  setSelectedBrand("")
                }}
                >
                  <input
                    checked={each.value === subCategoryOptions}
                  
                    className="m-2 cursor-pointer"
                    type="radio"
                    value={each.value}
                    name={each.name}
                  />
                  <small>{each.label}</small>
                </li>
              ))}
            </ul>
          </div>
          <div class="flex-1 border-l-2 p-3">
            <p>Sub-category</p>
            <ul>
              {subCategoryObj[subCategoryOptions].map(each => (
                <li
                onClick={() => {
                  setSelectedSubCategory(each.value)
                  setSelectedCondition("");
                  setSelectedBrand("")
                }}
                className="cursor-pointer"
                >
                  <input
                    checked={each.value === selectSubCategory }
                    className="m-2"
                    type="radio"
                    value={each.value}
                    name={each.name}
                  />
                  <small>{each.label}</small>
                </li>
              ))}
            </ul>
          </div>
          <div class="flex-1 border-l-2 p-3">
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
              ].map(each => (
                <li
                onClick={() => {
                  setSelectedCondition(each.value);
                  setSelectedBrand("");

                }}
                className="cursor-pointer"
                >
                  <input
                    checked={each.value === condition }
                    className="m-2"
                    type="radio"
                    value={each.value}
                    name={each.name}
                  />
                  <small>{each.label}</small>
                </li>
              ))}
            </ul>
          </div>
          <div class="flex-1 ... border-l-2 p-3">
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
                ...(subCategoryOptions === "laptop_access"
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
                ...(subCategoryOptions === "other"
                  ? [
                      {
                        value: "JBL",
                        name: "other_brand",
                        label: "JBL"
                      }
                    ]
                  : [])
              ].map(each => (
                <li
                onClick={() => setSelectedBrand(each.value)}
                className="cursor-pointer"
                >
                  <input
                   checked={each.value === brand }               
                    className="m-2"
                    type="radio"
                    value={each.value}
                    name={each.name}
                  />
                  <small>{each.label}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
