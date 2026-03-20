package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Couvoir;

public interface CouvoirRepository extends JpaRepository<Couvoir, Integer> {
    boolean existsByNomCouvoir(String nomCouvoir);
}