package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.EclosionDTO;
import com.oeuficient.couvoir_oeuficient.entity.Eclosion;
import com.oeuficient.couvoir_oeuficient.entity.Lot;
import com.oeuficient.couvoir_oeuficient.entity.Eclosoir;
import com.oeuficient.couvoir_oeuficient.entity.Espece;
import com.oeuficient.couvoir_oeuficient.entity.Incubation;
import com.oeuficient.couvoir_oeuficient.repository.EclosionRepository;
import com.oeuficient.couvoir_oeuficient.repository.IncubationRepository;
import com.oeuficient.couvoir_oeuficient.repository.LotRepository;
import com.oeuficient.couvoir_oeuficient.repository.EclosoirRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class EclosionService {

    private final EclosionRepository eclosionRepository;
    private final LotRepository lotRepository;
    private final EclosoirRepository eclosoirRepository;
    private final IncubationRepository incubationRepository;

    public EclosionService(EclosionRepository eclosionRepository,
                           LotRepository lotRepository,
                           EclosoirRepository eclosoirRepository,
                           IncubationRepository incubationRepository) {
        this.eclosionRepository = eclosionRepository;
        this.lotRepository = lotRepository;
        this.eclosoirRepository = eclosoirRepository;
        this.incubationRepository = incubationRepository;
    }

    public Eclosion creerEclosion(EclosionDTO dto) {

        Lot lot = lotRepository.findById(dto.getLotId())
                .orElseThrow(() -> new RuntimeException("Lot non trouvé"));

        Eclosoir eclosoir = eclosoirRepository.findById(dto.getEclosoirId())
                .orElseThrow(() -> new RuntimeException("Eclosoir non trouvé"));

        Espece espece = lot.getEspece();
        if (espece == null || espece.getDureeEclosion() == null) {
            throw new RuntimeException("Le lot n'a pas d'espèce ou de durée d'éclosion définie");
        }

        // Vérification du nombre de poussins
        if (dto.getNombrePoussin() > lot.getQuantiteOeuf()) {
            throw new RuntimeException("Le nombre de poussins ne peut pas dépasser le nombre d'œufs");
        }

        // Début = date saisie, sinon fin de la dernière incubation du lot
        LocalDate debut = dto.getDateDebutEclosion();
        if (debut == null) {
            Incubation incubation = incubationRepository
                    .findFirstByLotIdOrderByDateFinIncubationDesc(lot.getId())
                    .orElseThrow(() -> new RuntimeException("Aucune incubation trouvée pour ce lot"));
            debut = incubation.getDateFinIncubation();
        }
        LocalDate fin = debut.plusDays(espece.getDureeEclosion());

        Eclosion eclosion = new Eclosion();
        eclosion.setDateDebutEclosion(debut);
        eclosion.setDateFinEclosion(fin);
        eclosion.setNombrePoussin(dto.getNombrePoussin());
        eclosion.setLot(lot);
        eclosion.setEclosoir(eclosoir);

        return eclosionRepository.save(eclosion);
    }

    public List<Eclosion> getAllEclosions() {
        return eclosionRepository.findAll();
    }
}