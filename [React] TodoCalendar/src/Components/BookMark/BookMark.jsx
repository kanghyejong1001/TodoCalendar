import { useState, useRef } from "react";
import BookMarkView from "./BookMarkView";
import {
    BookMarkTitle,
    BookMarkChunk,
    Input,
    InputForm,
    BookMarkTop,
    BookMarkBottom
} from "./BookMarkStyle";

// locatStorage 사용법
// 삭제
// localStorage.removeItem('key')

// 읽기
// JSON.parse(localStorage.getItem('Key'))

// 저장
// localStorage.setItem('Key', JSON.stringify('Value'))

function BookMark() {
    if (!JSON.parse(localStorage.getItem('BookMark'))) { localStorage.setItem('BookMark', JSON.stringify([])) }
    const [BookMarks, setBookMarks] = useState(JSON.parse(localStorage.getItem('BookMark')))
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const nextId = useRef(BookMarks.length)

    const onDelete = (id) => {
        setBookMarks(
            BookMarks.filter(todo => todo.id !== id)
        )
        if (BookMarks.length === 1) {
            nextId.current = 0
        }

        let currentBookMark = JSON.parse(localStorage.getItem('BookMark'))
        currentBookMark = currentBookMark.filter(item => item.id !== id)
        localStorage.setItem('BookMark', JSON.stringify(currentBookMark))
    }

    const onChange = (e) => {
        let { name, value } = e.target
        name === 'name'
            ? setName(value)
            : setUrl(value)
    }

    const onSubmit = (e) => {
        onInsert(name, url)
        setName('')
        setUrl('')
        e.preventDefault()
    }

    const onInsert = (name, url) => {
        setBookMarks(
            BookMarks.concat([
                {
                    id: ++nextId.current,
                    name,
                    url
                }
            ])
        )
        let currentBookMark = JSON.parse(localStorage.getItem('BookMark'))
        currentBookMark.push(
            {
                id: nextId.current,
                name,
                url
            }
        )
        localStorage.setItem('BookMark', JSON.stringify(currentBookMark))
    }

    const dragIndex = useRef()
    const dragBookMark = useRef()
    const dragId = useRef()
    const dragDelete = useRef()

    const onDrag = (e, index) => {
        console.log(index)
        console.log(BookMarks[index])
        dragIndex.current = index
        dragBookMark.current = {
            id: BookMarks[index].id,
            name: BookMarks[index].name,
            url: BookMarks[index].url
        }
        dragId.current = BookMarks[index].id
        nextId.current = nextId.current === 1 ? 0 : nextId.current
        dragDelete.current = {
            'BookMark': [...BookMarks],
            'setBookMarks': setBookMarks
        }
    };

    const onDrop = (e, index) => {
        const newBookMarks = [...BookMarks]
        newBookMarks.splice(dragIndex.current, 1)
        newBookMarks.splice(index, 0, {
            ...dragBookMark.current,
            id: ++nextId.current
        })
        setBookMarks(newBookMarks)
    }

    return (
        <BookMarkChunk>
            <BookMarkTitle>즐겨찾기</BookMarkTitle>
            <BookMarkTop>

                {BookMarks.map((BookMark, index) => (
                    <BookMarkView
                        key={BookMark.id}
                        BookMark={BookMark}
                        onChange={onChange}
                        onDelete={onDelete}
                        onDrag={(e) => onDrag(e, index)}
                        onDrop={(e) => onDrop(e, index)}
                    />
                ))}
            </BookMarkTop>
            <BookMarkBottom>
                <InputForm onSubmit={onSubmit}>
                    <Input
                        name="name"
                        type="text"
                        value={name}
                        onChange={onChange}
                        placeholder="사이트 이름"
                    /><br />
                    <Input
                        name="url"
                        type="text"
                        value={url}
                        onChange={onChange}
                        placeholder="URL"
                    /><br />
                    <button type="submit">save</button>
                </InputForm>

            </BookMarkBottom>
        </BookMarkChunk>
    );
}

export default BookMark;
