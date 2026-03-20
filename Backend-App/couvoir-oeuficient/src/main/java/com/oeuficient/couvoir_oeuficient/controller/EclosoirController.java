package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;

import com.oeuficient.couvoir_oeuficient.dto.EclosoirDTO;
import com.oeuficient.couvoir_oeuficient.entity.Eclosoir;
import com.oeuficient.couvoir_oeuficient.service.EclosoirService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/eclosoirs")
public class EclosoirController {

    private final EclosoirService eclosoirService;

    public EclosoirController(EclosoirService eclosoirService) {
        this.eclosoirService = eclosoirService;
    }

    @PostMapping
    public Eclosoir creerEclosoir(@Valid @RequestBody EclosoirDTO dto) {
        return eclosoirService.creerEclosoir(dto);
    }

    @GetMapping
    public List<Eclosoir> getEclosoirs() {
        return eclosoirService.getAllEclosoirs();
    }
}