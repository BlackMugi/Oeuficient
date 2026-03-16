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
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nom;
    private String prenom;

    @Column(unique = true)
    private String email;

    @JsonIgnore
    private String password;

    private String photo_url;

    //Relation entre la table User et Role
    @ManyToOne
    @JoinColumn(name = "id_role")
    private Role role;

    //Relation entre la table User et Section
    @ManyToOne
    @JoinColumn(name = "id_section")
    private Section section ;

    //Relation entre Annonce et utilisateur
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Annonce>annonces;
}
