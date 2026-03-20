package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.EclosoirDTO;
import com.oeuficient.couvoir_oeuficient.entity.Eclosoir;
import com.oeuficient.couvoir_oeuficient.entity.Section;
import com.oeuficient.couvoir_oeuficient.repository.EclosoirRepository;
import com.oeuficient.couvoir_oeuficient.repository.SectionRepository;

import java.util.List;

@Service
public class EclosoirService {

    private final EclosoirRepository eclosoirRepository;
    private final SectionRepository sectionRepository;

    public EclosoirService(EclosoirRepository eclosoirRepository,
                           SectionRepository sectionRepository) {
        this.eclosoirRepository = eclosoirRepository;
        this.sectionRepository = sectionRepository;
    }

    public Eclosoir creerEclosoir(EclosoirDTO dto) {

        if (eclosoirRepository.existsByNomEclosoir(dto.getNomEclosoir())) {
            throw new RuntimeException("Cet éclosoir existe déjà");
        }

        Section section = sectionRepository.findById(dto.getSectionId())
                .orElseThrow(() -> new RuntimeException("Section non trouvée"));

        Eclosoir eclosoir = new Eclosoir();
        eclosoir.setNomEclosoir(dto.getNomEclosoir());
        eclosoir.setSection(section);

        return eclosoirRepository.save(eclosoir);
    }

    public List<Eclosoir> getAllEclosoirs() {
        return eclosoirRepository.findAll();
    }
}