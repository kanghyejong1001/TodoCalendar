import { useRef, useState } from "react"
import TodoList from "./Components/Todo/TodoListPage"
import Calendar from "./Components/Calendar/Calendar"
import LoginForm from "./Components/Login/LoginForm";
import SignUpForm from "./Components/Login/SignUpForm";
// import Time from "./Components/Time"


function App() {
  const [checkId, setCheckId] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>

        {/* <Time /> */}
        { isLogin 
          ? <Calendar setIsLogin={setIsLogin}/> 
          : ( checkId 
              ? <LoginForm setIsLogin={setIsLogin} setCheckId={setCheckId}/> 
              : <SignUpForm setCheckId={setCheckId}/>
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
    </div>
  )
}

export default App
