import { BackroundGradient, ArrowRight, FullUserIcon } from 'svg';
import { Link } from 'react-router-dom';
import phone from 'assets/images/landing-phone.png';
import widgetOne from 'assets/images/widget-one.svg';
import widgetTwo from 'assets/images/widget-two.svg';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import { Auth } from 'auth';

function SamplePage() {
  return (
    <div className="bg-landing">
      <header className=" md:py-6  py-3">
        <div className="flex tracking-wide justify-between w-[90%] md:w-10/12 mx-auto">
          <Logo color="purple" text="seller" />
          <div className="flex  items-center">
            {Auth.isAuthenticated() ? (
              <>
                <div className="hidden md:block">
                  <Link
                    to={`/${
                      localStorage.getItem('dashboard_view_preference')
                        ? JSON.parse(
                            localStorage.getItem('dashboard_view_preference')
                          )?.toLowerCase()
                        : 'shopping'
                    }`}>
                    <Button text="Go to Dashboard" primary roundedFull />
                  </Link>
                </div>
                <div className="block md:hidden">
                  <Link
                    to={`/${
                      localStorage.getItem('dashboard_view_preference')
                        ? JSON.parse(
                            localStorage.getItem('dashboard_view_preference')
                          )?.toLowerCase()
                        : 'shopping'
                    }`}>
                    <button className="rounded-full h-[2.188rem] w-[2.188rem] flex justify-center items-center bg-[#4BBF75]">
                      <FullUserIcon />
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {' '}
                <Link to="/signup">
                  <Button text="Sign up" underlined />
                </Link>
                <div className="px-2" />
                <Link to="/login">
                  <Button text="Login" primary roundedFull />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <div className=" w-10/12 mx-auto flex flex-col lg:flex-row  justify-between">
        <div className="md:mb-6 lg:mb-0 md:flex-[0.3]  z-10">
          <h1 className="pt-8 pb-2  tracking-[0.02em] md:leading-[4.8rem] font-bold md:text-6xl z-10 text-4xl">
            Sell your <br /> products and <br />
            make money
          </h1>
          <p className="font-medium text-[#000000] text-opacity-80  leading-normal md:mb-16 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {Auth.isAuthenticated() ? (
            <Link
              to={`/${
                localStorage.getItem('dashboard_view_preference')
                  ? JSON.parse(
                      localStorage.getItem('dashboard_view_preference')
                    )?.toLowerCase()
                  : 'shopping'
              }`}>
              <Button
                text="Get Started"
                primary
                roundedMd
                icon={<ArrowRight color="white" />}
              />
            </Link>
          ) : (
            <Link to="/signup">
              <Button
                text="Get Started"
                primary
                roundedMd
                icon={<ArrowRight color="white" />}
              />
            </Link>
          )}
        </div>
        <div className="absolute top-[70%] md:top-[50%] right-0 blur-[70px] ">
          <BackroundGradient scale={0.85} />
        </div>
        <div className="z-10 mt-8 md:mt-0 md:flex-[0.63]">
          <div className="mb-6 flex justify-end">
            <img
              src={widgetTwo}
              alt="Safelybuy Widget"
              className="cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <div className="hidden md:block w-[13.625rem] h-[19.188rem] rounded-[1.25rem] bg-landing-widget-one backdrop-blur-[0.625rem] cursor-pointer">
              <img
                src={widgetOne}
                alt="Safelybuy Widget"
                className="w-full h-full"
              />
            </div>
            <div className="h-[26rem]  overflow-hidden">
              <img
                src={phone}
                alt="phone"
                className="object-contain w-[31.25rem] h-[31.25rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SamplePage;
