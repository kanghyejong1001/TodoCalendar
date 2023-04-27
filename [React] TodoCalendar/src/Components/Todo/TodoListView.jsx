import { useState } from "react";
import { TextBox, CheckBox, XButton, TodoRow, TodoList } from "./TodoListStyle"


function TodoListView({ todo, index, onToggle, onDelete, onChange }) {
    const { id, text, checked, moment } = todo

    return (
        <TodoList>
            <TodoRow>
                <CheckBox type="checkbox" onChange={() => onToggle(id)} checked={checked} />
                {/* {index + 1}. {text + '/' + moment.month} */}
                <TextBox style={{ textDecoration: checked ? 'line-through' : 'none' }} autoComplete="off" id={id} type="text" defaultValue={text} onChange={onChange}></TextBox>
                <XButton onClick={() => onDelete(id)}>X</XButton>
            </TodoRow>
        </TodoList>
    )
}



export default TodoListView;