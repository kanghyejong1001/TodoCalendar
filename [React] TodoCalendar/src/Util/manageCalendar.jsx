import moment from "moment";

const daysInMonth = (dateObject) => {
  return dateObject.daysInMonth();
};

const currentDay = (dateObject) => {
  return dateObject.format("D");
};

const firstDayOfMonth = (dateObject) => {
  let firstDay = moment(dateObject).startOf("month").format("d");
  return firstDay;
};

const daysInPrevMonth = (dateObject) => {
  return moment(dateObject).subtract(1, "month").daysInMonth();
};

const year = (dateObject) => {
  return dateObject.format("Y");
};

const month = (dateObject) => {
  return dateObject.format("M");
};

const day = (dateObject) => {
  return dateObject.format("D");
};


const prevMonth = (dateObject) => {
  return moment(dateObject).subtract(1, "month");
};

const nextMonth = (dateObject) => {
  return moment(dateObject).add(1, "month");
};

export {
  daysInMonth,
  currentDay,
  firstDayOfMonth,
  daysInPrevMonth,
  year,
  month,
  day,
  prevMonth,
  nextMonth
};