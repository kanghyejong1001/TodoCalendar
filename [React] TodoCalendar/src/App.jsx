import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useRef, useState } from "react"
import LoginForm from "./Components/Login/LoginForm";
import SignUpForm from "./Components/Login/SignUpForm";
import {
  Body,
  CalendarDiv,
  TimeDiv,
  LogoutDiv,
  LogoutButton,
  TodoDiv,
  DdayDiv,
  BookmarkDiv
} from "./AppStyle.jsx";
import Time from "./Components/Time/Time";
import BookMark from "./Components/BookMark/BookMark";
import Dday from "./Components/Dday/Dday";
import MiniCalendar from "./Components/Calendar/MiniCalendar";
import Calendar from "./Components/Calendar/Calendar";
import TodayTodoList from "./Components/TodayTodoList/TodayTodoList";

function App() {
  const [checkId, setCheckId] = useState(true)
  const [isLogin, setIsLogin] = useState(true)
  // <button onClick=get()>GET</button>
  // <button onClick=post()>POST</button>
  // <button onClick=put()>PUT</button>
  // <button onClick=delete()>DELETE</button>
  // const $div = document.createElement('div')
  // const get = async () => {
  //     const res = await request(``)
  //     $div.innerHTML = `${res}`
  //     $target.appendChild($div)
  //     console.log(res)
  // }
  // const post = async () => {
  // await request(``, { Method: 'POST', body: { day: 1 } }) 
  // const res = await request(``)
  // concole.log(res)
  // }
  // const put = async () => {
  // await request(`/${this.state.day}`, { Method: 'PUT', body: { day: 1 } })
  // const res = await request(``)
  // concole.log(res)
  // }
  // const delete = async () => {
  // await request(`/${this.state.day}`, { Method: 'DELETE' })
  // const res = await request(``)
  // concole.log(res)
  // }

  return (

    <Body isLogin={isLogin}>
      {isLogin
        ?
        <>
          <TimeDiv>
            <Time />
          </TimeDiv>
          <LogoutDiv>
            <LogoutButton onClick={() => setIsLogin(false)}>로그아웃</LogoutButton>
          </LogoutDiv>
          <CalendarDiv>
            {/* <Calendar setIsLogin={setIsLogin} /> */}
            <MiniCalendar/>
          </CalendarDiv>
          <TodoDiv><TodayTodoList/></TodoDiv>
          <DdayDiv>
            <Dday />
          </DdayDiv>
          <BookmarkDiv>
            <BookMark />
          </BookmarkDiv>

        </>
        : (checkId
          ?
          <>
            <LoginForm style={{postion: 'absolute', top: '50%', left: '50%'}} setIsLogin={setIsLogin} setCheckId={setCheckId} />
          </>
          :
          <>
            <SignUpForm setCheckId={setCheckId} />
          </>
        )

      }
      {/* <TodoList todos={ todos } onToggle={ onToggle } onD~elete={ onDelete } onInsert={onInsert} /> */}
      {/* <button 
           onClick={() => {
             console.log(todos)
             console.log(nextId.current)
           }}
         >
           현재
         </button> */}

      {/* <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="movie/:id" element={<MovieDetail />}/>
            <Route path="movies/:type" element={<MovieList />}/>
          </Routes>
        </BrowserRouter> */}
    </Body>
  )
}

export default App
