import { useRef, useState } from "react"
import TodoList from "./Components/Todo/TodoListPage"
import Calendar from "./Components/Calendar/Calendar"
import Calendar2 from "./Components/Calendar2"
import LoginForm from "./Components/Login/LoginForm";
import SignUpForm from "./Components/Login/SignUpForm";
// import Time from "./Components/Time"


function App() {
  

  return (
    <div>
        {/* <Time /> */}
        {/* <Calendar2 /> */}
        <LoginForm />
        <SignUpForm />
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
