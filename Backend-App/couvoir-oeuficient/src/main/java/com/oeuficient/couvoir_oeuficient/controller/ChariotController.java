package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;

import com.oeuficient.couvoir_oeuficient.dto.ChariotDTO;
import com.oeuficient.couvoir_oeuficient.entity.Chariot;
import com.oeuficient.couvoir_oeuficient.service.ChariotService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/chariots")
public class ChariotController {

    private final ChariotService chariotService;

    public ChariotController(ChariotService chariotService) {
        this.chariotService = chariotService;
    }

    @PostMapping
    public Chariot creerChariot(@Valid @RequestBody ChariotDTO dto) {
        return chariotService.creerChariot(dto);
    }

    @GetMapping
    public List<Chariot> getChariots() {
        return chariotService.getAllChariots();
    }
}