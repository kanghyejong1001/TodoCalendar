import { useState } from "react";

function TodoListView({ todo, onToggle, onDelete, onChange, onDrag, onDrop }) {
    const { id, text, checked, moment } = todo
    
    return (  
        <div 
            id={moment.day}
            draggable 
            onDragStart={onDrag}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{ textDecoration: checked ? 'line-through' : 'none' }}
        >
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>
                {/* {index + 1}. {text + '/' + moment.month} */}
                <input id={id} type="text" defaultValue={text} onChange={onChange} />
                <button onClick={() => onDelete(id)}>x</button>
            </span>
        </div>
    )
}



export default TodoListView;