import React from "react";
import Button from "../../../components/Button";
import { CloseIcon } from "../../../svg";

const AddGiftcard = ({ addGiftcard, setAddGiftcard }) => {
  if (!addGiftcard) return null;
  return (
    <div
      onClick={() => setAddGiftcard(null)}
      className="fixed overflow-scroll top-0 left-0 z-50 w-screen pt-40 px-40 md:pt-0 md:px-0 h-screen bg-purple-600 bg-opacity-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative rounded-3xl md:rounded-none px-10 py-10 md:px-4 md:py-4 left-0 bg-white opacity-100 min-h-1/2"
      >
        <div className="flex justify-between w-full pb-10 items-start">
          <h3 className="text-2xl">Add Giftcard</h3>
          <span
            onClick={() => setAddGiftcard(null)}
            className="inline-block cursor-pointer rounded-full bg-red-500 p-3"
          >
            <CloseIcon color="white" />
          </span>
        </div>
        <div className="flex w-full md:flex-col">
          <div className="w-1/2 md:w-full">
            <label className="text-sm my-2" htmlFor="cardName">
              Giftcard Name
            </label>
            <div className="relative w-72 md:w-full">
              <input
                type="text"
                placeholder="Ex; Apple giftcard"
                name="cardName"
                id="cardName"
                className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
              />
            </div>
          </div>
          <div className="w-1/2 md:w-full md:mt-6">
            <label className="text-sm my-2" htmlFor="denomination">
              Denomination (Value in dollars)
            </label>
            <div className="relative w-72 md:w-full">
              <input
                type="number"
                placeholder="100"
                name="denomination"
                id="denomination"
                className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
              />
              <span className="flex items-center absolute top-2 right-3">
                &#127482;&#127480;{" "}
                <span className="text-xs inline-flex ml-2">USD</span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex md:flex-col">
          <div className="flex flex-col w-1/2 md:w-full">
            <h4 className="text-purple-500 text-xl">Buying Price</h4>
            <section className="mt-4 flex flex-col">
              <label className="text-sm my-2" htmlFor="buyingPriceNGN">
                Amount (NGN)
              </label>
              <div className="relative w-72 md:w-full">
                <input
                  type="text"
                  placeholder="129.40"
                  name="buyingPriceNGN"
                  id="buyingPriceNGN"
                  className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                />
                <span className="flex items-center absolute top-2 right-3">
                  &#127475;&#127468;{" "}
                  <span className="text-xs inline-flex ml-2">NGN</span>
                </span>
              </div>
              <label className="text-sm my-2" htmlFor="buyingPriceUSD">
                Amount (USD)
              </label>
              <div className="relative w-72 md:w-full">
                <input
                  type="text"
                  placeholder="1.40"
                  name="buyingPriceUSD"
                  id="buyingPriceUSD"
                  className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                />
                <span className="flex items-center absolute top-2 right-3">
                  &#127482;&#127480;{" "}
                  <span className="text-xs inline-flex ml-2">USD</span>
                </span>
              </div>
            </section>
          </div>
          <div className="flex flex-col w-1/2 md:w-full md:mt-6">
            <h4 className="text-purple-500 text-xl">Selling Price</h4>
            <section className="mt-4 flex flex-col">
              <label className="text-sm my-2" htmlFor="sellingPriceNGN">
                Amount (NGN)
              </label>
              <div className="relative w-72 md:w-full">
                <input
                  type="text"
                  placeholder="129.40"
                  name="sellingPriceNGN"
                  id="sellingPriceNGN"
                  className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                />
                <span className="flex items-center absolute top-2 right-3">
                  &#127475;&#127468;{" "}
                  <span className="text-xs inline-flex ml-2">NGN</span>
                </span>
              </div>
              <label className="text-sm my-2" htmlFor="sellingPriceUSD">
                Amount (USD)
              </label>
              <div className="relative w-72 md:w-full">
                <input
                  type="text"
                  placeholder="1.40"
                  name="sellingPriceUSD"
                  id="sellingPriceUSD"
                  className="border w-full border-black rounded-full px-6 py-2 focus:outline-none focus:shadow-xl"
                />
                <span className="flex items-center absolute top-2 right-3">
                  &#127482;&#127480;{" "}
                  <span className="text-xs inline-flex ml-2">USD</span>
                </span>
              </div>
            </section>
          </div>
        </div>
        <div className="w-1/4 md:w-full mt-12 flex flex-col">
          <Button primary text="Add Giftcard" roundedFull />
        </div>
      </div>
    </div>
  );
};

export default AddGiftcard;
