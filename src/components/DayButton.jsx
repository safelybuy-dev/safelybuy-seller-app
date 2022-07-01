import React from 'react';

function DayButton({ day, handleDays, days, setDays }) {
  // const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className={`
      ${
        days[day] ? 'bg-purple-600' : 'bg-[#c4c4c44d]'
      } py-1 px-2 mr-2 mb-2  text-sm ${
        days[day] ? 'text-white' : 'text-[#828282]'
      } font-medium rounded cursor-pointer tracking-[0.04em] capitalize`}
      onClick={(e) => {
        e.preventDefault();
        setDays((prev) => ({ ...prev, [day]: day }));
        handleDays(days[day], day);
      }}>
      {day}
    </button>
  );
}

export default React.memo(DayButton);
