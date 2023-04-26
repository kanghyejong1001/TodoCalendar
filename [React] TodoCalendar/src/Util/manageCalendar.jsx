import moment from "moment";

export const daysInMonth = (dateObject) => {
  return dateObject.daysInMonth();
};

export const currentDay = (dateObject) => {
  return dateObject.format("D");
};

export const firstDayOfMonth = (dateObject) => {
  let firstDay = moment(dateObject).startOf("month").format("d");
  return firstDay;
};

export const daysInPrevMonth = (dateObject) => {
  return moment(dateObject).subtract(1, "month").daysInMonth();
};

export const year = (dateObject) => {
  return dateObject.format("Y");
};

export const month = (dateObject) => {
  return dateObject.format("M");
};

export const prevMonth = (dateObject) => {
  return moment(dateObject).subtract(1, "month");
};

export const nextMonth = (dateObject) => {
  return moment(dateObject).add(1, "month");
};
