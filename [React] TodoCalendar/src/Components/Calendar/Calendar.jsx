import React, { useState, useRef, useMemo } from "react";
import { TableHeader, HeaderContainer, Cells, DayTop, DayBottom } from "./CalendarStyle";
import { daysInMonth, currentDay, firstDayOfMonth, daysInPrevMonth, year, month, prevMonth, nextMonth } from "../../Util/manageCalendar";
import { request } from "../../api/api";
import moment from "moment";
import TodoList from "../Todo/TodoListPage";

function Calendar({setIsLogin}) {
    const [dateObject, setDateObject] = useState(moment());
    const todoList = []
    
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
                    <TodoList moment={ {
                        year: year(dateObject), 
                        month: month(dateObject), 
                        day: d} }/>
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
            <button onClick={() => setIsLogin(false)}>logout</button>
            <HeaderContainer>
                <div className="month-buttons">
                    <button onClick={() => setDateObject(prevMonth(dateObject))}>이전 달</button>
                    <button onClick={() => setDateObject(nextMonth(dateObject))}>다음 달</button>
                </div>
            </HeaderContainer>
            <table className="calendar">
                <thead>
                    <tr>
                        <TableHeader colSpan="7" className="month-header">
                            {dateObject.format("Y년 M월")}
                        </TableHeader>
                    </tr>
                </thead>
                <tbody>
                <tr>{weekdayHeaders}</tr>
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

export default Calendar