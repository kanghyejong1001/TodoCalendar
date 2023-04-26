import Time from "./Time.js"
import TodoListPage from "./Todo/TodoListPage.js";
import { request } from "../api/api.js";

export default function App ({ $target }) {

    // 시계 컴포넌트
    const $clock = document.createElement('div');
    $target.appendChild($clock)
    const time = new Time({
        $target: $clock 
    })



    // To do List 컴포넌트
    const $todoListPage = document.createElement('div')
    $target.appendChild($todoListPage)

    const todoListPage = new TodoListPage({ 
        $target: $todoListPage,
        initialState: {
            day: 0,
            content: ``,
            isCompleted: false
        }
    })


    // <button onClick=get()>GET</button>
    // <button onClick=post()>POST</button>
    // <button onClick=put()>PUT</button>
    // <button onClick=delete()>DELETE</button>
    // const $div = document.createElement('div')
    // const get = async () => {
    //     const res = await request(``)
    //     $div.innerHTML = `${res}`
    //     $target.appendChild($div)
    //     console.log(res)
    // }
    // const post = async () => {
        // await request(``, { Method: 'POST', body: { day: 1 } }) 
        // const res = await request(``)
        // concole.log(res)
    // }
    // const put = async () => {
        // await request(`/${this.state.day}`, { Method: 'PUT', body: { day: 1 } })
        // const res = await request(``)
        // concole.log(res)
    // }
    // const delete = async () => {
        // await request(`/${this.state.day}`, { Method: 'DELETE' })
        // const res = await request(``)
        // concole.log(res)
    // }

}