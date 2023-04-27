package com.example.oneNine.dto.todo.request;

import java.time.LocalDateTime;
import java.util.Date;

public class TodoCreateRequest {
    private Date todoDate;
    private String todoName;
    private boolean toggle;

    public TodoCreateRequest(Date todoDate, String todoName, boolean toggle) {
        this.todoDate = todoDate;
        this.todoName = todoName;
        this.toggle = toggle;
    }

    public Date getTodoDate() {
        return todoDate;
    }

    public String getTodoName() {
        return todoName;
    }

    public boolean isToggle() {
        return toggle;
    }
}
