package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CouvoirDTO {

    @NotBlank(message = "Le nom du couvoir est obligatoire")
    private String nomCouvoir;

    @NotNull(message = "L'id de la section est obligatoire")
    private Integer sectionId;
}