package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoleDTO {
    @NotBlank(message = "Le nom est obligatoire")
    private String nomRole;
}
