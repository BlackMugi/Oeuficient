package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.IncubationDTO;
import com.oeuficient.couvoir_oeuficient.entity.Chariot;
import com.oeuficient.couvoir_oeuficient.entity.Incubation;
import com.oeuficient.couvoir_oeuficient.entity.Lot;
import com.oeuficient.couvoir_oeuficient.repository.ChariotRepository;
import com.oeuficient.couvoir_oeuficient.repository.IncubationRepository;
import com.oeuficient.couvoir_oeuficient.repository.LotRepository;

import java.util.List;

@Service
public class IncubationService {

    private final IncubationRepository incubationRepository;
    private final LotRepository lotRepository;
    private final ChariotRepository chariotRepository;

    public IncubationService(IncubationRepository incubationRepository,
                             LotRepository lotRepository,
                             ChariotRepository chariotRepository) {
        this.incubationRepository = incubationRepository;
        this.lotRepository = lotRepository;
        this.chariotRepository = chariotRepository;
    }

    public Incubation creerIncubation(IncubationDTO dto) {

        Lot lot = lotRepository.findById(dto.getLotId())
                .orElseThrow(() -> new RuntimeException("Lot non trouvé"));

        Chariot chariot = chariotRepository.findById(dto.getChariotId())
                .orElseThrow(() -> new RuntimeException("Chariot non trouvé"));

        // 🔥 Règle métier 1 : quantité <= stock du lot
        if (dto.getQuantiteOeufPlacee() > lot.getQuantiteOeuf()) {
            throw new RuntimeException("Quantité supérieure au stock du lot");
        }

        // 🔥 Règle métier 2 : capacité du chariot
        if (dto.getQuantiteOeufPlacee() > chariot.getCapaciteMaxOeuf()) {
            throw new RuntimeException("Dépasse la capacité du chariot");
        }

        // 🔥 Règle métier 3 : cohérence des dates
        if (dto.getDateFinIncubation().isBefore(dto.getDateDebutIncubation())) {
            throw new RuntimeException("Date de fin invalide");
        }

        Incubation incubation = new Incubation();
        incubation.setQuantiteOeufPlacee(dto.getQuantiteOeufPlacee());
        incubation.setStatut(dto.getStatut());
        incubation.setDateDebutIncubation(dto.getDateDebutIncubation());
        incubation.setDateFinIncubation(dto.getDateFinIncubation());
        incubation.setLot(lot);
        incubation.setChariot(chariot);

        return incubationRepository.save(incubation);
    }

    public List<Incubation> getAllIncubations() {
        return incubationRepository.findAll();
    }
}