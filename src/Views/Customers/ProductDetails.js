import React from "react";
import { CloseIcon } from "../../svg";

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{value}</h5>
  </div>
);

const ProductDetails = ({ selectedProduct, setSelectedProduct }) => {
  if (!selectedProduct) return null;
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen pt-40 px-40 md:pt-0 md:px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Product Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex mr-4 md:mr-0 md:flex-col">
          <div className="flex flex-col w-6/12 md:w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <div className="w-28 md:w-24 rounded-xl h-28 md:h-24 bg-gray-200"></div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
              <div className="w-28 md:w-24 rounded-xl mt-4 mr-4 h-28 md:h-24 bg-gray-200"></div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 ml-4 md:w-full md:ml-0 md:mt-4">
            <h4 className="text-xl text-purple-500">
              Title and Specifications
            </h4>
            <div className="flex mt-6">
              <div className="flex flex-col w-6/12">
                <KeyValue title="Product Title" value="iPhone Xmax" />
                <KeyValue
                  title="Internal Memory (Hard disk size)"
                  value="64GB"
                />
                <KeyValue title="Display" value="6.1 inches IPS LCD Display" />
                <KeyValue title="CPU Speed" value="2.4GHz" />
                <KeyValue title="Operating System" value="iOS 12" />
                <KeyValue title="Weight (kg)" value="0.208 Kg" />
              </div>
              <div className="flex flex-col w-6/12">
                <KeyValue title="RAM" value="12GB" />
                <KeyValue title="Processor" value="Octa-core MediaTek MT6873" />
                <KeyValue title="Battery" value="4300mAh" />
                <KeyValue title="Network Connectivity" value="4G LTE" />
                <KeyValue title="Colour" value="Gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
