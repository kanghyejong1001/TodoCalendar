import TodoListView from "./TodoListView";
import { useState, useRef } from "react";
import { Input, Button, TodoListDiv } from "./TodoListStyle";

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

    const nextId = useRef(todos.length)

    const [text, setText] = useState('')
    
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
    
        if(todos.length === 1) {
            nextId.current = 0
        }
    }

    const onChange = (e) => {
        setText(e.target.value)
    }
    
    const onSubmit = (e) => {
        onInsert(text, setTodos)
        setText('')
        e.preventDefault()
    }
    
    return (  

        <TodoListDiv>
            <div>
                <form onSubmit={onSubmit}>
                    <Input 
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
                />
            ))}
        </TodoListDiv>
    );
}

export default TodoList;