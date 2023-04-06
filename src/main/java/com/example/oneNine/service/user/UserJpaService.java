package com.example.oneNine.service.user;

import com.example.oneNine.domain.user.User;
import com.example.oneNine.domain.user.UserRepository;
import com.example.oneNine.dto.user.request.UserCreateRequest;
import com.example.oneNine.dto.user.request.UserUpdateRequest;
import com.example.oneNine.dto.user.response.UserResponse;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserJpaService {
    private final UserRepository userRepository;

    public UserJpaService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(UserCreateRequest request) {
        User u = userRepository.save(new User(request.getEmail(),
                                     request.getPassword(),
                                     request.getName()));
    }

    public List<UserResponse> getUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
            .map(user -> new UserResponse(user.getId(),user.getEmail(),user.getPassword(),user.getName()))
            .collect(Collectors.toList());
    }

    public void updateUser(UserUpdateRequest request) {
        User user = userRepository.findById(request.getId())
                .orElseThrow(IllegalArgumentException::new);

        user.updatePassword(request.getPassword());
        userRepository.save(user);
    }
}
