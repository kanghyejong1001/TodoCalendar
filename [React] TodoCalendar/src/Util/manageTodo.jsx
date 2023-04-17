export const onInsert = (text, setTodos) => {
    setTodos(
        todos.concat([
            {
                id: nextId.current + 1,
                text,
                checked: false
            }
        ])
    )
    // nextId.current++
}

export const onToggle = (id, day) => {
    setTodos(
        todos.map(todo => 
            todo.id === id ? { ...todo, checked: !todo.checked } : todo  
        )
    )
}

export const onDelete = (id) => {
    setTodos(
        todos.filter(todo => todo.id !== id)
    )

    if(todos.length === 1) {
        nextId.current = 0
    }
    console.log(todos.filter(todo => todo.id !== id))
    console.log(nextId.current)
}