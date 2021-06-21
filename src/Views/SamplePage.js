// import { useEffect } from 'react';
import { BackroundGradient, ArrowRight } from 'svg';
import { Link } from 'react-router-dom';
import phone from 'assets/images/landing-phone.png';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import Container from 'components/Container';
import { Auth } from 'auth';

const SamplePage = () => {
  return (
    <div className='relative justify-between flex flex-col min-h-screen text-center'>
      <Container>
        <header className='flex tracking-wide justify-between my-6 md:mx-6 md:my-3'>
          <Logo color='purple' text='seller center' />
          <div className='flex items-center'>
            {Auth.isAuthenticated() ? (
              <Link to='/shopping'>
                <Button text='Go to Dashboard' primary roundedFull />
              </Link>
            ) : (
              <>
                {' '}
                <Link to='/signup'>
                  <Button text='Sign up' underlined />
                </Link>
                <div className='p-2'></div>
                <Link to='/login'>
                  <Button text='Login' primary roundedFull />
                </Link>
              </>
            )}
          </div>
        </header>
        <div className='flex justify-between w-full'>
          <div className='z-20 text-left w-1/3 md:w-full md:px-8'>
            <h1 className='pt-8 pb-2 leading-normal font-bold text-6xl z-10 md:text-4xl'>
              Sell your <br /> products and <br /> make money
            </h1>
            <p className='font-medium leading-normal mb-20 md:mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {Auth.isAuthenticated() ? (
              <Link to='/shopping'>
                <Button
                  text='Get Started'
                  primary
                  roundedMd
                  icon={<ArrowRight color='white' />}
                />
              </Link>
            ) : (
              <Link to='/signup'>
                <Button
                  text='Get Started'
                  primary
                  roundedMd
                  icon={<ArrowRight color='white' />}
                />
              </Link>
            )}
          </div>
          <div className='flex relative justify-center full-width z-10 md:mx-2 md:px-1'>
            {/* <div
              className='w-ful top-0 absolute flex justify-center md:hidden'
              style={{ filter: 'blur(80px)' }}
            >
              {<BackroundGradient />}
            </div>
            <div
              className='px-0 w-full top-0 absolute hidden justify-center md:flex'
              style={{ filter: 'blur(40px)' }}
            >
              {<BackroundGradient />}
            </div>
            <div className='flex flex-col'>
              <div className='flex md:hidden justify-center w-full flex-wrap'></div>
            </div>
           */}
          </div>
        </div>
      </Container>
      <div
        style={{ top: '30%', right: '1%', filter: 'blur(80px)' }}
        className='absolute'
      >
        {<BackroundGradient />}
      </div>
      <div className='relative z-10'>
        <Container>
          <div className='relative hidden justify-center mt-10 md:flex'>
            {/* {<DevicesIconMobile />} */}
            <img
              src={phone}
              alt='phone'
              className='absolute bottom-0 object-contain w-full z-10'
              style={{ height: '600px' }}
            />
          </div>
          <div className='relative flex justify-center mt-10 md:hidden'>
            {/* {<DevicesIcon />} */}
            <img
              src={phone}
              alt='phone'
              className='absolute bottom-28 right-0 object-contain z-10'
              style={{ height: '600px' }}
            />
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default SamplePage;
