package com.oeuficient.couvoir_oeuficient.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponseDTO {
    private String token;
    private String type = "Bearer";
    private Integer userId;
    private String email;
    private String prenom;
    private String role;
    private String section;
    
    public AuthResponseDTO(String token, Integer userId, String email, String prenom,  String role, String section) {
        this.token = token;
        this.userId = userId;
        this.email = email;
        this.prenom = prenom;
        this.role = role;
        this.section = section;
    }
}