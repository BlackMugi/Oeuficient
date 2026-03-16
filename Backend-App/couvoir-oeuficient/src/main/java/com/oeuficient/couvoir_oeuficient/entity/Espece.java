package com.oeuficient.couvoir_oeuficient.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "especes")
@Getter
@Setter
public class Espece {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nom_espece;
    private Integer duree_incubation;
    private Integer duree_eclosion;
    private String image_url;
    private String description; 

    //Relation entre Espece et Lot
    @OneToMany(mappedBy = "espece")
    @JsonIgnore
    private List<Lot>lots;

}
