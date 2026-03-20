package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;

import com.oeuficient.couvoir_oeuficient.dto.AnnonceDTO;
import com.oeuficient.couvoir_oeuficient.entity.Annonce;
import com.oeuficient.couvoir_oeuficient.service.AnnonceService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/annonces")
public class AnnonceController {

    private final AnnonceService annonceService;

    public AnnonceController(AnnonceService annonceService) {
        this.annonceService = annonceService;
    }

    @PostMapping
    public Annonce creerAnnonce(@Valid @RequestBody AnnonceDTO dto) {
        return annonceService.creerAnnonce(dto);
    }

    @GetMapping
    public List<Annonce> getAnnonces() {
        return annonceService.getAllAnnonces();
    }
}