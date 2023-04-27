import { useState } from "react";
import moment from "moment";
import TodoList from "../Todo/TodoListPage";

import { 
    year, 
    month, 
    prevMonth, 
    nextMonth } from "../../Util/manageCalendar";
import { 
    HeaderContainer, 
    Button, 
    MonthNavigator, 
    CurrentDate, 
    ButtonsDiv, 
    CalendarWrapper, 
    WeekdayWrapper, 
    DayWrapper, 
    TopDiv, 
    BottomDiv,
    WholeCalendar } from "./FlexCalendarStyle";

function Calendar({ setIsLogin }) {
    const [dateObject, setDateObject] = useState(moment());

    const daysInWeek = moment.weekdaysShort();

    const daysInMonthArr = () => {
        const startOfMonth = moment(dateObject).startOf("month").format("d");
        const daysInMonthArray = [];

        for (let i = 0; i < startOfMonth; i++) {
            daysInMonthArray.push(<DayWrapper key={`empty${i}`} />);
        }

        for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
            daysInMonthArray.push(
                <DayWrapper key={`day${d}`}>
                    <TopDiv>{d}</TopDiv>
                    <BottomDiv>
                    <TodoList
                            moment={{
                                year: year(dateObject),
                                month: month(dateObject),
                                day: d,
                            }}
                        />
                       
                    </BottomDiv>
                </DayWrapper>
            );
        }

        return daysInMonthArray;
    };

    return (
        <WholeCalendar>
            
            <CalendarWrapper>
                <WeekdayWrapper></WeekdayWrapper>
                {daysInWeek.map((day) => (
                    <WeekdayWrapper key={day}>{day}</WeekdayWrapper>
                ))}
                {daysInMonthArr()}
            </CalendarWrapper>
        </WholeCalendar>
    );
}

export default Calendar;
