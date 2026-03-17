package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oeuficient.couvoir_oeuficient.dto.EspeceDTO;
import com.oeuficient.couvoir_oeuficient.entity.Espece;
import com.oeuficient.couvoir_oeuficient.service.EspeceService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/especes")
public class EspeceController {
    private final EspeceService especeService;

    public EspeceController (EspeceService especeService){
        this.especeService = especeService;
    }

    @PostMapping
    public  Espece creerEspece (@Valid @RequestBody EspeceDTO dto) {  
        return especeService.creerEspece(dto);
    }


    @GetMapping
    public List<Espece>getEspeces() {
        return especeService.getAllEspeces();
    }
    
    
}
