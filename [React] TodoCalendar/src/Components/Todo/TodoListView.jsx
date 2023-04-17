function TodoListView({ todo, index, onToggle, onDelete }) {
    const { id, text, checked, day } = todo
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            {/* <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} /> */}
            <span>
                {index + 1}. {text + ' / ' + day}
                {/* <input type="text" value={(index + 1) + '. ' + text + ' / ' + day}/> */}
            </span>
            {/* <button onClick={() => onDelete(id)}>x</button> */}
        </div>
    )
}

export default TodoListView;