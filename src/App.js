import "./App.css";
import "./tailwind.generated.css";
import googleplay from "./assets/images/googleplay.png";
import {
  appleDownload,
  backroundGradient,
  bag,
  bitcoinIcon,
  deliveryIcon,
  devicesIcon,
  facebook,
  instagram,
  safelyBuyLogo,
  sellSwapPhone,
  tickets,
  twitter,
} from "./svg";

function App() {
  return (
    <div className="App relative">
      <header className="flex mx-20 my-10 tracking-wide justify-between">
        <div className="flex items-center">
          <div>{safelyBuyLogo}</div>
          <div className="bg-black h-12 w-px border-0 mx-6"></div>
          <div className="uppercase text-sm">Transact with no regret</div>
        </div>
        <div>
          <button className="border-b-2 border-black pb-1 mr-3">Sign Up</button>
          <button className="ml-3 bg-green-500 text-white px-8 py-2 rounded-full">
            Login
          </button>
        </div>
      </header>
      <h1 className="pt-12 pb-2 text-6xl z-10">
        Shop . Trade . Delivery . Events
      </h1>
      <p>All in one place</p>
      <div className="flex px-20 justify-center full-width pt-7 z-10">
        <div className="flex justify-around w-9/12">
          <div className="rounded-lg p-4 bg-white z-10 items-center flex flex-col bg-opacity-50">
            <div className="rounded p-4 bg-white mb-4 w-max flex justify-center">
              {bag}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg">
              Shopping
            </button>
          </div>
          <div className="rounded-lg p-4 bg-white z-10 items-center flex flex-col bg-opacity-50">
            <div className="relative rounded p-4 bg-white mb-4 w-max flex justify-center">
              <div className="absolute rounded-lg text-xs text-white bg-red-500 -top-2.5 -right-2.5 p-1 z-20">
                50% OFF
              </div>
              {sellSwapPhone}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg">
              Sell or Swap Phones
            </button>
          </div>
          <div className="rounded-lg p-4 bg-white z-10 items-center flex flex-col bg-opacity-50">
            <div className="rounded p-4 bg-white mb-4 w-max flex justify-center">
              {bitcoinIcon}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg">
              Bitcoin & Gift Cards
            </button>
          </div>
          <div className="rounded-lg p-4 bg-white z-10 items-center flex flex-col bg-opacity-50">
            <div className="relative rounded p-4 bg-white mb-4 w-max flex justify-center">
              <div className="absolute rounded-lg text-xs text-white bg-red-500 -top-2.5 -right-2.5 p-1 z-20">
                PROMO
              </div>
              {deliveryIcon}
            </div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg">
              Delivery
            </button>
          </div>
          <div className="rounded-lg p-4 bg-white z-10 bg-opacity-30">
            <div className="rounded p-4 bg-white mb-4">{tickets}</div>
            <button className="text-white bg-black px-6 py-1 text-xs rounded-lg">
              Tickets
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="px-20 w-full top-0 absolute -mt-40 flex justify-center"
          style={{ filter: "blur(80px)" }}
        >
          {backroundGradient}
        </div>
        <div className="px-20 relative flex justify-center mt-10">
          {devicesIcon}
        </div>
        <footer className="bg-gray-100 px-20 py-10 w-full flex items-center absolute bottom-0">
          <div className="flex w-5/12">
            <img
              src={googleplay}
              alt="googleplay"
              height="79"
              width="202"
              style={{ height: "79px" }}
            />
            <div className="p-3">{appleDownload}</div>
          </div>
          <div className="flex flex-col items-start text-left w-5/12">
            <button className="rounded bg-green-500 text-white px-10 py-2 mb-4">
              Refer a Friend
            </button>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            nulla numquam nostrum dignissimos placeat facilis id consequuntur,
            omnis cupiditate a.
          </div>
          <div className="self-end justify-around px-3 flex w-2/12">
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
