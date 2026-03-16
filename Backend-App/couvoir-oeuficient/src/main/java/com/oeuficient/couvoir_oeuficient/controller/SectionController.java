package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oeuficient.couvoir_oeuficient.dto.SectionDTO;
import com.oeuficient.couvoir_oeuficient.entity.Section;
import com.oeuficient.couvoir_oeuficient.service.SectionService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("api/sections")

public class SectionController {
    private final SectionService sectionService;

    public SectionController (SectionService sectionService){
        this.sectionService = sectionService;
    }

    @PostMapping
    public Section creerSection(@Valid @RequestBody SectionDTO dto) {
        
        return sectionService.creerSection(dto);
    }
    

    @GetMapping
    public List<Section> getSections(){
        return sectionService.getAllSections();
    }
    
}
