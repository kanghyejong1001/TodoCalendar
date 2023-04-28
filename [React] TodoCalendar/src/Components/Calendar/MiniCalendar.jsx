import { useState } from "react";
import moment from "moment";

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
    CurrentDate,
    CalendarWrapper,
    WeekdayWrapper,
    DayWrapper,
    TopDiv,
    BottomDiv,
    WholeCalendar,
    ViewChangeDiv,
    HeaderTop,
    HeaderBottom,
    TodayMark


} from "./MiniCalendarStyle";

function MiniCalendar() {
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
                    <TopDiv>
                        <TodayMark 
                        isToday={d === parseInt(currentDay(dateObject)) ? true : false}>
                            {d}
                        </TodayMark>
                    </TopDiv>
                    <BottomDiv>
                    </BottomDiv>
                </DayWrapper>
            );
        }

        return daysInMonthArray;
    };

    return (
        <WholeCalendar>
            <HeaderContainer>
                <HeaderTop>
                    <ViewChangeDiv>
                        <Button>
                            Day
                        </Button>
                        <Button>
                            Week
                        </Button>
                        <Button>
                            Month
                        </Button>
                    </ViewChangeDiv>
                    <Button className="Plus">
                        +
                    </Button>
                </HeaderTop>
                <HeaderBottom>
                    <Button className="LeftButton" onClick={() => setDateObject(prevMonth(dateObject))}>
                    </Button>
                    <CurrentDate>{dateObject.format("Y년 M월")}</CurrentDate>
                    <Button className="RightButton" onClick={() => setDateObject(nextMonth(dateObject))}>
                    </Button>

                </HeaderBottom>

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

export default MiniCalendar;
