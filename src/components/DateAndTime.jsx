import { useState, useEffect } from "react";

const DateAndTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col">
      <span className="text-sm opacity-85">{formattedDate}</span>
      {/* <span className="text-lg font-medium">{formattedTime}</span> */}
    </div>
  );
};

export default DateAndTime;
