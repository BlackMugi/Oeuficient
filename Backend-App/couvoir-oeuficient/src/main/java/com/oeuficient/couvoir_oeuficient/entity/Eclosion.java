package com.oeuficient.couvoir_oeuficient.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "eclosions")
@Getter
@Setter
public class Eclosion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_eclosion;
    private LocalDate date_debut_eclosion;
    private LocalDate date_fin_eclosion;
    private Integer nombre_poussin;

    //Relation entre Eclosion et lot
    @ManyToOne
    @JoinColumn(name = "id_lot")
    private Lot lot;

    
    //Relation entre Eclosion et eclosoir
    @ManyToOne
    @JoinColumn(name = "id_eclosoir")
    private Eclosoir eclosoir;

}
