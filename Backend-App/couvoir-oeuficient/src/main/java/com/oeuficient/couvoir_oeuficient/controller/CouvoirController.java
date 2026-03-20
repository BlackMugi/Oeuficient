package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;

import com.oeuficient.couvoir_oeuficient.dto.CouvoirDTO;
import com.oeuficient.couvoir_oeuficient.entity.Couvoir;
import com.oeuficient.couvoir_oeuficient.service.CouvoirService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/couvoirs")
public class CouvoirController {

    private final CouvoirService couvoirService;

    public CouvoirController(CouvoirService couvoirService) {
        this.couvoirService = couvoirService;
    }

    @PostMapping
    public Couvoir creerCouvoir(@Valid @RequestBody CouvoirDTO dto) {
        return couvoirService.creerCouvoir(dto);
    }

    @GetMapping
    public List<Couvoir> getCouvoirs() {
        return couvoirService.getAllCouvoirs();
    }
}