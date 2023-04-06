package com.example.oneNine.domain.todo;

import com.example.oneNine.domain.user.User;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String todoId = null;

    @Column(nullable = false, name = "todoName")
    private String todoName;

    @Column(nullable = false, name = "todoDate")
    private LocalDateTime todoDate;

    @Column(nullable = false, name = "startTime")
    private String startTime;

    @Column(nullable = false, name = "endTime")
    private String endTime;
    protected Todo() {}

}
