package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.IncubationDTO;
import com.oeuficient.couvoir_oeuficient.entity.Chariot;
import com.oeuficient.couvoir_oeuficient.entity.Espece;
import com.oeuficient.couvoir_oeuficient.entity.Incubation;
import com.oeuficient.couvoir_oeuficient.entity.Lot;
import com.oeuficient.couvoir_oeuficient.repository.ChariotRepository;
import com.oeuficient.couvoir_oeuficient.repository.IncubationRepository;
import com.oeuficient.couvoir_oeuficient.repository.LotRepository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
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
    public List<Incubation> getAllIncubations() {
        return incubationRepository.findAll();
    }

    @Transactional
    public Incubation creerIncubation(IncubationDTO dto) {
        Lot lot = lotRepository.findById(dto.getLotId())
                .orElseThrow(() -> new RuntimeException("Lot non trouvé"));

        Chariot chariot = chariotRepository.findById(dto.getChariotId())
                .orElseThrow(() -> new RuntimeException("Chariot non trouvé"));

        // Vérifier la disponibilité du stock
        if (lot.getQuantiteOeuf() == null || lot.getQuantiteOeuf() < 0) {
            throw new RuntimeException("Stock du lot invalide");
        }

        // Vérifier la quantité du lot est non nulle
        if (dto.getQuantiteOeufPlacee() == null
                || dto.getQuantiteOeufPlacee() <= 0) {
            throw new RuntimeException("La quantité doit être supérieure à 0");
        }

        if (dto.getQuantiteOeufPlacee() > lot.getQuantiteOeuf()) {
            throw new RuntimeException("Quantité supérieure au stock du lot");
        }

        // Vérifier la capacité du chariot
        if (chariot.getCapaciteMaxOeuf() == null
                || dto.getQuantiteOeufPlacee() > chariot.getCapaciteMaxOeuf()) {
            throw new RuntimeException("Dépasse la capacité du chariot");
        }
        
        
        // Vérifier les dates
        Espece espece = lot.getEspece();
            if (espece == null || espece.getDureeIncubation() == null) {
                throw new RuntimeException("Le lot n'a pas d'espèce ou de durée d'incubation définie");
        }

        LocalDate dateFin = dto.getDateDebutIncubation()
            .plusDays(espece.getDureeIncubation());

        Incubation incubation = new Incubation();
        incubation.setQuantiteOeufPlacee(dto.getQuantiteOeufPlacee());
        incubation.setStatut(dto.getStatut());
        incubation.setDateDebutIncubation(dto.getDateDebutIncubation());
        incubation.setDateFinIncubation(dateFin);
        incubation.setLot(lot);
        incubation.setChariot(chariot);

        // Déduire les œufs du stock du lot
        lot.setQuantiteOeuf(
                lot.getQuantiteOeuf() - dto.getQuantiteOeufPlacee()
        );

        lotRepository.save(lot);

        return incubationRepository.save(incubation);
    }
}