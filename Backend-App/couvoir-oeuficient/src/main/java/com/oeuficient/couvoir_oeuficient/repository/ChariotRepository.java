package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Chariot;

public interface ChariotRepository extends JpaRepository<Chariot, Integer> {
    boolean existsByNomChariot(String nomChariot);
}