package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oeuficient.couvoir_oeuficient.entity.Lot;

public interface LotRepository extends JpaRepository <Lot, Integer> {
    Boolean existsByNumLot(Integer numLot);
}
