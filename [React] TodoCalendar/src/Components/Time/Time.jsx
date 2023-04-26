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
        <>
        <TimeDiv>
            <div>현재 시간은 : </div>
            <div>{timer}</div>
        </TimeDiv>
        </>
    )
}


// 시간의 깜박임은 모든 렌더에서 setInterval 함수가
// 호출되기 때문일 수 있습니다. 즉, 여러 간격이 동시에
// 실행되고 상태가 업데이트되어 깜박임 효과가 발생합니다.

// 이 문제를 해결하려면 clear를 사용하여 구성 요소가
// 마운트 해제되는 간격을 지워야 합니다Interval() 메서드입니다.
// 간격 ID를 상태 변수에 저장하고 useEffect 정리 기능에서 삭제하면 됩니다.

// 이 예에서는 setInterval()에 의해 반환된 간격 ID를
// 상태 변수 intervalId에 저장합니다. 그런 다음 clear를
// 사용하여 useEffect 정리 함수의 간격을 지웁니다간격(intervalId)입니다.
// 추가로, 우리는 12시에 0이 아닌 12시로 모듈로 12시를
// 표시하도록 시간 계산 시간을 수정했습니다.