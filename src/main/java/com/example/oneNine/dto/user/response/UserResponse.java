package com.example.oneNine.dto.user.response;

public class UserResponse {
    private long id;
    private String email;
    private String password;
    private String name;

    public UserResponse(long id, String email, String password, String name) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getEmail() {return email;}
    public String getPassword() {
        return password;
    }
    public String getName() {
        return name;
    }
}
