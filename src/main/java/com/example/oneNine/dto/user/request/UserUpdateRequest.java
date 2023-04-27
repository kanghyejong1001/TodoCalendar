package com.example.oneNine.dto.user.request;

public class UserUpdateRequest {
    private long id;
    private String email;
    private String password;
    private String name;

    public UserUpdateRequest(long id, String email, String password, String name) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }
}
