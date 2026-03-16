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
@Table(name = "incubations")
@Getter
@Setter
public class Incubation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantiteOeufPlacee;
    private String statut;
    private LocalDate dateDebutIncubation;
    private LocalDate dateFinIncubation;

    //Relation entre incubation et lot
    @ManyToOne
    @JoinColumn(name = "id_Lot")
    private Lot lot;

    //Relation entre incubation et chariot
    @ManyToOne
    @JoinColumn(name = "id_chariot")
    private Chariot chariot;
}
