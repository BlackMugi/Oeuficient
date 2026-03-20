package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Annonce;

public interface AnnonceRepository extends JpaRepository<Annonce, Integer> {
}