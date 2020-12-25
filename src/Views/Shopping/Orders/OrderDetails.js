import React from "react";
import { CloseIcon } from "../../../svg";

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{value}</h5>
  </div>
);

const KeyValueWithIcon = ({ title, value, heading, icon, }) => (
 <div className="flex">
   <div className="flex">
    {icon}
   </div>
   <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{heading}</h5>
    <p className="">{value}</p>
  </div>
 </div>
);

const ProductDetails = ({ selectedOrder, setSelectedOrder }) => {
  if (!selectedOrder) return null;
  return (
    <div
      onClick={() => setSelectedOrder(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen pt-40 px-40 md:pt-0 md:px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Order #00312-2332-343</h3>
          <span
            onClick={() => setSelectedOrder(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex flex-col mr-4 md:mr-0">
          <div className="flex w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <div className="w-28 md:w-24 rounded-xl h-28 md:h-24 bg-gray-200"></div>
            </div>
            <div className="flex flex-wrap"></div>
          </div>
          <div className="flex flex-col mt-8 w-full md:ml-0 md:mt-4">
            <h4 className="text-xl text-purple-500">Delivery Information</h4>
            <div className="flex mt-6 flex-wrap">
              <div className="flex w-full justify-between">
                <KeyValue
                  title="Shipping information"
                  value={`
                  Adegoke Aramide.
                  11, Ota-Etiosa raesd, Palmgrove,
                  Redemption State, LGA.
                  +2348234920382`}
                />
                <KeyValue title="Payment method" value="Pay on delivery" />
                <KeyValue
                  title="Estimated delivery date"
                  value="13- Sept - 2020, 11:00 - 15:00"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
