package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oeuficient.couvoir_oeuficient.dto.RoleDTO;
import com.oeuficient.couvoir_oeuficient.entity.Role;
import com.oeuficient.couvoir_oeuficient.service.RoleService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/roles")

public class RoleController {
    private final RoleService roleService;

    public RoleController(RoleService roleService){
        this.roleService = roleService;
    }

    @PostMapping
    public Role creerRole(@Valid @RequestBody RoleDTO dto) {
        return roleService.creerRole(dto);
    }
    

    @GetMapping
    public List<Role> getRoles() {
        return roleService.getAllRoles();
    }
    

}
