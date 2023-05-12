import { useState } from "react";

const getCurrentDate = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let today = new Date();

  return {
    day: weekday[today.getDay()],
    month: {
      full: month[today.getMonth() + 1],
      short: month_short[today.getMonth() + 1],
    },
    year: today.getFullYear(),
    date: today.getDate(),
    time: {
      hour: today.getHours(),
      minute: today.getMinutes(),
      second: today.getSeconds(),
    },
  };
};

function Content() {
  const [currentDate, setCurrentDate] = useState(getCurrentDate);

  console.log("currentDate: " + currentDate.month.hour);

  return (
    <div className="w-full h-full py-20 px-6">
      <div className="w-full h-full flex flex-col lg:flex-row gap-4 overflow-y lg:overflow-y-none">
        {/* summarize of today */}
        <div className="h-full w-full lg:w-2/3 flex flex-col justify-center items-center rounded-md shadow-sm gap-4">
          {/* weather today summary */}
          <div className="h-full w-full flex flex-row gap-4">
            {/* temperature card */}
            <div className="w-1/2 flex flex-col justify-center items-center rounded-md shadow-sm bg-white p-4">
              {/* current data and time */}
              <div className="w-full h-1/3 boder-b-2 border-slate-500 flex justify-center items-center text-xl text-slate-500">
                {`${currentDate.day}, ${currentDate.date} ${currentDate.month.short} ${currentDate.year}`}
              </div>

              {/* temperature summary */}
              <div className="w-full h-2/3 flex gap-2">
                {/* image icon */}
                <div className="w-1/2 h-full flex justify-center items-center bg-green-100">
                  icon
                </div>
                <div className="w-1/2 h-full flex justify-center items-center bg-blue-100">
                  value
                </div>
              </div>
            </div>
            {/* other values card */}
            <div className="w-1/2 flex justify-center items-center rounded-md shadow-sm bg-white"></div>
          </div>

          {/* weather forecast folloe time period */}
          <div className="h-full w-full flex justify-center items-center rounded-md shadow-sm bg-white">
            forecast time priod
          </div>

          {/* aqi */}
          <div className="h-full w-full flex flex-row gap-4">
            {/* today aqi at current location */}
            <div className="w-1/3 flex justify-center items-center rounded-md shadow-sm bg-white"></div>
            {/* top 5 state of bad aqi in current location country */}
            <div className="w-1/3 flex justify-center items-center rounded-md shadow-sm bg-white"></div>
            {/* top 5 country of bad aqi */}
            <div className="w-1/3 flex justify-center items-center rounded-md shadow-sm bg-white"></div>
          </div>
        </div>
        {/* forecast inthis week or next 5 days */}
        <div className="h-1/3 lg:h-full w-full lg:w-1/3 flex rounded-md shadow-sm bg-white p-4">
          <p className="w-full font-semibold text-slate-500">This Week</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
