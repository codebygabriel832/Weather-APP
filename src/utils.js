export const getDate = () => {
  const monthNames = [
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
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date();
  const dayName = weekDays[date.getDay()];
  const monthName = monthNames[date.getMonth()];
  const today = date.getDate();
  return `${dayName}, ${monthName} ${today}`;
};

export const tempConversion = (temp) => {
  return Math.floor(((temp - 32) * 5) / 9);
};
