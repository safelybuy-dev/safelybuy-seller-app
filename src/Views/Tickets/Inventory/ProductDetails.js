import React from "react";
import { CloseIcon } from "svg";

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
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Event Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex md:mr-4 mr-0 flex-col md:flex-row">
          <div className="flex flex-col w-6/12 md:w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <div className="w-64 md:w-24 rounded-xl h-32 md:h-24 bg-gray-200 overflow-hidden">
                <img
                  src={selectedProduct.main_image}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              {selectedProduct.images.map((image) => (
                <div
                  key={image.id}
                  className="w-32 md:w-24 rounded-xl mt-4 mr-4 h-32 md:h-24 bg-gray-200 overflow-hidden"
                >
                  <img
                    src={image.image_url}
                    alt=""
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-6/12 ml-4 md:w-full">
            <div className="flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4">
              <h4 className="text-xl text-purple-500">Display Information</h4>
              <div className="flex mt-6 flex-col">
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Event Category"
                    value={
                      selectedProduct.category === 1 ? "Concerts" : "Tickets"
                    }
                  />
                  <KeyValue title="Event Title" value={selectedProduct.title} />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Event Details"
                    value={selectedProduct.details}
                  />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Event Date/Time"
                    value={selectedProduct.event_date}
                  />
                  <KeyValue
                    title="Event Location"
                    value={selectedProduct.location}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pt-4 md:ml-0 md:mt-4">
              <h4 className="text-xl text-purple-500">Ticket Number & Seats</h4>
              <div className="flex mt-6 flex-col">
                <KeyValue
                  title="Listing Number"
                  value={"#" + selectedProduct.listing_number}
                />
                <h5 className="text-lg">Seat Category</h5>
                {selectedProduct.seats.map((seat, index) => (
                  <div
                    className="flex border-b justify-between w-full"
                    key={index}
                  >
                    <KeyValue title="Seat Type" value={seat.type} />
                    <KeyValue title="Seat Price" value={seat.price} />
                    <KeyValue title="Available Seats" value={seat.available} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
