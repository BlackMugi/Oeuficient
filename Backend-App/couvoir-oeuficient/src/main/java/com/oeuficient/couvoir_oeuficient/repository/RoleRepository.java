package com.oeuficient.couvoir_oeuficient.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{
    boolean existsByNomRole(String nomRole);
    
    Optional<Role> findByNomRole(String nomRole);
}
