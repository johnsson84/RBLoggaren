package com.github.johnsson84.RBloggaren.payload.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Set;

public class SignupRequest {

    @NotBlank
    @Size(min = 2, max = 30)
    private String username;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    @NotBlank
    private String first_name;

    @NotBlank
    private String last_name;

    private Set<String> roles;

    public @NotBlank @Size(min = 2, max = 30) String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank @Size(min = 2, max = 30) String username) {
        this.username = username;
    }

    public @NotBlank @Size(min = 6, max = 40) String getPassword() {
        return password;
    }

    public void setPassword(@NotBlank @Size(min = 6, max = 40) String password) {
        this.password = password;
    }

    public @NotBlank String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(@NotBlank String first_name) {
        this.first_name = first_name;
    }

    public @NotBlank String getLast_name() {
        return last_name;
    }

    public void setLast_name(@NotBlank String last_name) {
        this.last_name = last_name;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }
}
