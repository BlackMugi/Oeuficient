package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;

import com.oeuficient.couvoir_oeuficient.dto.EclosionDTO;
import com.oeuficient.couvoir_oeuficient.entity.Eclosion;
import com.oeuficient.couvoir_oeuficient.service.EclosionService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/eclosions")
public class EclosionController {

    private final EclosionService eclosionService;

    public EclosionController(EclosionService eclosionService) {
        this.eclosionService = eclosionService;
    }

    @PostMapping
    public Eclosion creerEclosion(@Valid @RequestBody EclosionDTO dto) {
        return eclosionService.creerEclosion(dto);
    }

    @GetMapping
    public List<Eclosion> getEclosions() {
        return eclosionService.getAllEclosions();
    }
}