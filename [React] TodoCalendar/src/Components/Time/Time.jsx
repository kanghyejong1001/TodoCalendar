import React, { useState, useEffect } from 'react';
import moment from 'moment';
import "moment/locale/ko";

import {
    TimeDiv,
    DateDiv,
    TimeAndDate,
    TopDiv,
    BottomDiv,
    Separator
} from "./TimeStyle.jsx";

import {
    currentDay,
    year,
    month,
    day
} from "./../../Util/manageCalendar.jsx"


export default function Time() {
    const [timer, setTimer] = useState("00:00:00");
    const [dayOfTheWeek, setDayOfTheWeek] = useState("");
    const [intervalId, setIntervalId] = useState(null);


    useEffect(() => {
        const id = setInterval(() => {

            const now = moment();
            now.hour(2);
            const hours = String(now.hours() % 12 || 12).padStart(2, " ");
            const minutes = String(now.minutes()).padStart(2, "0");
            const seconds = String(now.seconds()).padStart(2, "0");
            const amPm = now.format("a").toUpperCase();
            setTimer(`${hours}:${minutes}:${seconds} ${amPm}`);
        }, 1000);

        const day = new Date().toLocaleDateString("ko-KR", { weekday: "long" });

        setDayOfTheWeek(day);

        setIntervalId(id);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <TimeAndDate>
            <TimeDiv>
                <TopDiv>현재 시간은</TopDiv>
                <BottomDiv>{timer}</BottomDiv>
            </TimeDiv>
            <Separator></Separator>
            <DateDiv>
                <TopDiv>{year(moment())}년 {month(moment())}월 {day(moment())}일</TopDiv>
                <BottomDiv>{dayOfTheWeek}</BottomDiv>
            </DateDiv>
        </TimeAndDate>
    );
}


