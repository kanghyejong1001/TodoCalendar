import { useState, useRef } from "react";
import { request } from "../../api/api";
import { currentDay } from "../../Util/manageCalendar";

// locatStorage 사용법
// 삭제
// localStorage.removeItem('key')

// 읽기
// JSON.parse(localStorage.getItem('Key'))

// 저장
// localStorage.setItem('Key', JSON.stringify('Value'))

function Dday({}) {
    if(!JSON.parse(localStorage.getItem('Dday'))) {localStorage.setItem('Dday', JSON.stringify([]))}
    const [Ddays, setDdays] = useState(JSON.parse(localStorage.getItem('Dday')))
    // const [Ddays, setDdays] = useState([
    //     {
    //         id: 1,
    //         text: '숨쉬기',
    //         moment: {
    //             year: 2023,
    //             month: 4,
    //             day: 1
    //         }
    //     },
    //     {
    //         id: 2,
    //         text: '먹기',
    //         moment: {
    //             year: 2023,
    //             month: 4,
    //             day: 30
    //         }
    //     },
    //     {
    //         id: 3,
    //         text: '잠자기',
    //         moment: {
    //             year: 2023,
    //             month: 5,
    //             day: 1
    //         }
    //     }
    // ])
    
    // console.log(`/todos/${year(dateObject)}${month(dateObject)}${currentDay(dateObject)}`)
    // const res = async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`)
    // const [Dday, setDday] = useState(res)


    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const nextId = useRef()

    const onDelete = (id) => {
        setDdays(
            Ddays.filter(todo => todo.id !== id)
        )
        if (Dday.length === 1) {
            nextId.current = 0
        }
        let currentDday = JSON.parse(localStorage.getItem('Dday'))
        currentDday = currentDday.filter(item => item.id !== id)
        localStorage.setItem('Dday', JSON.stringify(currentDday))
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, { method: 'DELETE' })
    }
    
    
    const onChange = (e) => {
        let {name, value} = e.target
        name === 'content'
        ? setText(value)
        : setDate(value)
    }

    const onUpdate = (id, text) => {
        setDdays(
            Ddays.map(item => {
                if (item.id === id) {
                    item.text = text
                }
                return item
            })
        )
        // JSON.parse(localStorage.getItem('Key'))
        // localStorage.setItem('Key', JSON.stringify('Value'))
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'PUT', 
        //     body: {
        //         todos
        //     } 
        // })
    }

    const onSubmit = (e) => {
        onInsert(text, date)
        setText('')
        setDate('')
        e.preventDefault()
    }

    const onInsert = (text, date) => {
        console.log(date)
        console.log(date.substring(0, 4), date.substring(4, 6), date.substring(6, 8))
        console.log(nextId.current)
        setDdays(
            Ddays.concat([
                {
                    id: ++nextId.current,
                    text: text,
                    moment: {
                        year: date.substring(0, 4),
                        month: date.substring(4, 6),
                        day: date.substring(6, 8),
                    }
                }
            ])
        )
        let currentDday = JSON.parse(localStorage.getItem('Dday'))
        currentDday.push(
            { 
                id: nextId.current, 
                text: text, 
                moment: {
                    year: date.substring(0, 4),
                    month: date.substring(4, 6),
                    day: date.substring(6, 8),
                }
            }
        )
        console.log(Ddays)
        localStorage.setItem('Dday', JSON.stringify(currentDday))
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'POST', 
        //     body: {
        //         todos
        //     } 
        // })
    }
    
    return (  
        <div>
            <div key={nextId.current}>
                <form onSubmit={onSubmit}>
                    <input
                        name="date"
                        type="text" 
                        placeholder="날짜 입력"
                        value={date}
                        onChange={onChange}
                        autoComplete="off"
                    />
                    <input 
                        name="content"
                        type="text" 
                        placeholder="텍스트 입력"
                        value={text}
                        onChange={onChange}
                        autoComplete="off"
                    />
                    <button type="submit">save</button>
                </form>
            </div>        

            {Ddays.map((Dday, index) => {
                const today = new Date().getTime()
                const checkedDay = new Date(Dday.moment.year, Dday.moment.month - 1, Dday.moment.day).getTime()
                let gap
                gap = Math.floor((today - checkedDay) / (1000 * 60 * 60 * 24))

                return (
                    <div key={Dday.id}>
                        D{(gap > 0 ? "+" + gap : gap) + ' ' + Dday.text}
                        <button onClick={() => onDelete(Dday.id)}>X</button>    
                    </div>
            )})}
            <button className="LogButton" onClick={() => { console.log(Ddays) }}>출력</button>
        </div>
    );
}

export default Dday;
