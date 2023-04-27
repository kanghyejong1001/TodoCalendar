package com.example.oneNine.dto.todo.response;

import java.time.LocalDateTime;
import java.util.Date;

public class TodoResponse {
    private long todoId;
    private Date todoDate;
    private String todoName;
    private boolean todoToggle;

    public TodoResponse(long todoId, Date todoDate, String todoName, boolean todoToggle) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.todoDate = todoDate;
        this.todoToggle = todoToggle;
    }

    public long getTodoId() {
        return todoId;
    }

    public Date getTodoDate() {
        return todoDate;
    }

    public String getTodoName() {
        return todoName;
    }

    public boolean isTodoToggle() {
        return todoToggle;
    }
}
