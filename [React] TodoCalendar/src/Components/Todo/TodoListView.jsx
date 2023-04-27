import { useState } from "react";
import { TextBox, CheckBox, XButton, TodoRow, TodoList } from "./TodoListStyle"


function TodoListView({ todo, onToggle, onDelete, onChange, onDrag, onDrop }) {
    const { id, text, checked, moment } = todo

    return (
        <TodoList>
            <TodoRow 
                id={moment.day}
                draggable 
                onDragStart={onDrag}
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
              > 
                <CheckBox type="checkbox" onChange={() => onToggle(id)} checked={checked} />
                {/* {index + 1}. {text + '/' + moment.month} */}
                <TextBox style={{ textDecoration: checked ? 'line-through' : 'none' }} autoComplete="off" id={id} type="text" defaultValue={text} onChange={onChange}></TextBox>
                <XButton onClick={() => onDelete(id)}>X</XButton>
            </TodoRow>
        </TodoList>
    )
}



export default TodoListView;