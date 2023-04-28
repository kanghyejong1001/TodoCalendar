import moment from "moment";
import { useState, useRef, useEffect } from "react";
import { Button } from "../TodoList/TodoListStyle"
import { request } from "../../api/api";
import { currentDay, year, month } from "../../Util/manageCalendar";
import TodoListView from "../TodoList/TodoListView";
import { Input, TodoListDiv, TodoListTitle } from "./TodayTodoListStyle";


function TodayTodoList({ }) {
    const [dateObject, setDateObject] = useState(moment());
    if(!JSON.parse(localStorage.getItem('Todo'))) {localStorage.setItem('Todo', JSON.stringify([]))}
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todo')))
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         text: '숨쉬기',
    //         checked: true,
    //         moment: {
    //             year: year(dateObject),
    //             month: month(dateObject),
    //             day: currentDay(dateObject)
    //         }
    //     },
    //     {
    //         id: 2,
    //         text: '먹기',
    //         checked: true,
    //         moment: {
    //             year: year(dateObject),
    //             month: month(dateObject),
    //             day: currentDay(dateObject)
    //         }
    //     },
    //     {
    //         id: 3,
    //         text: '잠자기',
    //         checked: true,
    //         moment: {
    //             year: year(dateObject),
    //             month: month(dateObject),
    //             day: currentDay(dateObject)
    //         }
    //     },
    //     {
    //         id: 4,
    //         text: '걷기',
    //         checked: true,
    //         moment: {
    //             year: year(dateObject),
    //             month: month(dateObject),
    //             day: currentDay(dateObject)
    //         }
    //     },
    //     {
    //         id: 5,
    //         text: '뛰기',
    //         checked: false,
    //         moment: {
    //             year: year(dateObject),
    //             month: month(dateObject),
    //             day: currentDay(dateObject)
    //         }
    //     },
    // ])
    
    // console.log(`/todos/${year(dateObject)}${month(dateObject)}${currentDay(dateObject)}`)
    // const res = async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`)
    // const [todos, setTodos] = useState(res)

    const nextId = useRef(todos.length)

    const [text, setText] = useState('')

    const onToggle = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        )

        let currentTodo = JSON.parse(localStorage.getItem('Todo'))
        currentTodo = currentTodo.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        localStorage.setItem('Dday', JSON.stringify(currentTodo))
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'PUT',
        //     body: {
        //         todos
        //     }
        // })
    }

    const onDelete = (id) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
        if (todos.length === 1) {
            nextId.current = 0
        }
        let currentTodo = JSON.parse(localStorage.getItem('Todo'))
        currentTodo = currentTodo.filter(item => item.id !== id)
        localStorage.setItem('Todo', JSON.stringify(currentTodo))
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, { method: 'DELETE' })
    }
    
    const onChange = (e) => {
        let {id, value} = e.target
        id = parseInt(id)
        id
        ? onUpdate(id, value)
        : setText(value)
    }

    const onUpdate = (id, text) => {
        setTodos(
            todos.map(item => {
                if (item.id === id) {
                    item.text = text
                }
                return item
            })
        )
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'PUT', 
        //     body: {
        //         todos
        //     } 
        // })
    }

    const onSubmit = (e) => {
        onInsert(text)
        setText('')
        e.preventDefault()
    }

    const onInsert = (text) => {
        setTodos(
            todos.concat([
                {
                    id: ++nextId.current,
                    text,
                    checked: false,
                    moment: {
                        year: year(dateObject),
                        month: month(dateObject),
                        day: currentDay(dateObject)
                    }
                }
            ])
        )

        let currentTodo = JSON.parse(localStorage.getItem('Todo'))
        console.log(nextId.current)
        currentTodo.push(
            { 
                id: nextId.current, 
                text: text,
                checked: false,
                moment: {
                    year: year(dateObject),
                    month: month(dateObject),
                    day: currentDay(dateObject)
                }
            }
        )
        localStorage.setItem('Todo', JSON.stringify(currentTodo))
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'POST', 
        //     body: {
        //         todos
        //     } 
        // })
    }

    const dragIndex = useRef()
    const dragTodo = useRef()
    const dragId = useRef()
    const dragMoment = useRef()
    const dragDelete = useRef()

    const onDrag = (e, index) => {
        dragIndex.current = index
        dragTodo.current = {
            id: todos[index].id, 
            text: todos[index].text,
            checked: todos[index].checked,
            moment: todos[index].moment
        }
        dragId.current = todos[index].id
        nextId.current = nextId.current === 1 ? 0 : nextId.current
        dragMoment.current = todos[index].moment.day
        dragDelete.current = {
            'todoList': [...todos], 
            'setTodoList': setTodos
        }
    };
    
    const onDrop = (e, index) => {
        const newTodos = [...todos]
        newTodos.splice(dragIndex.current, 1)
        newTodos.splice(index, 0, {
            ...dragTodo.current,
            id: ++nextId.current
        })
        setTodos(newTodos)
        localStorage.setItem('Todo', JSON.stringify(newTodos))
    };
    
    return (  
        <TodoListDiv>
            <TodoListTitle>오늘의 할 일들</TodoListTitle>
            <div>
                <form onSubmit={onSubmit} 
                style={{
                width: "70%", 
                display: "flex", 
                justifyContent: "space-around"}}>
                    <Input 
                        id="0"
                        type="text" 
                        placeholder="할 일"
                        value={text}
                        onChange={onChange}
                        autoComplete="off"
                    />
                    <Button type="submit">save</Button>
                </form>
            </div>        

            {todos.map((todo, index) => (
                <TodoListView
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onChange={onChange}
                    onDrag={(e) => onDrag(e, index)}
                    onDrop={(e) => onDrop(e, index)}
                />
            ))}
            {/* <Button className="LogButton" onClick={() => { console.log(todos) }}>출력</Button> */}
        </TodoListDiv>
    );
}

export default TodayTodoList;