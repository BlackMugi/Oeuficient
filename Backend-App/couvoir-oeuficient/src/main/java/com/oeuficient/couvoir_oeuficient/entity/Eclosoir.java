package com.oeuficient.couvoir_oeuficient.entity;

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
@Table(name = "eclosoirs")
@Getter
@Setter
public class Eclosoir {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false, unique = true)
    private String nomEclosoir;
    
    //Relation entre Eclosoir et Section
    @ManyToOne
    @JoinColumn(name = "id_section")
    private Section section;

    //Relation entre Eclosoir et Eclosion
    @OneToMany(mappedBy = "eclosoir")
    @JsonIgnore
    private List<Eclosion>eclosions;
    
}
