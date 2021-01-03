import React from "react";
import { UserAvatar, CloseIcon } from "../../../svg";

const KeyValue = ({ title, value }) => (
  <div className="flex my-3 flex-col">
    <small className="text-gray-400 capitalize">{title}</small>
    <h5 className="text-lg">{value}</h5>
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
          <h3 className="text-2xl">Sender Information</h3>
          <span
            onClick={() => setSelectedOrder(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex mr-4 md:mr-0 md:flex-col">
          <div className="flex flex-col border-r md:border-r-0 w-5/12 md:w-full">
            <div className="flex pb-4 items-center w-full">
              <UserAvatar scale={4.65} />
              <div className="flex ml-3 flex-col">
                <p className="text-xl">Don Norman</p>
                <p className="text-purple-500">donnorman@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <KeyValue title="Phone Number" value="+234 8232 334 3434" />
              <KeyValue
                title="Address"
                value="12 Ipaja roundabout, Lekki palms,Warri, Delta"
              />
              <div className="p-4"></div>
            </div>
          </div>
          <div className="flex flex-col w-7/12 ml-10 md:ml-0 md:w-full">
            <h4 className="text-xl text-purple-500">Details</h4>
            <div className="flex mt-2 mb-6 pb-6">
              <div className="flex flex-col w-6/12">
                <KeyValue title="Package Content" value="2 Samsung phones" />
                <KeyValue title="Total Delivery Fee" value="4,950NGN" />
                <KeyValue
                  title="Receiver’s Name"
                  value="Ellie Oghnenekaro Shutubram"
                />
                <KeyValue
                  title="Receiver’s Number"
                  value="0803 454 3444"
                />
              </div>
              <div className="flex flex-col w-6/12">
              <KeyValue title="Package Weight" value="Less tha 2.5kg" />
                <KeyValue title="Pickup Type" value="Pickup Selected" />
                <KeyValue
                  title="Receiver’s Address"
                  value="24 Geils Estate, Warri, Delta"
                />
                <KeyValue
                  title="Receiver’s Email"
                  value="ellieshutz@gmail.com"
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
