package com.oeuficient.couvoir_oeuficient.controller;

import org.springframework.web.bind.annotation.*;
import com.oeuficient.couvoir_oeuficient.dto.UserDTO;
import com.oeuficient.couvoir_oeuficient.entity.User;
import com.oeuficient.couvoir_oeuficient.service.UserService;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User creerUser(@Valid @RequestBody UserDTO dto) {
        return userService.creerUser(dto);
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}