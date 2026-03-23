package com.oeuficient.couvoir_oeuficient.controller;

import com.oeuficient.couvoir_oeuficient.dto.AuthResponseDTO;
import com.oeuficient.couvoir_oeuficient.dto.LoginRequestDTO;
import com.oeuficient.couvoir_oeuficient.entity.User;
import com.oeuficient.couvoir_oeuficient.repository.UserRepository;
import com.oeuficient.couvoir_oeuficient.service.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private UserRepository userRepository;
    

    @PostMapping("/login")
    public AuthResponseDTO login(@RequestBody LoginRequestDTO loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getEmail(),
                loginRequest.getPassword()
            )
        );
        
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token = jwtService.generateToken(userDetails);
        
        User user = userRepository.findByEmail(loginRequest.getEmail())
            .orElseThrow();
        
        return new AuthResponseDTO(token, user.getId(), user.getEmail(), user.getRole().getNomRole());
    }
    
}