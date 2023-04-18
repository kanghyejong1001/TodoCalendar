function TodoListView({ todo, index, onToggle, onDelete }) {
    const { id, text, checked, moment } = todo
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>
                {index + 1}. {text + '/' + moment.month}
                {/* <input type="text" value={(index + 1) + '. ' + text + ' / ' + day}/> */}
            </span>
            <button style={{width: "5px", height: "30px" }} onClick={() => onDelete(id)}>x</button>
        </div>
    )
}

export default TodoListView;