import React, { useState } from "react";
import { Times } from "svg";
import DatePicker from "react-datepicker";
import "./sortmeal.css";

function SortMealModal({ setTriggerSort, items }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div
      className="h-screen p-[6rem] w-screen fixed top-0 left-0 overflow-scroll bg-purple-600 bg-opacity-30 z-50 flex justify-end"
      onClick={() => setTriggerSort(false)}
    >
      <div
        className="bg-[#F6F5FF]  w-[400px] p-6 h-[950px]  relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-3 -right-2">
          <button
            className="rounded-[50%] bg-[#EB5757] p-2"
            onClick={() => setTriggerSort(false)}
          >
            <Times color="#fff" />
          </button>
        </div>
        <div className="w-[95%] m-auto bg-white h-full">
          <div className="bg-[#8661ff26] h-16 px-8 flex justify-between items-center text-sm">
            <div className="flex ">
              <button className="text-[#8661FF] mr-3">
                {" "}
                <Times />{" "}
              </button>
              <button className="text-[#8661FF]">Sort</button>
            </div>
            <button className="bg-[#eb575726] rounded-full w-24 py-1 text-xs text-[#EB5757] tracking-[0.04em]">
              Clear all
            </button>
          </div>
          <div className="mx-8 mt-5 pb-5 border-b-[1.3278px] border-[#E0E0E0]">
            <h4 className="mb-4">Meal Title</h4>
            {items.map(({ meal_plan: { name } }, index) => (
              <div key={index} className="mb-1 flex  items-center">
                <input type="checkbox" className="mr-3" />
                <label className="text-sm">{name}</label>
              </div>
            ))}
          </div>
          <div className="mx-8 mt-5 pb-5 border-b-[1.3278px] border-[#E0E0E0]">
            <h4 className="mb-4">Date</h4>
            <div className="border-[#8661FF] border-[1.5px] h-[320px] rounded border-opacity-[0.2] overflow-hidden p-4">
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </div>
          </div>
          <div className="mx-8 mt-5 pb-5 border-b-[1.3278px] border-[#E0E0E0]">
            <h4 className="mb-4">Delivery Time</h4>
            {["12pm - 2pm", "2pm - 4pm"].map((time, index) => (
              <div key={index} className="mb-1">
                <input type="checkbox" className="mr-3" />
                <label className="text-sm">{time}</label>
              </div>
            ))}
          </div>
          <div className="my-8 flex justify-center items-center">
            <button className="rounded-full w-3/5 text-white bg-[#8661FF] py-[0.5rem] ">
              Sort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortMealModal;
