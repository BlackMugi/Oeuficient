package com.oeuficient.couvoir_oeuficient.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.SectionDTO;
import com.oeuficient.couvoir_oeuficient.entity.Section;
import com.oeuficient.couvoir_oeuficient.repository.SectionRepository;

@Service
public class SectionService {

    private final SectionRepository sectionRepository;

    public SectionService (SectionRepository sectionRepository){
        this.sectionRepository = sectionRepository;
    }

    public Section creerSection (SectionDTO dto){
        //On verifie si la section existe déjà 
        if (sectionRepository.existsByNomSection(dto.getNomSection())){
            throw new RuntimeException("Cette Section existe déjà !");
        }

        // On enregistre la nouvelle section
        Section section = new Section();
        section.setNomSection(dto.getNomSection().toUpperCase());

        return sectionRepository.save(section);
    }

    public List<Section> getAllSections(){
        return sectionRepository.findAll();
    }
}
