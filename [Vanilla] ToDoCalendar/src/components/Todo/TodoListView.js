import { displayTodoList } from "../../util/displayTodoList.js"

const DUMMY_DATA = [
    {
        day: 1,
        content: 'aaaaaaa',
        contents: [],
        isCompleted: false
    },
    {
        day: 2,
        content: 'bbbbbbbb',
        contents: [],
        isCompleted: false
    },
    {
        day: 3,
        content: 'ccccccccc',
        contents: [],
        isCompleted: false
    },
    {
        day: 4,
        content: 'ddddddddd',
        contents: [],
        isCompleted: false
    },
    {
        day: 5,
        content: 'eeeeeeee',
        contents: [],
        isCompleted: false
    },
    {
        day: 6,
        content: 'ffffffff',
        contents: [
            {
                day: 7,
                content: 'ggggggggg',
                contents: [],
                isCompleted: false
            }
        ],
        isCompleted: false
    },
]

// const DUMMY_DATA = {
//     day: 1,
//     content: 'aaaaaaa',
//     contents: [],
//     isCompleted: false
// }

export default function TosoListView ({ $target, initialState }) {
    const $todoListView = document.createElement('div')
    $target.appendChild($todoListView)

    this.state = initialState
    this.state = DUMMY_DATA

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        let { day, content, contents, isCompleted } = this.state
        $todoListView.innerHTML = `
            <ul>
                ${displayTodoList(this.state)}
            </ul>
        `
                // <li data-id="${day}", class="todo-item">
                //     <input ></input>
                //     ${isCompleted ? `<s>${content}</s>` : content}
                //     <button class="add">+</button>
                //     <button class="remove">-</button>
                // </li>
    }

    this.render()

    $todoListView.addEventListener('click', (e) => {
        let list = this.state
        const $li = e.target.closest('.todo-item')
        console.log($li)
        if ($li) {
            const { id } = $li.dataset
            const { className } = e.target
            if (className === 'remove') {
                list[id - 1].content = ''
            } else if (className === 'add') {
                list[id - 1].content = 'add!'
            } else {
                list[id - 1].isCompleted = list[id - 1].isCompleted ? false : true
            }
        }
        this.render()
    })
}