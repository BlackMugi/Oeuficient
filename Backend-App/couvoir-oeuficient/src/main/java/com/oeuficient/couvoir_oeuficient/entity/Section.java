package com.oeuficient.couvoir_oeuficient.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "sections")
@Getter
@Setter
public class Section { 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_section;
    private String nom_section;

    //Relation entre la table sections et users
    @OneToMany(mappedBy = "section")
    private List<User>users;

    //Relation entre la table sections et Couvoir
    @OneToMany(mappedBy = "section")
    private List<Couvoir>couvoirs;

    //Relation entre la table sections et Eclosoir
    @OneToMany(mappedBy = "section")
    private List<Eclosoir>eclosoirs;
}
