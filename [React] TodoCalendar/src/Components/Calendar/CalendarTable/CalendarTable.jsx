import React, { useState, useRef, useMemo } from "react";
import { TableHeader, HeaderContainer, DayTop, DayBottom, DayWrapper, OuterBox, Row, Button, MonthNavigator, CurrentDate, ButtonsDiv, OneDay } from "./CalendarTableStyle";

import { daysInMonth, currentDay, firstDayOfMonth, daysInPrevMonth, year, month, prevMonth, nextMonth } from "../../../Util/manageCalendar";
import moment from "moment";
import TodoList from "../../Todo/TodoListPage";

function Calendar({ setIsLogin }) {
    const [dateObject, setDateObject] = useState(moment());

    // 헤더에 넣을 요일을 읽어오는 부분
    const localWeekdays = moment.weekdaysShort();
    const weekdayHeaders = localWeekdays.map((day) => (
        <TableHeader key={`header-${day}`} className="week-day">
            {day}
        </TableHeader>
    ));

    // 달력에 빈칸 부분
    const blanks = Array.from({ length: firstDayOfMonth(dateObject) }, (_, i) => (
        <DayWrapper key={`empty-${i}`} className="calendar-day empty">
        </DayWrapper>
    ));

    const dragIndex = useRef()
    const dragTodo = useRef()
    const dragId = useRef()
    const dragMoment = useRef()
    const dragDelete = useRef()

    // // 달력에 날짜가 있는 부분
    let daysInMonthArr = [];
    // // useMemo(() => setTodoList([]), [dateObject])
    for (let d = 1; d <= daysInMonth(dateObject); d++) {
        daysInMonthArr.push(
            <DayWrapper key={`day-${d}`} className={`calendar-day ${currentDay(dateObject) === d ? "current-day" : ""}`}>
                <OneDay>
                    <DayTop>{d}</DayTop>
                    <DayBottom>
                        <TodoList 
                            moment={
                                {
                                    year: year(dateObject),
                                    month: month(dateObject),
                                    day: d
                                }
                            } 
                            dateObject={dateObject}
                            dragIndex={dragIndex}
                            dragTodo={dragTodo}
                            dragId={dragId}
                            dragMoment={dragMoment}
                            dragDelete={dragDelete}
                        />
                    </DayBottom>
                </OneDay>
            </DayWrapper>
        );
    }

    // rows에 앞에서 만든 빈칸들을 7개씩 잘라서 저장
    const rows = [];
    let cells = [...blanks, ...daysInMonthArr];
    while (cells.length) {
        rows.push(cells.splice(0, 7));
    }

    return (
        <OuterBox>

            <HeaderContainer>
            <CurrentDate>{dateObject.format("Y년 M월")}</CurrentDate>
                <ButtonsDiv>
                    <Button onClick={() => setIsLogin(false)}>logout</Button>
                    <MonthNavigator>
                        <Button onClick={() => setDateObject(prevMonth(dateObject))}>
                            {`${prevMonth(dateObject).format("M")}월`}
                        </Button>
                        <Button onClick={() => setDateObject(moment())}>이번 달</Button>
                        {/* {`${moment().format("M")}`}  현재 달을 더하고 싶다면 사용*/}
                        <Button onClick={() => setDateObject(nextMonth(dateObject))}>
                            {`${nextMonth(dateObject).format("M")}월`}
                        </Button>
                    </MonthNavigator>
                </ButtonsDiv>
                
            </HeaderContainer>

            <table className="calendar">
                <thead>
                    <Row>{weekdayHeaders}</Row>
                </thead>

                <tbody>
                    {rows.map((d, i) => {
                        return (
                            <tr key={`row-${i}`} className="dayNumber">{d}</tr>
                        )
                    })}
                </tbody>
            </table>
        </OuterBox>
    );
}

export default Calendar