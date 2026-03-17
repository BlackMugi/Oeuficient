package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class EspeceDTO {
    @NotBlank(message = "Le nom de l'espece est obligatoire")
    private String nomEspece;

    @NotNull(message = "La durée d'incubation est obligatoire")
    @Min(value= 10, message = "La durée d'incubation doit être au moins 10 jours")
    private Integer dureeIncubation;

    @NotNull(message = "La durée d'éclosion est obligatoire")
    @Min(value= 2, message = "La durée d'éclosion doit être au moins 2 jours")
    private Integer dureeEclosion;
    
    private String imageUrl;
    private String description;

}
