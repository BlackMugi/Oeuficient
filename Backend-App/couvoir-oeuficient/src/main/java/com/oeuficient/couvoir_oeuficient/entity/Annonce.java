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
@Table(name = "annonces")
@Getter
@Setter
public class Annonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String type;
    private String titre;
    private String description;
    private LocalDate dateAnnonce;

    //Relation entre Annonce et utilisateur
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;
}
