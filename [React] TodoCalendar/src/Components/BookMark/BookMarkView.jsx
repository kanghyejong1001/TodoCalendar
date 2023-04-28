function BookMarkView({ BookMark, onDelete, onChange, onDrag, onDrop }) {
    const { id, name, url } = BookMark

    return (
        <div 
            id={id}
            draggable 
            onDragStart={onDrag}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
        > 
            <button onClick={() => window.open('https://' + BookMark.url, '_blank', "noopener, noreferrer")}>{BookMark.name}</button>
            <button onClick={() => onDelete(id)}>X</button>
        </div>
    )
}



export default BookMarkView;