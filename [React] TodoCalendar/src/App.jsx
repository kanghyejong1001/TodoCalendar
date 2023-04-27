import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useRef, useState } from "react"
import LoginForm from "./Components/Login/LoginForm";
import SignUpForm from "./Components/Login/SignUpForm";
import Calendar from "./Components/Calendar/CalendarEdit";
import { Root } from "./AppStyle.jsx";
import Time from "./Components/Time/Time";


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


        {/* <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="movie/:id" element={<MovieDetail />}/>
            <Route path="movies/:type" element={<MovieList />}/>
          </Routes>
        </BrowserRouter> */}
    </div>
  )
}

export default App
