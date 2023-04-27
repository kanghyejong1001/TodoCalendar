package com.example.oneNine.repository.user;

import com.example.oneNine.dto.user.response.UserResponse;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.*;

@Repository
public class UserJdbcRepository {

    private final JdbcTemplate jdbcTemplate;
    public UserJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void saveUser(String email, String password, String name) {
        String sql = "INSERT INTO user (email, password, name) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, email, password, name);
    }

    public List<UserResponse> getUsers() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, new RowMapper<UserResponse>() {
            @Override
            public UserResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
                long id = rs.getLong("id");
                String email = rs.getString("email");
                String password = rs.getString("password");
                String name = rs.getString("name");
                return new UserResponse(id, email, password, name);
            }
        });
    }
    public boolean isUserNotExist(long id) {
        String readSql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.query(readSql, (rs, rowNum)->0, id).isEmpty();
    }

    public void updateUserName (long id, String password) {
        String sql = "UPDATE user SET password = ? WHERE id = ?";
        jdbcTemplate.update(sql, password, id);
    }
}
