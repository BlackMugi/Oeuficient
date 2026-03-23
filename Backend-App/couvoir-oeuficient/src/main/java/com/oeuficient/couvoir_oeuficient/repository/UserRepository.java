package com.oeuficient.couvoir_oeuficient.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}
