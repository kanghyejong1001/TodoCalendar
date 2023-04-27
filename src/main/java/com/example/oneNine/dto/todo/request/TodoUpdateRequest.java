package com.example.oneNine.dto.todo.request;

import jakarta.persistence.Column;

import java.time.LocalDateTime;
import java.util.Date;

public class TodoUpdateRequest {
    private long todoId;
    private String todoName;
    private Date todoDate;
    private boolean todoToggle;

    public long getTodoId() {
        return todoId;
    }

    public String getTodoName() {
        return todoName;
    }

    public Date getTodoDate() {
        return todoDate;
    }
    public boolean isTodoToggle() {
        return todoToggle;
    }
}
