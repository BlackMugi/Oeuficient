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
@Table(name = "couvoirs")
@Getter
@Setter

public class Couvoir {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nomCouvoir;

    //Relation entre Section et couvoir
    @ManyToOne
    @JoinColumn(name = "id_section")
    private Section section;

    //Relation entre Couvoir et Chariot
    @OneToMany(mappedBy = "couvoir")
    @JsonIgnore
    private List<Chariot>chariots;
}
