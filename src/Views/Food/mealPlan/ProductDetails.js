import React from 'react';
import { CloseIcon } from 'svg';

function KeyValue({ title, value }) {
  return (
    <div className="flex my-3 flex-col">
      <small className="text-gray-500">{title}</small>
      <h5 className="text-lg">{value}</h5>
    </div>
  );
}

function ProductDetails({ selectedProduct, setSelectedProduct }) {
  return (
    <div
      onClick={() => setSelectedProduct(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen md:py-40 md:px-40 py-0 px-0 h-screen bg-purple-600 bg-opacity-30">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2">
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Meal Plan Details</h3>
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
                  src={selectedProduct.main_image}
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
                  <div className="flex justify-between w-full">
                    <KeyValue title="Food Title" value={selectedProduct.name} />
                    <KeyValue title="Food SKU" value={selectedProduct.sku} />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Food Price"
                      value={`${(+selectedProduct.cost).toLocaleString()}NGN`}
                    />
                    <KeyValue
                      title="Food Availability"
                      value={
                        <span className="capitalize">
                          {selectedProduct.available_days
                            .map((day) => day.substring(0, 3))
                            .join(', ')}
                        </span>
                      }
                    />
                  </div>
                  <div className="flex  w-full">
                    <KeyValue
                      title="Extras And Drinks"
                      value={
                        <div className="capitalize w-full">
                          {selectedProduct?.drinks_and_xtras.map((xtra) => (
                            <div
                              key={Math.random() * Date.now()}
                              className="flex justify-between mb-2 w-full">
                              <span className="md:mr-6">{xtra?.name}</span>
                              <span>{xtra?.cost}NGN</span>
                            </div>
                          ))}
                        </div>
                      }
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Cities"
                      value={selectedProduct.cities
                        .map((city) => city.name)
                        .join(', ')}
                    />
                  </div>
                </div>
                <div className="border-[#e0e0e066] pb-3  border-b-2 mb-3 ">
                  <h4 className="text-lg text-purple-500">
                    Inventory and Sales
                  </h4>
                  <div className="flex justify-between w-full">
                    <KeyValue title="Seller SKU" value="SB-#2123434343" />
                    <KeyValue
                      title="Your Price"
                      value={`${(+selectedProduct.cost).toLocaleString()}NGN`}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg text-purple-500">Meal Location</h4>
                  <div className="flex justify-between w-full">
                    <KeyValue
                      title="Cities"
                      value={selectedProduct.cities
                        .map((city) => city.name)
                        .join(', ')}
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
}

export default ProductDetails;
