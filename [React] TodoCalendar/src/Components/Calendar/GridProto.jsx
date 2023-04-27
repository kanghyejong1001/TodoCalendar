import React, { useState } from 'react';
import moment from 'moment';
import {
  CalendarWrapper,
  WeekdayWrapper,
  DayWrapper,
  TopDiv,
  BottomDiv,
  NavButton,
  CalendarHeader,
  HeaderCenter,
  YearMonth,
  NowButton
} from "./GridProtoStyles";
import TodoList from "../Todo/TodoListPage";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const daysInWeek = moment.weekdaysShort();


  const daysInMonth = () => {
    const daysInMonthArr = [];

    const startOfMonth = moment(currentDate).startOf('month').format('d');

    for (let i = 0; i < startOfMonth; i++) {
      daysInMonthArr.push(<DayWrapper key={`empty${i}`} />);
    }

    for (let d = 1; d <= moment(currentDate).daysInMonth(); d++) {
      daysInMonthArr.push(
        <DayWrapper key={`day${d}`}>
            <TopDiv>{d}</TopDiv>
            <BottomDiv>
              <TodoList moment={{
                year: year(dateObject),
                month: month(dateObject),
                day: d
              }} />
            </BottomDiv>
        </DayWrapper>
      );
    }

    return days;
  };


  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'month'));
  };

  const handleReturnToCurrentMonth = () => {
    setCurrentDate(moment());
  };

  return (
    <>
      <CalendarHeader>
        <HeaderCenter>
          <NavButton onClick={handlePrevMonth}>&lt;</NavButton>
          <YearMonth>{currentDate.format('YYYY년 M월')}</YearMonth>
          <NavButton onClick={handleNextMonth}>&gt;</NavButton>
        </HeaderCenter>
        <NowButton className='CurrentMonth' onClick={handleReturnToCurrentMonth}>오늘</NowButton>
      </CalendarHeader>
      <CalendarWrapper>
        {daysInWeek.map((day) => (
          <WeekdayWrapper key={day}>{day}</WeekdayWrapper>
        ))}
        {daysInMonth()}
      </CalendarWrapper>
    </>
  );
};

export default Calendar;