package com.oeuficient.couvoir_oeuficient.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column (nullable = false, unique = true)
    private String nomRole;

    //Relation entre la table Role et User
    @OneToMany(mappedBy ="role")
    @JsonIgnore
    private List<User>users;
}
