package com.oeuficient.couvoir_oeuficient.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    @NotBlank(message = "Le nom est obligatoire") //oblige l'utilisateur à remplire les champs
    private String nom;

    @NotBlank(message = "Le prenom est obligatoire") 
    private String prenom;

    @NotBlank(message = "L'email est obligatoire")
    @Email (message = "email invalide") // format email
    private String email;

    @NotBlank(message = "Le mot de passe est obligatoire")
    @Size(min = 6,  message = "Le mot doit être au moins 6 caractères ")
    private String password;

    private Integer roleId; 
    private Integer sectionId;
    private String photo_url;
}