package com.github.johnsson84.RBloggaren.repository;

import com.github.johnsson84.RBloggaren.models.ERole;
import com.github.johnsson84.RBloggaren.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
