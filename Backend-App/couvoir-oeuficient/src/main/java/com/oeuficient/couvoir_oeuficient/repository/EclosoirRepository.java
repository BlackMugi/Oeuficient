package com.oeuficient.couvoir_oeuficient.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.oeuficient.couvoir_oeuficient.entity.Eclosoir;

public interface EclosoirRepository extends JpaRepository<Eclosoir, Integer> {
    boolean existsByNomEclosoir(String nomEclosoir);
}