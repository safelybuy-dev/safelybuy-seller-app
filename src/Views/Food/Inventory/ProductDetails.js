import React from 'react';
import { useHistory } from 'react-router-dom';
import { CloseIcon } from 'svg';
import Button from 'components/Button';

function KeyValue({ title, value }) {
  return (
    <div className="flex my-3 flex-col">
      <small className="text-gray-500">{title}</small>
      <h5 className="text-lg">{value}</h5>
    </div>
  );
}

function ProductDetails({ selectedProduct, setSelectedProduct }) {
  const history = useHistory();
  if (!selectedProduct) return null;
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2">
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Restaurant Details</h3>
          <span
            onClick={() => setSelectedProduct(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3">
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex md:mr-4 mr-0 flex-col md:flex-row">
          <div className="flex flex-col w-6/12 md:w-full">
            <div className="border-b border-gray-100 pb-4 w-full">
              <div className="w-64 md:w-24 rounded-xl h-32 md:h-24 bg-gray-200 overflow-hidden">
                <img
                  src={selectedProduct.display_image}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 ml-4 md:w-full">
            <div className="flex flex-col border-b pb-4 w-full md:ml-0 md:mt-4">
              <h4 className="text-xl text-purple-500">Display Information</h4>
              <div className="flex mt-6 flex-col">
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Restaurant Name"
                    value={selectedProduct.name}
                  />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue title="Location" value={selectedProduct.address} />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Opening Time"
                    value={selectedProduct.opening_time}
                  />
                  <KeyValue
                    title="Closing Time"
                    value={selectedProduct.closing_time}
                  />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Minimum Order Price"
                    value={selectedProduct.min_order_price}
                  />
                </div>
                <div className="flex justify-between w-full">
                  <KeyValue
                    title="Contact Email"
                    value={selectedProduct.contact_email}
                  />
                  <KeyValue
                    title="Contact Phone"
                    value={selectedProduct.contact_phone}
                  />
                </div>

                <div className="flex justify-end w-full mt-5">
                  <Button
                    className="focus:outline-none"
                    text="View Menus"
                    canClick
                    clickHandler={() => {
                      history.push(`/food/restaurant/${selectedProduct.id}`);
                    }}
                    roundedFull
                    primary
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
