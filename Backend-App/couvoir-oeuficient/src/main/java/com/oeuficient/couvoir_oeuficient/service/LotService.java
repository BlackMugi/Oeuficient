package com.oeuficient.couvoir_oeuficient.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.LotDTO;
import com.oeuficient.couvoir_oeuficient.entity.Espece;
import com.oeuficient.couvoir_oeuficient.entity.Lot;
import com.oeuficient.couvoir_oeuficient.repository.EspeceRepository;
import com.oeuficient.couvoir_oeuficient.repository.LotRepository;

@Service
public class LotService {
    private final LotRepository lotRepository;
    private final EspeceRepository especeRepository;

    public LotService (LotRepository lotRepository, 
                       EspeceRepository especeRepository
    ){
        this.lotRepository = lotRepository;
        this.especeRepository = especeRepository;
    }

    public Lot creerLot(LotDTO dto){
        if(lotRepository.existsByNumLot(dto.getNumLot())){
            throw new RuntimeException("Ce Lot existe déjà");
        }
        
        // Creation d'un lot
        Lot lot = new Lot();
        lot.setNumLot(dto.getNumLot());
        lot.setQuantiteOeuf(dto.getQuantiteOeuf());
        lot.setFournisseur(dto.getFournisseur());
        lot.setDateArrivee(dto.getDateArrivee());
        lot.setStatut(dto.getStatut());

        Espece espece = especeRepository.findById(dto.getEspeceId())
            .orElseThrow(() -> new RuntimeException("Espèce non trouvée"));
        lot.setEspece(espece);

        return lotRepository.save(lot);
    }

        public List<Lot> getAllLots(){
        return lotRepository.findAll();
    }
}
