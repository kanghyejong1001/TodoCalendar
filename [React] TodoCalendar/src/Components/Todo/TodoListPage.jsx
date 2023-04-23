import TodoListView from "./TodoListView";
import { useState, useRef, useEffect } from "react";
import { Input, Button, TodoListDiv } from "./TodoListStyle";
import { request } from "../../api/api";

function TodoList({ moment }) {
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
    
    // useEffect(() => {
    //     setTodos()
    // }, [todos])

    const nextId = useRef(todos.length)

    const [text, setText] = useState('')

    const [delay, setDelay] = useState(false)
    
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
        console.log(id)
        if(todos.length === 1) {
            nextId.current = 0
        }
    }

    useEffect(() => {
        const temp = setTimeout(() => {
            setDelay(false)
        }, 2000)
        return () => clearTimeout(temp)
    }, [delay])
    
    const onDelayChange = (e) => {
        if(!delay) {
            console.log(delay)
            setDelay(true)
            onChange(e)
            console.log(delay)
        }
    } 
    
    const onChange = (e) => {
        console.log(todos)
        parseInt(e.target.id)
        ? onUpdate(e.target.id, e.target.value)
        : setText(e.target.value)
        console.log(todos)
        
    }

    const onUpdate = async (id, text) => {
        setTodos(
            todos.map(item => {
                if (item.id === parseInt(id)) {
                    item.text = text
                }
                return item
            })
        )
    }

    
    const onSubmit = (e) => {
        onInsert(text)
        setText('')
        e.preventDefault()
    }
    
    return (  

        <TodoListDiv>
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
                    onChange={onDelayChange}
                />
            ))}
            <Button onClick={() => {console.log(todos)}}></Button>
        </TodoListDiv>
    );
}

export default TodoList;