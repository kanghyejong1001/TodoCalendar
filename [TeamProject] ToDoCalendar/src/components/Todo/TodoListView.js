// const DUMMY_DATA = [
//     {
//         day: 1,
//         content: 'aaaaaaa',
//         contents: [],
//         isCompleted: false
//     },
//     {
//         day: 2,
//         content: 'bbbbbbbb',
//         contents: [],
//         isCompleted: false
//     },
//     {
//         day: 3,
//         content: 'ccccccccc',
//         contents: [],
//         isCompleted: false
//     },
//     {
//         day: 4,
//         content: 'ddddddddd',
//         contents: [],
//         isCompleted: false
//     },
//     {
//         day: 5,
//         content: 'eeeeeeee',
//         contents: [],
//         isCompleted: false
//     },
//     {
//         day: 6,
//         content: 'ffffffff',
//         contents: [],
//         isCompleted: false
//     },
//     {
//         day: 7,
//         content: 'ggggggggg',
//         contents: [],
//         isCompleted: false
//     },
// ]
const DUMMY_DATA = {
    day: 1,
    content: '<ul><li>aaaaaaa</li></ul>',
    contents: [],
    isCompleted: false
}

export default function TosoListView ({ $target, initialState }) {
    const $todoListView = document.createElement('div')
    $target.appendChild($todoListView)

    this.state = initialState

    console.log(this.state)

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        let { content } = this.state
        content = DUMMY_DATA
        $todoListView.innerHTML = `
            <ul>
                ${todos.map(({ day, content, isCompleted }) => `
                    <li data-id="${day}", class="todo-item">
                        ${isCompleted ? `<s>${content}</s>` : content}
                        <button class="remove">x</button>
                    </li>
                `).join('')}
            </ul>
        `
    }

    this.render()

    $todoListView.addEventListener('click', (e) => {
        let { content } = this.state
        todos = DUMMY_DATA
        const $li = e.target.closest('.todo-item')
        if ($li) {
            const { id } = $li.dataset
            const { className } = e.target
            if (className === 'remove') {
                content.splice(id - 1, 1)
            } else {
                content[id - 1].isCompleted = !todos[id - 1].isCompleted
            }
        }
        this.render()
    })
}