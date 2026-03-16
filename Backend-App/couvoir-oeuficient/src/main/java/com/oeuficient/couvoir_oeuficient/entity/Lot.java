package com.oeuficient.couvoir_oeuficient.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "lots")
@Getter
@Setter
public class Lot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false, unique = true)
    private Integer num_lot;

    private Integer quantiteOeuf;
    private String fournisseur; 
    private LocalDate dateArrivee;
    private String statut;
    
    //Relation entre Lot et Espece
    @ManyToOne
    @JoinColumn(name = "id_espece")
    private Espece espece;
    

    //Relation entre incubation et lot
    @OneToMany(mappedBy = "lot")
    @JsonIgnore
    private List<Incubation>incubations;

    //Relation entre Eclosion et lot
    @OneToMany(mappedBy = "lot")
    @JsonIgnore
    private List<Eclosion>eclosions;
}
