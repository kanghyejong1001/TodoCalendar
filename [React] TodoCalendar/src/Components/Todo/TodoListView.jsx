import { useState } from "react";

function TodoListView({ todo, index, onToggle, onDelete, onChange, onDrag }) {
    const { id, text, checked, moment } = todo
    
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>
                {/* {index + 1}. {text + '/' + moment.month} */}
                <input id={id} type="text" defaultValue={text} onChange={onChange} />
                <button onClick={() => onDelete(id)}>x</button>
                <button onClick={() => console.log('drag')}>::</button>
            </span>
        </div>
    )
}



export default TodoListView;