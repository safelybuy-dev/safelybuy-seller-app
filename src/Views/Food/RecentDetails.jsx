import React from 'react';
import { CloseIcon } from 'svg';

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-500">{title}</small>
    <h5 className="text-lg">{value}</h5>
  </div>
);

const RecentDetails = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2">
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Order Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3">
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex md:mr-4 mr-0 flex-col md:flex-row">
          <div className="flex flex-col w-6/12 md:w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <div className="md:w-64 w-24 rounded-xl md:h-32 h-24 bg-gray-200 overflow-hidden">
                <img
                  src={selectedProduct?.meal_plan?.main_image}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 ml-4 md:w-full">
            <div className="flex flex-col  pb-4 w-full mt-4 md:mt-0">
              <div className="flex  flex-col">
                <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                  <h4 className="text-lg text-purple-500">
                    Title and Specifications
                  </h4>
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <KeyValue
                      title="Food Title"
                      value={selectedProduct?.meal_plan?.name}
                    />
                    <KeyValue
                      title="Food SKU"
                      value={selectedProduct?.meal_plan?.sku}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <KeyValue
                      title="Food Price"
                      value={
                        (+selectedProduct?.meal_plan?.cost).toLocaleString() +
                        'NGN'
                      }
                    />
                    <KeyValue
                      title="Quantity Ordered"
                      value={selectedProduct.quantity}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Available Days"
                      value={selectedProduct?.meal_plan?.available_days
                        ?.map((day) => day.substring(0, 3))
                        .join(', ')}
                    />
                  </div>
                </div>
                <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                  <h4 className="text-lg text-purple-500">Delivery Details</h4>
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <KeyValue
                      title="Delivery Address"
                      value={selectedProduct?.delivery_address}
                    />
                    <KeyValue
                      title="Delivery Time"
                      value={selectedProduct?.delivery_time}
                    />
                  </div>
                </div>
                <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                  <h4 className="text-lg text-purple-500">Customer Details</h4>
                  <div className="flex  flex-col md:flex-row justify-between w-full">
                    <KeyValue
                      title="Firstname"
                      value={selectedProduct?.buyer?.firstname}
                    />
                    <KeyValue
                      title="Lastname"
                      value={selectedProduct?.buyer?.lastname}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <KeyValue
                      title="Phone"
                      value={selectedProduct?.buyer?.phone}
                    />
                    <KeyValue
                      title="Gender"
                      value={selectedProduct?.buyer?.gender}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <KeyValue
                      title="Email Address"
                      value={selectedProduct?.buyer?.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDetails;
