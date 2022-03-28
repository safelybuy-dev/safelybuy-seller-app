import React, { useState } from "react";
import { Times } from "svg";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function SortMealModal({ setTriggerSort, items }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [selectedPlans, setSelectedPlans] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);

  console.log(state);

  return (
    <div
      className="h-screen p-[6rem] w-screen fixed top-0 left-0 overflow-scroll bg-purple-600 bg-opacity-30 z-50 flex justify-end"
      onClick={() => setTriggerSort(false)}
    >
      <div
        className="bg-[#F6F5FF]  w-[contain] p-6 h-[1000px]  relative flex flex-col justify-center"
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
        <div className="w-[full] m-auto bg-white h-full">
          <div className="bg-[#8661ff26] h-16 px-8 flex justify-between items-center text-sm">
            <div className="flex ">
              <button className="text-[#8661FF] mr-3">
                {" "}
                <Times />{" "}
              </button>
              <button className="text-[#8661FF]">Filter</button>
            </div>
            <button className="bg-[#eb575726] rounded-full w-24 py-1 text-xs text-[#EB5757] tracking-[0.04em]">
              Clear all
            </button>
          </div>
          <div className="mx-8 mt-5 pb-5 border-b-[1.3278px] border-[#E0E0E0]">
            <h4 className="mb-4">Meal Title</h4>
            {items.map(({ meal_plan: { name } }, index) => (
              <div key={index} className="mb-1 flex  items-center">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const selectedMealPlan = selectedPlans.find(
                      (plan) => plan === e.target.value
                    );

                    if (!selectedMealPlan)
                      setSelectedPlans([...selectedPlans, e.target.value]);
                    else {
                      const filteredPlans = selectedPlans.filter(
                        (plan) => plan !== e.target.value
                      );
                      setSelectedPlans(filteredPlans);
                    }
                  }}
                  value={name}
                  className="mr-3 appearance-none h-[15px] w-[15px] checked:bg-[#4BBF75] border border-[#a7a7a7] rounded-[3px] cursor-pointer border-opacity-[0.4]"
                />
                <label className=" font-[600] text-[14px]">{name}</label>
              </div>
            ))}
          </div>
          <div className="mx-8 mt-5 pb-5 border-b-[1.3278px] border-[#E0E0E0]">
            <h4 className="mb-4">Delivery Date</h4>
            <div className="border-[#8661FF] border-[1.5px]  rounded border-opacity-[0.2]  p-4">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          </div>
          <div className="mx-8 mt-5 pb-5 border-b-[1.3278px] border-[#E0E0E0]">
            <h4 className="mb-4">Delivery Time</h4>
            {items.map(({ delivery_time }, index) => (
              <div key={index} className="mb-1">
                <input
                  type="checkbox"
                  className="mr-3 appearance-none h-[15px] w-[15px] checked:bg-[#4BBF75] border border-[#a7a7a7] rounded-[3px] cursor-pointer border-opacity-[0.4]"
                />
                <label className="font-[600] text-[14px]">
                  {delivery_time}
                </label>
              </div>
            ))}
          </div>
          <div className="my-8 flex justify-center items-center">
            <button className="rounded-full w-3/5 text-white bg-[#8661FF] py-[0.5rem] ">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortMealModal;
