import { useState } from "react";
import { XButton } from "./TodoListStyle"

function TodoListView({ todo, index, onToggle, onDelete, onChange }) {
    const { id, text, checked, moment } = todo
    
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>
                {/* {index + 1}. {text + '/' + moment.month} */}
                <input id={id} type="text" defaultValue={text} onChange={onChange} />
                <XButton onClick={() => onDelete(id)}>x</XButton>
            </span>
        </div>
    )
}



export default TodoListView;