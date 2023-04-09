export const displayTodoList = (contents) => {
    return `
            ${contents.map(
                ({ day, content, contents, isCompleted}) => {
                    return `
                        <li data-id = "${day}" name = "todo" class="todo-item">
                        <span class="btn-box">
                        <button class="add" name="add-btn" data-id="${day}"> + </button>
                        <button class="remove" name="remove-btn" data-id="${day}"> - </button>
                        <button class="drag" name="drag-btn" data-id="${day}"> :: </button>
                        </span>
                        ${isCompleted ? `<s>${content}</s>` : content}
                        <ul>${displayTodoList(contents)}</ul>
                        </li>
                    `
            }).join('')}
            `

}

