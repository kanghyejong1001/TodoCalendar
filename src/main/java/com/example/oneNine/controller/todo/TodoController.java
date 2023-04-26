package com.example.oneNine.controller.todo;

import com.example.oneNine.dto.todo.request.TodoCreateRequest;
import com.example.oneNine.dto.todo.response.TodoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
@RestController
public class TodoController {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TodoController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping("/createTodo")
    public void createTodo(@RequestBody TodoCreateRequest request) {
        String sql = "INSERT INTO todo (todoName, todoDate, startTime, endTime) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, request.getTodoName(),
                                 request.getTodoDate(),
                                 request.getStartTime(),
                                 request.getEndTime());
    }

    @GetMapping("/getTodo")
    public List<TodoResponse> getTodo() {
        String sql = "SELECT * FROM todo";
        return jdbcTemplate.query(sql, new RowMapper<TodoResponse>() {
            @Override
            public TodoResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
                long todoId = rs.getLong("todoId");
                String todoName = rs.getString("todoName");
                Date todoDate = rs.getDate("todoDate");
                String startTime = rs.getString("startTime");
                String endTime = rs.getString("endTime");
                return new TodoResponse(todoId, todoName, todoDate,
                                        startTime, endTime);
            }
        });
    }
}
