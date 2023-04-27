import { useState } from "react";
import { TextBox, CheckBox, XButton, TodoRow, TodoList } from "./TodoListStyle"

export function resizeInput() {
    const input = document.getElementByName("TodoText");
    input.style.width = input.value.length + "ch";
  }

function TodoListView({ todo, index, onToggle, onDelete, onChange }) {
    const { id, text, checked, moment } = todo

    return (
        <TodoList style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <TodoRow>
                <CheckBox type="checkbox" onChange={() => onToggle(id)} checked={checked} />
                {/* {index + 1}. {text + '/' + moment.month} */}
                <TextBox name="TodoText" autoComplete="off" id={id} type="text" defaultValue={text} onChange={onChange} oninput="resizeInput()"></TextBox>
                <XButton onClick={() => onDelete(id)}>X</XButton>
            </TodoRow>
        </TodoList>
    )
}



export default TodoListView;