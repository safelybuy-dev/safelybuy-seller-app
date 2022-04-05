import React from 'react';
import Breadcrumb from 'components/Breadcrumb';
// import { ArrowRight } from 'svg';
import Highlight from '../Dashboard/Main/Highlight';
import RecentSalesTable from './RecentSales';

function Shopping() {
  return (
    <div className="flex flex-col w-full items-start">
      <Breadcrumb parentText="Shopping" parentLink="/shopping" />
      <div className="flex pt-12 w-full md:flex-col md:items-center">
        <div className="tracking-wide md:w-6/12 sm:w-10/12">
          <Highlight />
        </div>
        <div
          className="mx-4 md:-mx-6 md:mt-6 md:bg-white md:py-8 md:px-4"
          style={{ width: 'calc(100% + 3rem)' }}>
          <h3 className="text-2xl md:pb-6 md:bg-white tracking-wider">
            Recent Sales
          </h3>
          <div className="mt-5 py-8 px-10 md:py-0 md:px-0 md:mt-0 rounded-3xl md:rounded-none bg-white">
            <RecentSalesTable />
            {/* <div className='flex justify-between mt-8 pb-8 w-full'>
              <span className='text-gray-500'>Showing 8 of 100</span>
              <div className='flex items-center text-purple-500'>
                See all &nbsp; <ArrowRight />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
