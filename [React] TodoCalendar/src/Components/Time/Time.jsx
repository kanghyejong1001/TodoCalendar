import React, { useState, useEffect  } from 'react';
import { TimeDiv } from "./TimeStyle.jsx";


export default function Time() {
    const [timer, setTimer] = useState("00:00:00");
    const [intervalId, setIntervalId] = useState(null); // 

    useEffect(() => {
        const id = setInterval(() => {
            const date = new Date();
            const hours = String(date.getHours() % 12 || 12).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2, "0");            
            const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
            setTimer(`${hours}:${minutes}:${seconds} ${amPm}`);
        }, 1000);

        setIntervalId(id);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <TimeDiv>
            <div>현재 시간은 : {timer}</div>
        </TimeDiv>
    )
}

