import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState } from "react"
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
  const [loginInfo, setLoginInfo] = useState()
  const [signUpInfo, setSignUpInfo] = useState()
  const [isLogin, setIsLogin] = useState(true)

  const checkLogin = (data) => {
    setLoginInfo(data)
    console.log(loginInfo)
    
  }

  
  // const [checkId, setCheckId] = useState(true)
  // const [isMainPage, setIsMainPage] = useState(true)
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
      <BrowserRouter>
          <Routes>
            <Route index element={
              <>
                <TimeDiv>
                  <Time />
                </TimeDiv>
                <LogoutDiv>
                  <LogoutButton onClick={() => setIsLogin(false)}><Link to="/login">로그아웃</Link></LogoutButton>
                </LogoutDiv>
                <CalendarDiv>
                  <MiniCalendar/>
                </CalendarDiv>
                <TodoDiv><TodayTodoList/></TodoDiv>
                <DdayDiv><Dday/></DdayDiv>
                <BookmarkDiv><BookMark /></BookmarkDiv>
              </>  
            }/>
            
            <Route path="/login" element={<LoginForm onSubmit={checkLogin} style={{postion: 'absolute', top: '50%', left: '50%'}}/>}/>
            <Route path="/sign" element={<SignUpForm onSubmit={setSignUpInfo}/>} />
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="*" element={<>404 page</>}/>
          </Routes>
        </BrowserRouter>
    </Body>
  )
}

export default App
