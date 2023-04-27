import { useRef, useState } from "react"
import LoginForm from "./Components/Login/LoginForm";
import SignUpForm from "./Components/Login/SignUpForm";
import Calendar from "./Components/Calendar/CalendarTwo";
import { MainPage } from "./AppStyle.jsx";
import Time from "./Components/Time/Time";


function App() {
  const [checkId, setCheckId] = useState(true)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <body>
      {isLogin
        ? <MainPage>
          <Time />
          <Calendar setIsLogin={setIsLogin} />
        </MainPage>
        : (checkId
          ?
          <>
            <LoginForm setIsLogin={setIsLogin} setCheckId={setCheckId} />
          </>
          :
          <>
            <SignUpForm setCheckId={setCheckId} />
          </>
        )
      }
      {/* <TodoList todos={ todos } onToggle={ onToggle } onDelete={ onDelete } onInsert={onInsert} /> */}
      {/* <button 
           onClick={() => {
             console.log(todos)
             console.log(nextId.current)
           }}
         >
           현재
         </button> */}
    </body>

  )
}

export default App
