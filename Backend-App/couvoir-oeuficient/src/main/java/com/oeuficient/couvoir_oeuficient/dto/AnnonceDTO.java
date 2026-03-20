package com.oeuficient.couvoir_oeuficient.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnnonceDTO {

    @NotBlank(message = "Le type est obligatoire")
    private String type;

    @NotBlank(message = "Le titre est obligatoire")
    private String titre;

    @NotBlank(message = "La description est obligatoire")
    private String description;

    @NotNull(message = "La date est obligatoire")
    private LocalDate dateAnnonce;

    @NotNull(message = "L'id de l'utilisateur est obligatoire")
    private Integer userId;
}