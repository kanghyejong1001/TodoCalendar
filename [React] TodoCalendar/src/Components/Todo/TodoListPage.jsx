import TodoListView from "./TodoListView";
import { useState } from "react";
import { onToggle, onDelete, onInsert } from "../../Util/manageTodo";
import { Input, Button, TodoListDiv } from "./TodoListStyle";

function TodoList({ day }) {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '숨쉬기',
            checked: true,
            day: day
        },
        {
            id: 2,
            text: '먹기',
            checked: true,
            day: day
        },
        {
            id: 3,
            text: '잠자기',
            checked: true,
            day: day
        },
        {
            id: 4,
            text: '걷기',
            checked: true,
            day: day
        },
        {
            id: 5,
            text: '뛰기',
            checked: false,
            day: day
        },
    ])
    const [text, setText] = useState('')
    
    const onChange = (e) => {
        setText(e.target.value)
    }
    
    // const onSubmit = (e) => {
    //     onInsert(text, setTodos)
    //     setText('')
    //     e.preventDefault()
    // }
    
    return (  

        <TodoListDiv>
            <div>
                {/* <form onSubmit={onSubmit}>
                    <Input 
                        type="text" 
                        placeholder="할 일 입력"
                        value={text}
                        onChange={onChange}
                    />
                    <Button type="submit">save</Button>
                </form> */}
            </div>        
            {todos.map((todo, index) => (
                <TodoListView 
                    key={todo.id}
                    todo={todo}
                    index={index}
                    // onToggle={onToggle}
                    // onDelete={onDelete}
                />
            ))}
        </TodoListDiv>
    );
}

export default TodoList;