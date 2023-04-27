package com.example.oneNine.controller.user;

import com.example.oneNine.dto.user.request.UserCreateRequest;
import com.example.oneNine.dto.user.request.UserUpdateRequest;
import com.example.oneNine.dto.user.response.UserResponse;
import com.example.oneNine.service.user.UserJdbcService;
import com.example.oneNine.service.user.UserJpaService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserJpaService userService;

    public UserController(UserJpaService userJdbcService) {
        this.userService = userJdbcService;
    }

    @PostMapping("/user")
    public void saveUser(@RequestBody UserCreateRequest request) {
        userService.saveUser(request);
    }

    @GetMapping("/user")
    public List<UserResponse> getUser() {
        return userService.getUsers();
    }

    @PutMapping("/user")
    public void updateUser(@RequestBody UserUpdateRequest request) {
        userService.updateUser(request);
    }
}