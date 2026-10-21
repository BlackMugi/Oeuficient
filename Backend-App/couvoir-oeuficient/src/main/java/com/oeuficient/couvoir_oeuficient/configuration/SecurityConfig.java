
package com.oeuficient.couvoir_oeuficient.configuration;

import com.oeuficient.couvoir_oeuficient.security.JwtAuthenticationFilter;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
            .cors(cors -> cors.configurationSource(request -> {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedOrigins(
                    List.of("http://localhost:5173")
                );
                config.setAllowedMethods(
                    List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                );
                config.setAllowedHeaders(List.of("*"));
                config.setAllowCredentials(true);
                return config;
            }))
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth

                // Routes publiques
                .requestMatchers(
                    "/api/auth/login",
                    "/api/public/**"
                ).permitAll()

                // Administration : utilisateurs, rôles et sections
                .requestMatchers(
                    "/api/users/**",
                    "/api/roles/**",
                    "/api/sections/**"
                ).hasRole("ADMIN")

                // Annonces : lecture pour les connectés, gestion par ADMIN
                .requestMatchers(
                    HttpMethod.GET, "/api/annonces/**"
                ).authenticated()
                .requestMatchers(
                    "/api/annonces/**"
                ).hasRole("ADMIN")

                // Référentiels : lecture pour les connectés,
                // création et modification réservées à ADMIN
                .requestMatchers(
                    HttpMethod.GET,
                    "/api/chariots/**",
                    "/api/couvoirs/**",
                    "/api/eclosoirs/**",
                    "/api/especes/**",
                    "/api/lots/**"
                ).authenticated()
                .requestMatchers(
                    "/api/chariots/**",
                    "/api/couvoirs/**",
                    "/api/eclosoirs/**",
                    "/api/especes/**",
                    "/api/lots/**"
                ).hasRole("ADMIN")

                // Incubations et éclosions :
                // lecture pour les connectés
                .requestMatchers(
                    HttpMethod.GET,
                    "/api/incubations/**",
                    "/api/eclosions/**"
                ).authenticated()

                // Écriture autorisée à ADMIN et RESPONSABLE.
                // Le contrôle de la section sera réalisé dans les services.
                .requestMatchers(
                    "/api/incubations/**",
                    "/api/eclosions/**"
                ).hasAnyRole("ADMIN", "RESPONSABLE")

                // Toute autre route exige une authentification
                .anyRequest().authenticated()
            )
            .sessionManagement(session ->
                session.sessionCreationPolicy(
                    SessionCreationPolicy.STATELESS
                )
            )
            .addFilterBefore(
                jwtAuthFilter,
                UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
