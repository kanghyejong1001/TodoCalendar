package com.example.oneNine.domain.user;

import jakarta.persistence.*;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = null;

    @Column(nullable = false, length = 30, name = "email")
    private String email;

    @Column(nullable = false, length = 20, name = "password")
    private String password;

    @Column(nullable = false, length =20, name = "name")
    private String name;
    protected User() {
        // JPA를 사용하기 위해서는 다음과 같이 디폴트 생성자가 필수적이다.
    }

    public User(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {return name;}

    public Long getId() {return id;}

    public void updatePassword(String password) {
        this.password = password;
    }
}
