import React, { useState, useRef, useMemo } from "react";
import moment from "moment";
import styled from "styled-components";
import TodoList from "../Todo/TodoListPage";
import { request } from "../../api/api";
import { daysInMonth, currentDay, firstDayOfMonth, daysInPrevMonth, year, month, prevMonth, nextMonth } from "../../Util/manageCalendar";

function Calendar() {
    const [dateObject, setDateObject] = useState(moment());
    
    const todoList = []
    const nextId = useRef(5)
    
    // 달력에 빈칸 부분
    const blanks = Array.from({ length: firstDayOfMonth(dateObject) }, (_, i) => (
        <Cells key={`empty-${i}`} className="calendar-day empty">
            <DayTop></DayTop>
            <DayBottom></DayBottom>
        </Cells>
    ));

    // // 달력에 날짜가 있는 부분
    let daysInMonthArr = [];
    // // useMemo(() => setTodoList([]), [dateObject])
    for (let d = 1; d <= daysInMonth(dateObject); d++) {
        
        daysInMonthArr.push(
            <Cells key={`day-${d}`} className={`calendar-day ${currentDay(dateObject) === d ? "current-day" : ""}`}>
                <DayTop>{d}</DayTop>
                <DayBottom>
                    <TodoList day={ d }/>
                </DayBottom>
            </Cells>
        );
    }
    
    // 헤더에 넣을 요일을 읽어오는 부분
    const localWeekdays = moment.weekdaysShort();
    const weekdayHeaders = localWeekdays.map((day) => (
        <TableHeader key={`header-${day}`} className="week-day">
        {day}
        </TableHeader>
    ));
    
    // rows에 앞에서 만든 빈칸들을 7개씩 잘라서 저장
    const rows = [];
    let cells = [...blanks, ...daysInMonthArr];
    while (cells.length) {
        rows.push(cells.splice(0, 7));
    }

    return (
        <div>
        <div colSpan="7">
            {month(dateObject)} {year(dateObject)}
        </div>

        <button onClick={() => setDateObject(prevMonth)}>이전 달</button>
        <button onClick={() => setDateObject(nextMonth)}>다음 달</button>

        <table className="calendar">
            <thead>
            <tr>{weekdayHeaders}</tr>
            </thead>
            <tbody>
            {rows.map((d, i) => {
                return (
                <tr key={`row-${i}`}>{d}</tr>
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

export default Calendar