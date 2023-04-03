import { getItem } from "./storage.js"

export const displayTodoList = (contents) => {

    return `<ul>
                ${contents.map(
                    (content) => {
                        return `
                            <li data-id = "${content.day}" name = "todo">
                                <span class="btn-box">
                                    <button name="add-btn" data-id="${content.day}"> + </button>
                                    <button name="remove-btn" data-id="${content.day}"> - </button>
                                    <button name="drag-btn" data-id="${content.day}"> :: </button>
                                </span>
                                <ul>${displayTodoList(content.contents)}</ul>
                            </li>
                        `
                    }).join('')}
                        
            </ul>`

}

