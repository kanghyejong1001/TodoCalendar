package com.example.oneNine.controller.user;

public class Person {
    String name;
    int age;
    String adderess;

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setAdderess(String adderess) {
        this.adderess = adderess;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getAdderess() {
        return adderess;
    }

    public Person(String name, int age, String adderess) {
        this.name = name;
        this.age = age;
        this.adderess = adderess;
    }
}