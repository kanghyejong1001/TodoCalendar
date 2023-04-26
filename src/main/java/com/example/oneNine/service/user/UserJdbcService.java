package com.example.oneNine.service.user;

import com.example.oneNine.dto.user.request.UserCreateRequest;
import com.example.oneNine.dto.user.request.UserUpdateRequest;
import com.example.oneNine.dto.user.response.UserResponse;
import com.example.oneNine.repository.user.UserJdbcRepository;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class UserJdbcService {

    private final UserJdbcRepository userJdbcRepository;

    public UserJdbcService(UserJdbcRepository userJdbcRepository) {
        this.userJdbcRepository = userJdbcRepository;
    }

    public void saveUser(UserCreateRequest request) {
        userJdbcRepository.saveUser(request.getEmail(), request.getPassword(), request.getName());
    }

    public List<UserResponse> getUsers() {
        return userJdbcRepository.getUsers();
    }
    public void updateUser(UserUpdateRequest request) {
        boolean isUserNotExist = userJdbcRepository.isUserNotExist(request.getId());
        if (isUserNotExist) {
            throw new IllegalArgumentException();
        }

        userJdbcRepository.updateUserName(request.getId(), request.getPassword());
    }
}