package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SectionDTO {
    @NotBlank(message = "Le nom de la section est obligatoire")
    private String nomSection;
}
