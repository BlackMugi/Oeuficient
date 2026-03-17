package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oeuficient.couvoir_oeuficient.entity.Espece;

public interface EspeceRepository extends JpaRepository<Espece, Integer> {
    Boolean existsByNomEspece(String nomEspece);
}
