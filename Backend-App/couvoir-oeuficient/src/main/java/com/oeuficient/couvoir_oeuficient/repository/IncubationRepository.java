package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Incubation;

public interface IncubationRepository extends JpaRepository<Incubation, Integer> {
}