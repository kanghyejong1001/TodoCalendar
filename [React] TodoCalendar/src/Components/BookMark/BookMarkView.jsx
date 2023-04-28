import { 
    XButton,
    LinkButton } from "./BookMarkStyle";

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
            <LinkButton style={{marginBottom: "10px"}} onClick={() => window.open('https://' + BookMark.url, '_blank', "noopener, noreferrer")}>{BookMark.name}</LinkButton>
            <XButton onClick={() => onDelete(id)}>X</XButton>
        </div>
    )
}



export default BookMarkView;