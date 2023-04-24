import React, { useState } from 'react';
import { TimeDiv } from "./TimeStyle.jsx";


export default function Time() {
    const [timer, setTimer] = useState("00:00:00");

        const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()

    return (
        <>
        <TimeDiv>
            <div>현재 시간은 : </div>
            <div>{timer}</div>
        </TimeDiv>
        </>
    )
}