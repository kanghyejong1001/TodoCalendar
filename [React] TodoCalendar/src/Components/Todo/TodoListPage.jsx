import TodoListView from "./TodoListView";
import { useState, useRef, useEffect } from "react";
import { Input, Button, TodoListDiv } from "./TodoListStyle";
import { request } from "../../api/api";
import { currentDay, year, month } from "../../Util/manageCalendar";


function TodoList({ moment, dateObject, dragIndex, dragTodo, dragId, dragMoment, dragDelete }) {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '숨쉬기',
            checked: true,
            moment: moment
        },
        {
            id: 2,
            text: '먹기',
            checked: true,
            moment: moment
        },
        {
            id: 3,
            text: '잠자기',
            checked: true,
            moment: moment
        },
        {
            id: 4,
            text: '걷기',
            checked: true,
            moment: moment
        },
        {
            id: 5,
            text: '뛰기',
            checked: false,
            moment: moment
        },
    ])
    
    // console.log(`/todos/${year(dateObject)}${month(dateObject)}${currentDay(dateObject)}`)
    // const res = async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`)
    // const [todos, setTodos] = useState(res)

    const nextId = useRef(todos.length)

    const [text, setText] = useState('')

    // const [delay, setDelay] = useState(false)
    
    const onToggle = (id) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, checked: !todo.checked } : todo  
            )
        )
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
        if(todos.length === 1) {
            nextId.current = 0
        }
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, { method: 'DELETE' })
    }
    
    // const onDelayChange = (e) => {
    //     if(!delay) {
    //         setDelay(true)
    //         const temp = setInterval(() => {
    //             setDelay(false)
    //         }, 2000);
    //         () => clearTimeout(temp);
    //         onChange(e)
    //     }
    // } 
    
    const onChange = (e) => {
        let {id, value} = e.target
        id = parseInt(id)
        id
        ? onUpdate(id, value)
        : setText(value)
        console.log(value)
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
                    id: nextId.current + 1,
                    text,
                    checked: false,
                    moment
                }
            ])
        )
        nextId.current++
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'POST', 
        //     body: {
        //         todos
        //     } 
        // })
    }

    const onDrag = (e, index) => {
        dragIndex.current = index
        const id = todos[index].id
        const text = todos[index].text
        const checked = todos[index].checked
        const moment = todos[index].moment
        const day = moment.day
        dragTodo.current = {
            id: id, 
            text: text,
            checked: checked,
            moment: moment
        }
        dragId.current = id
        nextId.current = nextId.current === 1 ? 0 : nextId.current
        dragMoment.current = day
        

        dragDelete.current = {
            'todoList': [...todos], 
            'setTodoList': setTodos
        }
        // console.log('index', dragIndex.current)
        // console.log('todo', dragTodo.current)
        // console.log('id', dragId.current)
        // console.log('moment', dragMoment.current)
        // console.log('delete', dragDelete.current)
        console.log('-------------------------------')
    };
    
    const onDrop = (e, index) => {
        const id = parseInt(e.target.closest('div').id)
        console.log(dragDelete.current.todoList)
        if(dragMoment.current === id) {
            console.log("if")
            const newTodos = [...todos]
            console.log(dragTodo.current)
            dragTodo.current.id = ++nextId.current
            newTodos.splice(dragIndex.current, 1)
            newTodos.splice(index, 0, dragTodo.current)
            setTodos(newTodos)
        } else{
            console.log("else")
            console.log(id)
            const newTodos = [...todos]
            
            // const tempId = dragTodo.current.id
            const tempText = dragTodo.current.text
            const tempChecked = dragTodo.current.checked
            const tempMoment = dragTodo.current.moment
            const newTodo = {
                id: ++nextId.current,
                text: tempText,
                checked: tempChecked,
                moment: {
                    year: tempMoment.year,
                    month: tempMoment.month,
                    day: id
                }
            }
            // dragTodo.current.moment.day = id
            // dragTodo.current.id = ++nextId.current
            newTodos.splice(index, 0, newTodo)
            console.log(dragDelete.current)
            setTodos(newTodos)
            dragDelete.current.setTodoList(
                dragDelete.current.todoList.filter(todo => {
                    return todo.id !== dragId.current
                })
            )
        }
        console.log('-------------------------------')
        // if (e.target.closest('div').id === 'div') {
        //     console.log('div')
        //     setTodos([dragTodo.current])
        // }
    };
    
    return (  
        
        <TodoListDiv 
            id='div'
            draggable
        >
            <div>
                <form onSubmit={onSubmit}>
                    <Input 
                        id="0"
                        type="text" 
                        placeholder="할 일 입력"
                        value={text}
                        onChange={onChange}
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
            <Button onClick={() => {console.log(todos)}}></Button>
        </TodoListDiv>
    );
}

export default TodoList;