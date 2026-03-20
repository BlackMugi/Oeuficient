package com.oeuficient.couvoir_oeuficient.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EclosionDTO {

    @NotNull(message = "La date de début est obligatoire")
    private LocalDate dateDebutEclosion;

    @NotNull(message = "La date de fin est obligatoire")
    private LocalDate dateFinEclosion;

    @NotNull(message = "Le nombre de poussins est obligatoire")
    @Min(value = 0, message = "Le nombre de poussins ne peut pas être négatif")
    private Integer nombrePoussin;

    @NotNull(message = "L'id du lot est obligatoire")
    private Integer lotId;

    @NotNull(message = "L'id de l'éclosoir est obligatoire")
    private Integer eclosoirId;
}