package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oeuficient.couvoir_oeuficient.dto.LotDTO;
import com.oeuficient.couvoir_oeuficient.entity.Lot;
import com.oeuficient.couvoir_oeuficient.service.LotService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/lots")
public class LotController {
    private final LotService lotService;
    public LotController(LotService lotService){
        this.lotService = lotService;
    }

    @PostMapping
    public Lot creerLot (@Valid @RequestBody LotDTO dto) {
        
        return lotService.creerLot(dto);
    }

    @GetMapping
    public List<Lot> getLots(){
        return lotService.getAllLots();
    }
    
}
