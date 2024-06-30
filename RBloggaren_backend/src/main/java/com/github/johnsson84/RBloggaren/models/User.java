package com.github.johnsson84.RBloggaren.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = "username")})
public class User {

    // VARIABLES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Size(max = 30)
    private String username;

    @NotBlank
    private String password;

    @NotBlank
    @Size(max = 30)
    private String first_name;

    @NotBlank
    @Size(max = 30)
    private String last_name;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    // CONSTRUCTORS

    public User() {
    }

    public User(long id, String username, String password, String first_name, String last_name, Set<Role> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.roles = roles;
    }

    public User(String username, String password, String first_name, String last_name) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
    }

    // GETTERS

    public long getId() {
        return id;
    }

    public @NotBlank @Size(max = 30) String getUsername() {
        return username;
    }

    public @NotBlank String getPassword() {
        return password;
    }

    public @NotBlank @Size(max = 30) String getFirst_name() {
        return first_name;
    }

    public @NotBlank @Size(max = 30) String getLast_name() {
        return last_name;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    // SETTERS

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(@NotBlank @Size(max = 30) String username) {
        this.username = username;
    }

    public void setPassword(@NotBlank String password) {
        this.password = password;
    }

    public void setFirst_name(@NotBlank @Size(max = 30) String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(@NotBlank @Size(max = 30) String last_name) {
        this.last_name = last_name;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
