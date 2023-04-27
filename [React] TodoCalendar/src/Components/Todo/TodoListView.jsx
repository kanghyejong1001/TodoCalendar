import { useState } from "react";
import { TextBox, CheckBox, XButton, TodoRow, TodoList } from "./TodoListStyle"

function TodoListView({ todo, index, onToggle, onDelete, onChange }) {
    const { id, text, checked, moment } = todo

    return (
        <TodoList style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <TodoRow>
                <label><CheckBox type="checkbox" onChange={() => onToggle(id)} checked={checked} /></label>
                {/* {index + 1}. {text + '/' + moment.month} */}
                <TextBox id={id} type="text" defaultValue={text} onChange={onChange} />
                <XButton onClick={() => onDelete(id)}>X</XButton>
            </TodoRow>
        </TodoList>
    )
}



export default TodoListView;