package com.oeuficient.couvoir_oeuficient.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IncubationDTO {

    @NotNull(message = "La quantité d'œufs est obligatoire")
    @Min(value = 1, message = "La quantité doit être supérieure à 0")
    private Integer quantiteOeufPlacee;

    @NotNull(message = "Le statut est obligatoire")
    private String statut;

    @NotNull(message = "La date de début est obligatoire")
    private LocalDate dateDebutIncubation;

    @NotNull(message = "La date de fin est obligatoire")
    private LocalDate dateFinIncubation;

    @NotNull(message = "L'id du lot est obligatoire")
    private Integer lotId;

    @NotNull(message = "L'id du chariot est obligatoire")
    private Integer chariotId;
}