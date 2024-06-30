package com.github.johnsson84.RBloggaren.models;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    // Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    // Constructors
    public Role() {

    }
    public Role(ERole name) {
        this.name = name;
    }

    // GETTERS

    public Integer getId() {
        return id;
    }

    public ERole getName() {
        return name;
    }

    // SETTERS

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(ERole name) {
        this.name = name;
    }
}