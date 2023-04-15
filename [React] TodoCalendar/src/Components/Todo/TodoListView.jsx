function TodoListView({ todo, index, onToggle, onDelete }) {
    const { id, text, checked } = todo
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>{index + 1}. {text}</span>
            <button onClick={() => onDelete(id)}>x</button>
        </div>
    )
}

// import { useState } from "react"
// import styled from "styled-components"



// export default TodoInsert


export default TodoListView;