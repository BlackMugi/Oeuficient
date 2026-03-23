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
    private String role;
    
    public AuthResponseDTO(String token, Integer userId, String email, String role) {
        this.token = token;
        this.userId = userId;
        this.email = email;
        this.role = role;
    }
}