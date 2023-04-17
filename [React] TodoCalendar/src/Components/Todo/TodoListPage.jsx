import styled from "styled-components";
import TodoListView from "./TodoListView";
import { useState } from "react";
import { onToggle, onDelete, onInsert } from "../../Util/manageTodo";

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

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid $dee2e6;
    width: 80%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    display: inline-block;
`

const Button = styled.button`
    width: 20%;
    height: 50px;
    background:#63e6be;
    display: inline-block;
`

const TodoListDiv = styled.div`
    flex: 1;
    padding: 20px, 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray;
`

export default TodoList;