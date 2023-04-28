import { TextBox, CheckBox, XButton, TodoRow} from "./TodoListStyle"


function TodoListView({ todo, onToggle, onDelete, onChange, onDrag, onDrop }) {
    const { id, text, checked, moment } = todo

    return (
        <TodoRow 
            id={moment.day}
            draggable 
            onDragStart={onDrag}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
        > 
            <CheckBox type="checkbox" onChange={() => onToggle(id)} checked={checked} />
            <TextBox style={{ textDecoration: checked ? 'line-through' : 'none' }} autoComplete="off" id={id} type="text" defaultValue={text} onChange={onChange}></TextBox>
            <XButton onClick={() => onDelete(id)}>X</XButton>
        </TodoRow>
    )
}



export default TodoListView;