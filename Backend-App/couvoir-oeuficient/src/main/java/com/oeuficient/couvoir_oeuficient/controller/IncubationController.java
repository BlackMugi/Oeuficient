package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;

import com.oeuficient.couvoir_oeuficient.dto.IncubationDTO;
import com.oeuficient.couvoir_oeuficient.entity.Incubation;
import com.oeuficient.couvoir_oeuficient.service.IncubationService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/incubations")
public class IncubationController {

    private final IncubationService incubationService;

    public IncubationController(IncubationService incubationService) {
        this.incubationService = incubationService;
    }

    @PostMapping
    public Incubation creerIncubation(@Valid @RequestBody IncubationDTO dto) {
        return incubationService.creerIncubation(dto);
    }

    @GetMapping
    public List<Incubation> getIncubations() {
        return incubationService.getAllIncubations();
    }
}