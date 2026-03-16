package com.oeuficient.couvoir_oeuficient.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.oeuficient.couvoir_oeuficient.dto.UserDTO;
import com.oeuficient.couvoir_oeuficient.entity.User;
import com.oeuficient.couvoir_oeuficient.entity.Role;
import com.oeuficient.couvoir_oeuficient.entity.Section;
import com.oeuficient.couvoir_oeuficient.repository.UserRepository;
import com.oeuficient.couvoir_oeuficient.repository.RoleRepository;
import com.oeuficient.couvoir_oeuficient.repository.SectionRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final SectionRepository sectionRepository;
    private final PasswordEncoder passwordEncoder ;

    public UserService(UserRepository userRepository, 
                       RoleRepository roleRepository, 
                       SectionRepository sectionRepository, 
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.sectionRepository = sectionRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User creerUser(UserDTO dto) {
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Cet email est déjà utilisé");
        }

        Role role = roleRepository.findById(dto.getRoleId())
                .orElseThrow(() -> new RuntimeException("Rôle non trouvé"));

        // Creationd de notre utilisateur
        User user = new User();
        user.setNom(dto.getNom());
        user.setPrenom(dto.getPrenom());
        user.setEmail(dto.getEmail());

        //Hashage du mot de passe avant l'enregistrement 
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole(role);
        user.setPhotoUrl(dto.getPhotoUrl());

        // Affecter la section seulement si ce n'est pas un admin
        if (!role.getNomRole().equalsIgnoreCase("ADMIN")) {
            if (dto.getSectionId() == null) {
                throw new RuntimeException("La section est obligatoire pour ce rôle");
            }
            Section section = sectionRepository.findById(dto.getSectionId())
                    .orElseThrow(() -> new RuntimeException("Section non trouvée"));
            user.setSection(section);
        } else {
            user.setSection(null); // Admin n’a pas de section
        }

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}