package com.oeuficient.couvoir_oeuficient.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LotDTO {
    @NotNull(message = "Le numéro de lot est obligatoire")
    private Integer numLot;

    @NotNull(message = "La quantité d'oeufs est obligatoire")
    @Min(value = 1, message = "La quantité d'oeufs ne peut pas être négatif")
    private Integer quantiteOeuf;
    
    @NotBlank(message = "Le nom de l'entité du fournisseur est obligatoire")
    private String fournisseur; 

    @NotNull(message = "Veuillez saisir la date d'arrivée")
    @PastOrPresent(message = "La date d'arrivée ne peut pas être dans le futur")
    private LocalDate dateArrivee;

    @NotBlank(message = "Le statut du lot est obligatoire")
    private String statut;

    @NotNull(message = "L'id espece est obligatoire")
    private Integer especeId;
}
