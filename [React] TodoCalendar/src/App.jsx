import { useRef, useState } from "react"
import TodoList from "./Components/Todo/TodoListPage"


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '숨쉬기',
      checked: true
    },
    {
      id: 2,
      text: '먹기',
      checked: true
    },
    {
      id: 3,
      text: '잠자기',
      checked: true
    },
    {
      id: 4,
      text: '걷기',
      checked: true
    },
    {
      id: 5,
      text: '뛰기',
      checked: false
    },
  ])

  const nextId = useRef(5)

  const onInsert = (text) => {
    setTodos(
      todos.concat([
        {
          id: nextId.current + 1,
          text,
          checked: false
        }
      ])
    )
    nextId.current++
  }

  const onToggle = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo  
      )
    )
  }

  const onDelete = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
    nextId.current--
  }

  return (
    <div>

        <TodoList todos={ todos } onToggle={onToggle} onDelete={onDelete} />

    </div>
  )
}

export default App
