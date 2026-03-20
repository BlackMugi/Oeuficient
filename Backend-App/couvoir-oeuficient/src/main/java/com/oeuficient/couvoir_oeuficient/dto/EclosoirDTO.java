package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EclosoirDTO {

    @NotBlank(message = "Le nom de l'éclosoir est obligatoire")
    private String nomEclosoir;

    @NotNull(message = "L'id de la section est obligatoire")
    private Integer sectionId;
}