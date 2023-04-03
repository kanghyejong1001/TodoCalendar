import { request } from "../../api/api.js"
import TodoListView from "./TodoListView.js"

export default function TodoListPaeg ({
    $target,
    initalState
}) {
    const $todoListPage = document.createElement('div')
    $todoListPage.className = 'TodoListPage'

    this.state = initalState

    const todoListView = new TodoListView({
        $target: $todoListPage,
        initialState: this.state
    })

    this.setState = async nextState => {
        if (this.state.day === nextState.day) {
            this.state = nextState
            await fetchTodoList()
        }
        this.state = nextState
        this.render()

    }

    const fetchTodoList = async () => {
        const { content } = await request(`/${this.state.day}`)
        todoListView.setState({
            $target: $todoListPage,
            initalState: {
                ...this.state,
                content: this.state.content
            }
        })
    }

    this.render = () => {
        $target.appendChild($todoListPage)
    }

}