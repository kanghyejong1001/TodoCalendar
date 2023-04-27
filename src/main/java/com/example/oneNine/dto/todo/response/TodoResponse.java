package com.example.oneNine.dto.todo.response;

import java.time.LocalDateTime;
import java.util.Date;

public class TodoResponse {
    private long todoId;
    private String todoName;
    private Date todoDate;
    private String startTime;
    private String endTime;

    public TodoResponse(long todoId, String todoName, Date todoDate, String startTime, String endTime) {
        this.todoId = todoId;
        this.todoName = todoName;
        this.todoDate = todoDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public long getTodoId() {
        return todoId;
    }

    public String getTodoName() {
        return todoName;
    }

    public Date getTodoDate() {
        return todoDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }
}
