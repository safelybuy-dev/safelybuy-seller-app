import "./App.css";
import "./tailwind.generated.css";
import googleplay from "./assets/images/googleplay.png";
import {
  appleDownload,
  backgroundGradientMobile,
  backroundGradient,
  bag,
  bitcoinIcon,
  deliveryIcon,
  devicesIcon,
  devicesIconMobile,
  facebook,
  instagram,
  safelyBuyLogo,
  sellSwapPhone,
  tickets,
  twitter,
} from "./svg";

function App() {
  return (
    <div className="relative justify-between flex flex-col min-h-screen text-center">
      <div>
        <header className="flex tracking-wide justify-between mx-12 my-6 md:mx-6 md:my-3">
          <div className="flex items-center">
            <div>{safelyBuyLogo}</div>
            <div className="bg-black h-12 w-px border-0 mx-6 md:hidden"></div>
            <div className="uppercase text-sm md:hidden">
              Transact with no regret
            </div>
          </div>
          <div>
            <button className="border-b-2 border-black pb-1 mr-3">
              Sign Up
            </button>
            <button className="ml-3 bg-green-500 text-white px-8 py-2 rounded-full">
              Login
            </button>
          </div>
        </header>
        <h1 className="pt-8 pb-2 px-12 text-6xl z-10 md:px-8 md:text-4xl">
          Shop . Trade . Delivery . Events
        </h1>
        <p>All in one place</p>
      </div>
      <div className="flex relative justify-center full-width z-10 px-12 md:mx-2 md:px-1">
        <div
          className="px-20 w-full top-0 absolute flex justify-center md:hidden"
          style={{ filter: "blur(80px)" }}
        >
          {backroundGradient}
        </div>
        <div
          className="px-0 w-full top-0 absolute hidden justify-center md:flex"
          style={{ filter: "blur(40px)" }}
        >
          {backroundGradient}
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:transform md:scale-75 md:p-3 md:m-1">
            <div className="rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
              {bag}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg md:px-3">
              Shopping
            </button>
          </div>
          <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:transform md:scale-75 md:p-3 md:m-1">
            <div className="relative rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
              <div className="absolute rounded-lg text-xs text-white bg-red-500 -top-2.5 -right-2.5 p-1 z-20">
                50% OFF
              </div>
              {sellSwapPhone}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg md:px-3">
              Sell or Swap Phones
            </button>
          </div>
          <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:transform md:scale-75 md:p-3 md:m-1">
            <div className="relative rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
              <div className="absolute rounded-lg text-xs text-white bg-red-500 -top-2.5 -right-2.5 p-1 z-20">
                PROMO
              </div>
              {deliveryIcon}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg md:px-3">
              Delivery
            </button>
          </div>
          <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:transform md:scale-75 md:p-3 md:m-1">
            <div className="rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
              {bitcoinIcon}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg md:px-3">
              Bitcoin & Gift Cards
            </button>
          </div>
          <div className="rounded-lg m-4 p-4 bg-white z-10 items-center flex flex-col bg-opacity-50 md:transform md:scale-75 md:p-3 md:m-1">
            <div className="rounded p-4 bg-white mb-4 w-max flex justify-center md:mb-2 md:p-1">
              {tickets}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg md:px-3">
              Tickets
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div className="relative hidden justify-center mt-10 md:flex">
          {devicesIconMobile}
        </div>
        <div className="px-12 relative flex justify-center mt-10 md:hidden">
          {devicesIcon}
        </div>
        <footer className="bg-gray-100 px-8 py-8 w-full flex flex-wrap items-center absolute bottom-0 md:px-6">
          <div className="flex w-6/12 md:w-full justify-center md:transform md:scale-75 md:pb-4">
            <img
              src={googleplay}
              alt="googleplay"
              height="79"
              width="202"
              style={{ height: "79px" }}
            />
            <div className="p-3">{appleDownload}</div>
          </div>
          <div className="flex flex-col items-start text-left w-4/12 md:w-full md:items-center md:text-center">
            <button className="rounded bg-green-500 text-white px-10 py-2 mb-4">
              Refer a Friend
            </button>
            <p className="font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores nulla numquam nostrum dignissimos placeat facilis id
              consequuntur.
            </p>
          </div>
          <div className="self-end justify-around px-3 flex w-2/12 md:w-full md:pt-4">
            {facebook}
            {instagram}
            {twitter}
          </div>
        </footer>
      </div> 
    </div>
  );
}

export default App;
