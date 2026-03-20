package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Eclosion;

public interface EclosionRepository extends JpaRepository<Eclosion, Integer> {
}