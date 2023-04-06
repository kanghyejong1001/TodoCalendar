package com.example.oneNine.domain.dday;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Dday {
    @Id
    @Column
    private String ddayTask = null;

    @Column
    private LocalDateTime localDateTime;

    protected Dday() {}
}
