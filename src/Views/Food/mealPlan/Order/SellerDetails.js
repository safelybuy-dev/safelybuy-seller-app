import React from 'react';
import { CloseIcon, UserAvatar } from 'svg';

const KeyValue = ({ title, value }) => (
  <div className='flex my-3 flex-col text-sm'>
    <small className='text-gray-500'>{title}</small>
    <h5 className=''>{value}</h5>
  </div>
);

const SellerDetails = ({ selectedSeller, setSelectedSeller }) => {
  console.log(selectedSeller);
  return (
    <div
      onClick={() => setSelectedSeller(null)}
      className='fixed overflow-scroll top-0 left-0 z-50 w-screen md:pt-40 md:px-40 pt-0 px-0 h-screen bg-purple-600 bg-opacity-30'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col relative md:rounded-3xl rounded-none md:px-10 md:py-10 px-4 py-4 left-0 bg-white opacity-100 min-h-1/2'
      >
        <div className='flex justify-between w-full pb-10 items-start'>
          <h3 className='text-2xl'>User Information</h3>
          <span
            onClick={() => setSelectedSeller(null)}
            className='inline-block cursor-pointer rounded-full bg-red-500 p-3'
          >
            <CloseIcon color='white' />
          </span>
        </div>
        <div className='flex mr-4 md:mr-0 md:flex-col'>
          <div className='flex flex-col border-r md:border-r-0 w-5/12 md:w-full'>
            <div className='flex pb-4 items-center w-full'>
              <UserAvatar scale={4.65} />
              <div className='flex ml-3 flex-col'>
                <p className='text-xl'>{selectedSeller.owner.firstname} {selectedSeller.owner.lastname}</p>
                <p className='text-purple-500'>{selectedSeller.owner.email}</p>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <KeyValue title='Phone Number' value={selectedSeller.owner.phone} />
              <div className='p-4'></div>
              <KeyValue title='Gender' value={selectedSeller.owner.gender} />
            </div>
          </div>
          <div className='flex flex-col w-7/12 ml-10 md:ml-0 md:w-full'>
            <h4 className='text-xl text-purple-500'>Business Information</h4>
            <div className='flex mt-2 border-b mb-6 pb-6'>
              <div className='flex flex-col w-6/12'>
                <KeyValue title='Business Name' value='Chibuzorzeem Limited' />
                <KeyValue
                  title='Tax Identification Number'
                  value='#123234343334444'
                />
                <KeyValue
                  title='Business Registration Number'
                  value='#12239748639748'
                />
                <KeyValue title='VAT Registered' value='NIL' />
              </div>
              <div className='flex flex-col w-6/12'>
                <KeyValue
                  title='Address'
                  value='12 Ipaja roundabout, Lekki palms,Warri, Delta'
                />
                <KeyValue title='Legal Form' value='National ID Card' />
                <KeyValue title='VAT Information File' value='VATinfo.pdf' />
                <KeyValue title='Seller VAT' value='NIL' />
              </div>
            </div>
            <h4 className='text-xl text-purple-500'>Bank Details</h4>
            <div className='flex mt-2'>
              <div className='flex flex-col w-6/12'>
                <KeyValue title='Account Name' value='Kareem Chibuzor' />
                <KeyValue title='Bank Name' value='GTBank' />
              </div>
              <div className='flex flex-col w-6/12'>
                <KeyValue title='Account Number' value='01 2344 3434' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
