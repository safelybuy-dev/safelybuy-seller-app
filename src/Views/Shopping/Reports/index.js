import Button from 'components/Button';
import React from 'react';

const index = () => {
  return (
    <div className='flex flex-col w-full items-start'>
      <div className='flex justify-between w-full flex-wrap'>
        <div className='left w-7/12 flex flex-col md:w-full'>
          <div className='bg-white rounded-2xl mr-8 mb-8 md:mr-0 md:mb-0 py-8 px-6'>
            <div className='flex justify-between'>
              <div className=''>
                <p className='text-gray-400 text-sm'>Payment Information</p>
                <h3 className='text-xl'>Download your payment summary</h3>
                <select className='text-gray-400 text-sm py-1'>
                  <option value=''>Jun 12 - Jul 12</option>
                  <option value='name'>Jul 12 - Aug 12</option>
                  <option value='product'>Aug 12 - now</option>
                  <option value='test'>All time</option>
                </select>
                <p className='text-purple-500 text-sm inline-block'>
                  Download report
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-block ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.78882 3.87171L5.41679 5.24375V0.833008H4.58345V5.24375L3.21141 3.87171L2.62216 4.46097L5.00012 6.83893L7.37808 4.46097L6.78882 3.87171ZM9.16683 8.33301V6.66634H8.3335V8.33301H1.66683V6.66634H0.833496V8.33301C0.833496 8.79325 1.20659 9.16634 1.66683 9.16634H8.3335C8.79373 9.16634 9.16683 8.79325 9.16683 8.33301Z'
                      fill='#8661FF'
                    />
                  </svg>
                </p>
              </div>
              <div className=''>
                <p className='text-gray-400 text-sm'>Wallet Balance</p>
                <span className='text-2xl font-bold'>300,000</span>
              </div>
            </div>
            <div className='flex justify-between mt-8 items-center'>
              <Button text='Withdraw Funds' primary roundedFull />
            </div>
          </div>
          <div className='flex flex-wrap justify-between mr-8'>
            <div
              style={{ width: '47%' }}
              className='bg-white rounded-2xl md:mr-0 p-8'
            >
              <div className='flex items-start'>
                <div className='justify-between mr-4'>
                  <h3 className='text-xl'>Inventory</h3>
                  <p className='text-sm text-gray-400 pt-4 mr-2'>
                    Here’s a summary of your inventory, you can filter the
                    report before downloading.
                  </p>
                  <select className='text-purple-500 px-4 py-1 mt-6 rounded-full inlline-block bg-purple-100'>
                    <option value=''>Filter report</option>
                    <option value='name'>Name</option>
                    <option value='product'>Product</option>
                    <option value='test'>Test</option>
                  </select>
                </div>
                <div className='bg-blue-100 p-4 rounded-full'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 17H20M1 1H29V9H1V1ZM3 9V27C3 28.1046 3.89543 29 5 29H25C26.1046 29 27 28.1046 27 27V9H3Z'
                      stroke='#1B9CFC'
                      strokeWidth='1.5'
                    />
                  </svg>
                </div>
              </div>
              <div className='flex justify-between mt-8 items-center'>
                <div className='flex flex-col'>
                  <span className='text-sm text-gray-400'>Item</span>
                  <span className='text-xl'>200</span>
                </div>
                <p className='text-purple-500 text-sm'>
                  Download report
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-block ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.78882 3.87171L5.41679 5.24375V0.833008H4.58345V5.24375L3.21141 3.87171L2.62216 4.46097L5.00012 6.83893L7.37808 4.46097L6.78882 3.87171ZM9.16683 8.33301V6.66634H8.3335V8.33301H1.66683V6.66634H0.833496V8.33301C0.833496 8.79325 1.20659 9.16634 1.66683 9.16634H8.3335C8.79373 9.16634 9.16683 8.79325 9.16683 8.33301Z'
                      fill='#8661FF'
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div style={{ width: '47%' }} className='bg-white rounded-2xl p-8'>
              <div className='flex items-start'>
                <div className='justify-between mr-4'>
                  <h3 className='text-xl'>Orders</h3>
                  <p className='text-sm text-gray-400 pt-4 mr-2'>
                    Here’s a summary of your orders, you can filter the report
                    before downloading.
                  </p>

                  <select className='text-purple-500 px-4 py-1 mt-6 rounded-full inlline-block bg-purple-100'>
                    <option value=''>Filter report</option>
                    <option value='name'>Name</option>
                    <option value='product'>Product</option>
                    <option value='test'>Test</option>
                  </select>
                </div>
                <div className='bg-orange-100 p-4 rounded-full'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 14.2408H8.25V15.7408H9V14.2408ZM21 15.7408H21.75V14.2408H21V15.7408ZM9 19H8.25V19.75H9V19ZM21 19V19.75H21.75V19H21ZM9 11V10.25H8.25V11H9ZM21 11H21.75V10.25H21V11ZM27 7H27.75V6.68934L27.5303 6.46967L27 7ZM21 1L21.5303 0.46967L21.3107 0.25H21V1ZM9 15.7408H21V14.2408H9V15.7408ZM9 19.75H21V18.25H9V19.75ZM9 11.75H21V10.25H9V11.75ZM25 28.25H5V29.75H25V28.25ZM3.75 27V3H2.25V27H3.75ZM26.25 7V27H27.75V7H26.25ZM5 1.75H21V0.25H5V1.75ZM20.4697 1.53033L26.4697 7.53033L27.5303 6.46967L21.5303 0.46967L20.4697 1.53033ZM5 28.25C4.30964 28.25 3.75 27.6904 3.75 27H2.25C2.25 28.5188 3.48122 29.75 5 29.75V28.25ZM25 29.75C26.5188 29.75 27.75 28.5188 27.75 27H26.25C26.25 27.6904 25.6904 28.25 25 28.25V29.75ZM3.75 3C3.75 2.30964 4.30964 1.75 5 1.75V0.25C3.48122 0.25 2.25 1.48122 2.25 3H3.75ZM8.25 11V19H9.75V11H8.25ZM14.25 11V19H15.75V11H14.25ZM20.25 11V19H21.75V11H20.25ZM8 7.75H14V6.25H8V7.75ZM16 23.75H22V22.25H16V23.75Z'
                      fill='#F2994A'
                    />
                  </svg>
                </div>
              </div>
              <div className='flex justify-between mt-8 items-center'>
                <div className='flex flex-col'>
                  <span className='text-sm text-gray-400'>Orders placed</span>
                  <span className='text-xl'>200</span>
                </div>
                <p className='text-purple-500 text-sm'>
                  Download report
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-block ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.78882 3.87171L5.41679 5.24375V0.833008H4.58345V5.24375L3.21141 3.87171L2.62216 4.46097L5.00012 6.83893L7.37808 4.46097L6.78882 3.87171ZM9.16683 8.33301V6.66634H8.3335V8.33301H1.66683V6.66634H0.833496V8.33301C0.833496 8.79325 1.20659 9.16634 1.66683 9.16634H8.3335C8.79373 9.16634 9.16683 8.79325 9.16683 8.33301Z'
                      fill='#8661FF'
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='right flex w-5/12'>
          <div className='bg-white rounded-2xl py-8 px-6 w-full'>
            Transactions
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
