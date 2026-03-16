package com.oeuficient.couvoir_oeuficient.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.oeuficient.couvoir_oeuficient.dto.RoleDTO;
import com.oeuficient.couvoir_oeuficient.entity.Role;
import com.oeuficient.couvoir_oeuficient.repository.RoleRepository;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService (RoleRepository roleRepository){
        this.roleRepository = roleRepository;
    }

    public Role creerRole(RoleDTO dto){

        //On verifie si nom est unique
        if(roleRepository.existsByNomRole(dto.getNomRole())){
            throw new RuntimeException("Ce role existe déjà !");
        }

        Role role = new Role();
        role.setNomRole(dto.getNomRole().toUpperCase());
        
        return roleRepository.save(role);
    }

    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }

}
