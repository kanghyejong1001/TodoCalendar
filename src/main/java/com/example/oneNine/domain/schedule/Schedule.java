package com.example.oneNine.domain.schedule;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String schedule = null;

    @Column
    private LocalDateTime localDateTime;

    protected Schedule() {}
}
