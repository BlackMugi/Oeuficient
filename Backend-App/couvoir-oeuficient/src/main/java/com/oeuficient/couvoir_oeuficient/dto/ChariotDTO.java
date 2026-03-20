package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChariotDTO {

    @NotBlank(message = "Le nom du chariot est obligatoire")
    private String nomChariot;

    @NotNull(message = "La capacité est obligatoire")
    @Min(value = 1, message = "La capacité doit être supérieure à 0")
    private Integer capaciteMaxOeuf;

    @NotBlank(message = "Le statut est obligatoire")
    private String statut;

    @NotNull(message = "L'id du couvoir est obligatoire")
    private Integer couvoirId;
}