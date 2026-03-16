package com.oeuficient.couvoir_oeuficient.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "chariots")
@Getter
@Setter
public class Chariot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nomChariot;
    private Integer capaciteMaxOeuf;
    private String statut;

    //Relation entre Chariot et Couvoir
    @ManyToOne
    @JoinColumn(name = "id_couvoir")
    private Couvoir couvoir;

    //Relation entre Chariot et Incubation
    @OneToMany(mappedBy = "chariot")
    @JsonIgnore
    private List<Incubation>incubations;
    

}
