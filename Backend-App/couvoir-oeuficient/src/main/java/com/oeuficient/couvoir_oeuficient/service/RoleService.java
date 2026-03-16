package com.oeuficient.couvoir_oeuficient.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.oeuficient.couvoir_oeuficient.entity.Role;
import com.oeuficient.couvoir_oeuficient.repository.RoleRepository;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService (RoleRepository roleRepository){
        this.roleRepository = roleRepository;
    }

        public Role creerRole(Role role){

        //On verifie si le nom existe
        if(role.getNom() == null || role.getNom().isEmpty()){
            throw new RuntimeException("Le nom est obligatoire");
        }

        //On verifie si nom est unique
        if(roleRepository.existsByNom(role.getNom())){
            throw new RuntimeException("Ce role existe déjà");
        }

        return roleRepository.save(role);
    }

    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }

}
