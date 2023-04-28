import { useState, useRef } from "react";
import moment from "moment";
import TodoList from "../TodoList/TodoListPage";

import {
    year,
    month,
    prevMonth,
    nextMonth,
    currentDay
} from "../../Util/manageCalendar";
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
    WholeCalendar
} from "./CalendarStyle";

import {
    year,
    month,
    prevMonth,
    nextMonth
} from "../../Util/manageCalendar";
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
    WholeCalendar
} from "./CalendarStyle";

function Calendar({ setIsLogin }) {
    const [dateObject, setDateObject] = useState(moment());

    const daysInWeek = moment.weekdaysShort();


    const daysInMonthArr = () => {
        const startOfMonth = moment(dateObject).startOf("month").format("d");
        const daysInMonthArray = [];
        
        // 빈칸
        for (let i = 0; i < startOfMonth; i++) {
            daysInMonthArray.push(<DayWrapper key={`empty${i}`} />);
        }
        
        // 날짜
        for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
            daysInMonthArray.push(
                <DayWrapper key={`day${d}`}>
                    <TopDiv>{d}</TopDiv>
                    <BottomDiv>
                        <TodoList
                            moment={
                                {
                                    year: year(dateObject),
                                    month: month(dateObject),
                                    day: d,
                                }
                            }
                            dragIndex={dragIndex}
                            dragTodo={dragTodo}
                            dragId={dragId}
                            dragMoment={dragMoment}
                            dragDelete={dragDelete}
                        />
                    </BottomDiv>
                </DayWrapper>
            );
        }

        return daysInMonthArray;
    };

    return (
        <WholeCalendar>
            <HeaderContainer>
                <CurrentDate>{dateObject.format("Y년 M월")}</CurrentDate>
                <ButtonsDiv>
                    <MonthNavigator>
                        <Button onClick={() => setDateObject(prevMonth(dateObject))}>
                            {`${prevMonth(dateObject).format("M")}월`}
                        </Button>
                        <Button onClick={() => setDateObject(moment())}>이번 달</Button>
                        <Button onClick={() => setDateObject(nextMonth(dateObject))}>
                            {`${nextMonth(dateObject).format("M")}월`}
                        </Button>
                    </MonthNavigator>
                </ButtonsDiv>
            </HeaderContainer>

            <CalendarWrapper>
                {daysInWeek.map((day) => (
                    <WeekdayWrapper key={day}>{day}</WeekdayWrapper>
                ))}
                {daysInMonthArr()}
            </CalendarWrapper>
        </WholeCalendar>
    );
}

export default Calendar;
