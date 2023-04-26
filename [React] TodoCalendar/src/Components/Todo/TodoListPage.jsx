import TodoListView from "./TodoListView";
import { useState, useRef, useEffect } from "react";
import { Input, Button, TodoListDiv } from "./TodoListStyle";
import { request } from "../../api/api";
import { currentDay, year, month } from "../../Util/manageCalendar";


function TodoList({ moment, dateObject }) {
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
        console.log(id)
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

    const dragIndex = useRef();
    const dragTodo = useRef();

    // const onDrag = (e, index) => {
    //     dragIndex.current = index;
    //     dragTodo.current = todos[index];
    // };

    // const onDrop = (e, index) => {
    //     const newTodos = [...todos];
    //     newTodos.splice(dragIndex.current, 1);
    //     newTodos.splice(index, 0, dragTodo.current);
    //     setTodos(newTodos);
    // };
    
    return (  
        
        <TodoListDiv onDrop={onDrop}>
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
                    index={index}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onChange={onChange}
                    // onDrag={onDrag}
                />
            ))}
            <Button onClick={() => {console.log(todos)}}></Button>
        </TodoListDiv>
    );
}

export default TodoList;