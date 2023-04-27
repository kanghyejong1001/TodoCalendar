package com.example.oneNine.domain.todo;

import com.example.oneNine.domain.user.User;
import jakarta.persistence.*;


import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long todoId;

    @Column(nullable = false, name = "todoDate")
    private Date todoDate;

    @Column(nullable = false, name = "todoName")
    private String todoName;

    @Column(nullable = false, name = "todoToggle")
    private boolean todoToggle;

    protected Todo() {}

    public Todo(Date todoDate, String todoName, boolean todoToggle) {
        this.todoDate = todoDate;
        this.todoName = todoName;
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
