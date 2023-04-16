import React, { useState, useRef } from "react";
import moment from "moment";
import styled from "styled-components";
import TodoList from "./Todo/TodoListPage";
import { request } from "../api/api";

function Calendar2() {
  const [dateObject, setDateObject] = useState(moment());

  // const todo = async () => request("/202304")
  const todoList = []

  const nextId = useRef(5)

  

  const daysInMonth = () => {
    return dateObject.daysInMonth();
  };

  const currentDay = () => {
    return dateObject.format("D");
  };

  const firstDayOfMonth = () => {
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  const daysInPrevMonth = () => {
    return moment(dateObject).subtract(1, "month").daysInMonth();
  };

  const year = () => {
    return dateObject.format("Y");
  };

  const month = () => {
    return dateObject.format("MMMM");
  };

  const prevMonth = () => {
    return moment(dateObject).subtract(1, "month");
  };

  const nextMonth = () => {
    return moment(dateObject).add(1, "month");
  };

  const blanks = Array.from({ length: firstDayOfMonth() }, (_, i) => (
    <Cells key={`empty-${i}`} className="calendar-day empty">
      <DayTop></DayTop>
      <DayBottom></DayBottom>
    </Cells>
  ));

  let daysInMonthArr = [];
  for (let d = 1; d <= daysInMonth(); d++) {
    // todolist에 넣을 useState
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: '숨쉬기',
        checked: true,
        day: d
      },
      {
        id: 2,
        text: '먹기',
        checked: true,
        day: d
      },
      {
        id: 3,
        text: '잠자기',
        checked: true,
        day: d
      },
      {
        id: 4,
        text: '걷기',
        checked: true,
        day: d
      },
      {
        id: 5,
        text: '뛰기',
        checked: false,
        day: d
      },
    ])
    todoList.push([todos, setTodos])
    daysInMonthArr.push(
      <Cells key={`day-${d}`} className={`calendar-day ${currentDay() === d ? "current-day" : ""}`}>
        <DayTop>{d}</DayTop>
        <DayBottom>
          <TodoList todos={ todoList[d - 1][0] } setTodos={todoList[d - 1][1]}/>
        </DayBottom>
      </Cells>
    );
  }

  const localeWeekdays = moment.weekdaysShort();
  const weekdayHeaders = localeWeekdays.map((day) => (
    <TableHeader key={`header-${day}`} className="week-day">
      {day}
    </TableHeader>
  ));

  const rows = [];
  let cells = [...blanks, ...daysInMonthArr];
  while (cells.length) {
    rows.push(cells.splice(0, 7));
  }

  return (
    <div>
      <TableHeader colSpan="7">
        {month()} {year()}
      </TableHeader>
      <button onClick={() => setDateObject(prevMonth)}>이전 달</button>
      <button onClick={() => setDateObject(nextMonth)}>다음 달</button>

      <table className="calendar">
        <thead>
          <tr>{weekdayHeaders}</tr>
        </thead>
        <tbody>
          {rows.map((d, i) => {
            return (
              <tr key={`row-${i}`}>
                {d}
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
}

const TableHeader = styled.th`
  height: 50px;
  border: black solid 1px;

`;

const Cells = styled.td`
  height: 100px;
  width: 100px;
  color: black;
  border: black solid 1px;
`;

const DayTop = styled.div`
  height: 30%;
  background-color: green;
`;

const DayBottom = styled.div`
  height: 70%;
  background-color: blue;
`;

export default Calendar2