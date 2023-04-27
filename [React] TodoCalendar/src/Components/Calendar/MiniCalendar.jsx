import { useState } from "react";
import moment from "moment";

import {
    year,
    month,
    prevMonth,
    nextMonth
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
    ViewChangeButton,
    HeaderTop,
    HeaderBottom


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
                    <TopDiv>{d}</TopDiv>
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
                    <ViewChangeButton>
                        <Button>
                            Day
                        </Button>
                        <Button>
                            Week
                        </Button>
                        <Button>
                            Month
                        </Button>
                        <Button>
                            +
                        </Button>
                    </ViewChangeButton>
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
