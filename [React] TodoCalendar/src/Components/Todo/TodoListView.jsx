import { useState } from "react";

function TodoListView({ todo, index, onToggle, onDelete, onChange }) {
    const { id, text, checked, moment } = todo
    
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>
                {/* {index + 1}. {text + '/' + moment.month} */}
                <input id={id} type="text" defaultValue={text} onChange={onChange} />
                <button style={{width: "5px", height: "30px" }} onClick={() => onDelete(id)}>x</button>
            </span>
        </div>
    )
}



export default TodoListView;