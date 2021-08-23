import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import Button from 'components/Button';
import SuccessSVG from './successSVG';
import FailureSVG from './failureSVG';
import { ArrowRight } from 'svg'

const SuccessError = () => {
  const history = useHistory();

  return (
    <div className='relative justify-between flex flex-col min-h-screen text-center'>
      <div>
        <header className='flex tracking-wide justify-center mx-12 my-8 md:mx-6 md:my-3'>
          <Logo color='black' text='transact with no regret' />
        </header>
        <div className='flex justify-center'>
          {history.location.state?.data ? (
            <>
              <SuccessSVG />
            </>
          ) : (
            <>
              <FailureSVG />
            </>
          )}
        </div>
        <div className='mt-10'></div>
        <Link to='shopping/inventory'>
          <Button secondary roundedLg icon={<ArrowRight color='white' />}>
            {history.location.state?.data ? 'Continue' : 'Retry'}
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessError;
