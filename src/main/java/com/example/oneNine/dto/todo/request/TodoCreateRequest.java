package com.example.oneNine.dto.todo.request;

import java.time.LocalDateTime;
import java.util.Date;

public class TodoCreateRequest {
    private String todoName;
    private Date todoDate;
    private String startTime;
    private String endTime;


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
