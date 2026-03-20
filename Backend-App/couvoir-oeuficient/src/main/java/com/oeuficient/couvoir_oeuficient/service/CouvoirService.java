package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.CouvoirDTO;
import com.oeuficient.couvoir_oeuficient.entity.Couvoir;
import com.oeuficient.couvoir_oeuficient.entity.Section;
import com.oeuficient.couvoir_oeuficient.repository.CouvoirRepository;
import com.oeuficient.couvoir_oeuficient.repository.SectionRepository;

import java.util.List;

@Service
public class CouvoirService {

    private final CouvoirRepository couvoirRepository;
    private final SectionRepository sectionRepository;

    public CouvoirService(CouvoirRepository couvoirRepository,
                          SectionRepository sectionRepository) {
        this.couvoirRepository = couvoirRepository;
        this.sectionRepository = sectionRepository;
    }

    public Couvoir creerCouvoir(CouvoirDTO dto) {

        if (couvoirRepository.existsByNomCouvoir(dto.getNomCouvoir())) {
            throw new RuntimeException("Ce couvoir existe déjà");
        }

        Section section = sectionRepository.findById(dto.getSectionId())
                .orElseThrow(() -> new RuntimeException("Section non trouvée"));

        Couvoir couvoir = new Couvoir();
        couvoir.setNomCouvoir(dto.getNomCouvoir());
        couvoir.setSection(section);

        return couvoirRepository.save(couvoir);
    }

    public List<Couvoir> getAllCouvoirs() {
        return couvoirRepository.findAll();
    }
}