package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.AnnonceDTO;
import com.oeuficient.couvoir_oeuficient.entity.Annonce;
import com.oeuficient.couvoir_oeuficient.entity.User;
import com.oeuficient.couvoir_oeuficient.repository.AnnonceRepository;
import com.oeuficient.couvoir_oeuficient.repository.UserRepository;

import java.util.List;

@Service
public class AnnonceService {

    private final AnnonceRepository annonceRepository;
    private final UserRepository userRepository;

    public AnnonceService(AnnonceRepository annonceRepository,
                          UserRepository userRepository) {
        this.annonceRepository = annonceRepository;
        this.userRepository = userRepository;
    }

    public Annonce creerAnnonce(AnnonceDTO dto) {

        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        Annonce annonce = new Annonce();
        annonce.setType(dto.getType());
        annonce.setTitre(dto.getTitre());
        annonce.setDescription(dto.getDescription());
        annonce.setDateAnnonce(dto.getDateAnnonce());
        annonce.setUser(user);

        return annonceRepository.save(annonce);
    }

    public List<Annonce> getAllAnnonces() {
        return annonceRepository.findAll();
    }
}