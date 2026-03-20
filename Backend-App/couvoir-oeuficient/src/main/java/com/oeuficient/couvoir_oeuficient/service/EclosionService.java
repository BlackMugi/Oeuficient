package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.EclosionDTO;
import com.oeuficient.couvoir_oeuficient.entity.Eclosion;
import com.oeuficient.couvoir_oeuficient.entity.Lot;
import com.oeuficient.couvoir_oeuficient.entity.Eclosoir;
import com.oeuficient.couvoir_oeuficient.repository.EclosionRepository;
import com.oeuficient.couvoir_oeuficient.repository.LotRepository;
import com.oeuficient.couvoir_oeuficient.repository.EclosoirRepository;

import java.util.List;

@Service
public class EclosionService {

    private final EclosionRepository eclosionRepository;
    private final LotRepository lotRepository;
    private final EclosoirRepository eclosoirRepository;

    public EclosionService(EclosionRepository eclosionRepository,
                           LotRepository lotRepository,
                           EclosoirRepository eclosoirRepository) {
        this.eclosionRepository = eclosionRepository;
        this.lotRepository = lotRepository;
        this.eclosoirRepository = eclosoirRepository;
    }

    public Eclosion creerEclosion(EclosionDTO dto) {

        Lot lot = lotRepository.findById(dto.getLotId())
                .orElseThrow(() -> new RuntimeException("Lot non trouvé"));

        Eclosoir eclosoir = eclosoirRepository.findById(dto.getEclosoirId())
                .orElseThrow(() -> new RuntimeException("Eclosoir non trouvé"));

        // Vérification de la date 
        if (dto.getDateFinEclosion().isBefore(dto.getDateDebutEclosion())) {
            throw new RuntimeException("La date de fin ne peut pas être avant la date de début");
        }

        // Vérification du nombre de poussins
        if (dto.getNombrePoussin() > lot.getQuantiteOeuf()) {
            throw new RuntimeException("Le nombre de poussins ne peut pas dépasser le nombre d'œufs");
        }
        Eclosion eclosion = new Eclosion();
        eclosion.setDateDebutEclosion(dto.getDateDebutEclosion());
        eclosion.setDateFinEclosion(dto.getDateFinEclosion());
        eclosion.setNombrePoussin(dto.getNombrePoussin());
        eclosion.setLot(lot);
        eclosion.setEclosoir(eclosoir);

        return eclosionRepository.save(eclosion);
    }

    public List<Eclosion> getAllEclosions() {
        return eclosionRepository.findAll();
    }
}