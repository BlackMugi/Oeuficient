package com.oeuficient.couvoir_oeuficient.service;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.ChariotDTO;
import com.oeuficient.couvoir_oeuficient.entity.Chariot;
import com.oeuficient.couvoir_oeuficient.entity.Couvoir;
import com.oeuficient.couvoir_oeuficient.repository.ChariotRepository;
import com.oeuficient.couvoir_oeuficient.repository.CouvoirRepository;

import java.util.List;

@Service
public class ChariotService {

    private final ChariotRepository chariotRepository;
    private final CouvoirRepository couvoirRepository;

    public ChariotService(ChariotRepository chariotRepository,
                          CouvoirRepository couvoirRepository) {
        this.chariotRepository = chariotRepository;
        this.couvoirRepository = couvoirRepository;
    }

    public Chariot creerChariot(ChariotDTO dto) {

        if (chariotRepository.existsByNomChariot(dto.getNomChariot())) {
            throw new RuntimeException("Ce chariot existe déjà");
        }

        Couvoir couvoir = couvoirRepository.findById(dto.getCouvoirId())
                .orElseThrow(() -> new RuntimeException("Couvoir non trouvé"));

        Chariot chariot = new Chariot();
        chariot.setNomChariot(dto.getNomChariot());
        chariot.setCapaciteMaxOeuf(dto.getCapaciteMaxOeuf());
        chariot.setStatut(dto.getStatut());
        chariot.setCouvoir(couvoir);

        return chariotRepository.save(chariot);
    }

    public List<Chariot> getAllChariots() {
        return chariotRepository.findAll();
    }
}