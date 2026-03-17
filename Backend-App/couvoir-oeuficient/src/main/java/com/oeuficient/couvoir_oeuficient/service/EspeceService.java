package com.oeuficient.couvoir_oeuficient.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.dto.EspeceDTO;
import com.oeuficient.couvoir_oeuficient.entity.Espece;
import com.oeuficient.couvoir_oeuficient.repository.EspeceRepository;

@Service
public class EspeceService {
    private final EspeceRepository especeRepository;

    public EspeceService (EspeceRepository especeRepository){
        this.especeRepository = especeRepository;
    }

    public Espece creerEspece(EspeceDTO dto){
        //On verifie si cette espece existe déjà
        if (especeRepository.existsByNomEspece(dto.getNomEspece())){
            throw new RuntimeException("Cette espece de volail existe déjà");
        }

        //Enregistrement des entités
        Espece espece = new Espece();
        espece.setNomEspece(dto.getNomEspece().toUpperCase());
        espece.setDureeIncubation(dto.getDureeIncubation());
        espece.setDureeEclosion(dto.getDureeEclosion());
        espece.setImageUrl(dto.getImageUrl());
        espece.setDescription(dto.getDescription());

        return especeRepository.save(espece);
    }

    public List<Espece>getAllEspeces(){
        return especeRepository.findAll();
    }
}
