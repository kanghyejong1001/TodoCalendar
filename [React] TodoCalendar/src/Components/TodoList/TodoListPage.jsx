import TodoListView from "./TodoListView";
import { useState, useRef, useEffect } from "react";
import { Input, Button, TodoListDiv, Form } from "./TodoListStyle";
import { request } from "../../api/api";
import { currentDay, year, month } from "../../Util/manageCalendar";


function TodoList({ moment, dragIndex, dragTodo, dragId, dragMoment, dragDelete }) {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '숨쉬기',
            checked: true,
            moment: moment
        },
        {
            id: 2,
            text: '먹기',
            checked: true,
            moment: moment
        },
        {
            id: 3,
            text: '잠자기',
            checked: true,
            moment: moment
        },
        {
            id: 4,
            text: '걷기',
            checked: true,
            moment: moment
        },
        {
            id: 5,
            text: '뛰기',
            checked: false,
            moment: moment
        },
    ])
    
    // console.log(`/todos/${year(dateObject)}${month(dateObject)}${currentDay(dateObject)}`)
    // const res = async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`)
    // const [todos, setTodos] = useState(res)

    const nextId = useRef(todos.length)

    const [text, setText] = useState('')

    const [delay, setDelay] = useState(false)

    const onToggle = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        )
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'PUT',
        //     body: {
        //         todos
        //     }
        // })
    }

    const onDelete = (id) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
        if (todos.length === 1) {
            nextId.current = 0
        }
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, { method: 'DELETE' })
    }
    
    // const onDelayChange = (e) => {
    //     if(!delay) {
    //         setDelay(true)
    //         const temp = setInterval(() => {
    //             setDelay(false)
    //         }, 2000);
    //         () => clearTimeout(temp);
    //         onChange(e)
    //     }
    // } 
    
    const onChange = (e) => {
        let {id, value} = e.target
        id = parseInt(id)
        id
        ? onUpdate(id, value)
        : setText(value)
    }

    const onUpdate = (id, text) => {
        setTodos(
            todos.map(item => {
                if (item.id === id) {
                    item.text = text
                }
                return item
            })
        )
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'PUT', 
        //     body: {
        //         todos
        //     } 
        // })
    }

    const onSubmit = (e) => {
        onInsert(text)
        setText('')
        e.preventDefault()
    }

    const onInsert = (text) => {
        setTodos(
            todos.concat([
                {
                    id: nextId.current + 1,
                    text,
                    checked: false,
                    moment
                }
            ])
        )
        nextId.current++
        // async () => await request(`/todos/${year(moment)}${month(moment)}${currentDay(moment)}`, 
        // { 
        //     method: 'POST', 
        //     body: {
        //         todos
        //     } 
        // })
    }

    const onDrag = (e, index) => {
        dragIndex.current = index
        dragTodo.current = {
            id: todos[index].id, 
            text: todos[index].text,
            checked: todos[index].checked,
            moment: todos[index].moment
        }
        dragId.current = todos[index].id
        nextId.current = nextId.current === 1 ? 0 : nextId.current
        dragMoment.current = todos[index].moment.day
        dragDelete.current = {
            'todoList': [...todos], 
            'setTodoList': setTodos
        }
    };
    
    const onDrop = (e, index) => {
        const day = parseInt(e.target.closest('div').id)
        if(dragMoment.current === day) {
            if(typeof(index) === 'undefined') { return }
            const newTodos = [...todos]
            newTodos.splice(dragIndex.current, 1)
            newTodos.splice(index, 0, {
                ...dragTodo.current,
                id: ++nextId.current
            })
            setTodos(newTodos)
        } else{
            if(typeof(index) === 'undefined' && todos.length > 0) { return }
            const newTodos = [...todos]
            newTodos.splice(index ? index : 0, 0, {
                ...dragTodo.current,
                id: ++nextId.current,
                moment: {
                    ...dragTodo.current.moment,
                    day: day
                }
            })
            e.target.closest('div').class === 'empty' ? setTodos([newTodos[0]]) : setTodos(newTodos)
            dragDelete.current.setTodoList(
                dragDelete.current.todoList.filter(todo => {
                    return todo.id !== dragId.current
                })
            )
        }
    };
    
    return (  
        <TodoListDiv 
            id={moment.day}
            className='empty'
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <div>
                <form onSubmit={onSubmit}>
                    <Input 
                        id="0"
                        type="text" 
                        placeholder="할 일 입력"
                        value={text}
                        onChange={onChange}
                        autoComplete="off"
                    />
                    <Button type="submit">save</Button>
                </form>
            </div>        

            {todos.map((todo, index) => (
                <TodoListView
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onChange={onChange}
                    onDrag={(e) => onDrag(e, index)}
                    onDrop={(e) => onDrop(e, index)}
                />
            ))}
            <Button className="LogButton" onClick={() => { console.log(todos) }}>출력</Button>
        </TodoListDiv>
    );
}

export default TodoList;