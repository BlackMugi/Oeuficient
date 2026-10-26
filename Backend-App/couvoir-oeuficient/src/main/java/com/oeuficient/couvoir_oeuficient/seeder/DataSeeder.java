
package com.oeuficient.couvoir_oeuficient.seeder;

import com.oeuficient.couvoir_oeuficient.entity.Role;
import com.oeuficient.couvoir_oeuficient.entity.Section;
import com.oeuficient.couvoir_oeuficient.entity.User;
import com.oeuficient.couvoir_oeuficient.repository.RoleRepository;
import com.oeuficient.couvoir_oeuficient.repository.SectionRepository;
import com.oeuficient.couvoir_oeuficient.repository.UserRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Profile("local")
public class DataSeeder implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final SectionRepository sectionRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${bootstrap.admin.enabled:true}")
    private boolean adminEnabled;

    @Value("${bootstrap.admin.nom}")
    private String adminNom;

    @Value("${bootstrap.admin.prenom}")
    private String adminPrenom;

    @Value("${bootstrap.admin.email}")
    private String adminEmail;

    @Value("${bootstrap.admin.password}")
    private String adminPassword;

    public DataSeeder(
            RoleRepository roleRepository,
            SectionRepository sectionRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.roleRepository = roleRepository;
        this.sectionRepository = sectionRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        creerRoleSiAbsent("ADMIN");
        creerRoleSiAbsent("RESPONSABLE");
        creerRoleSiAbsent("EMPLOYEE");
        creerRoleSiAbsent("MAINTENANCE");

        creerSectionSiAbsente("COUVOIR");
        creerSectionSiAbsente("ECLOSOIR");

        if (adminEnabled) {
            creerPremierAdminSiNecessaire();
        }
    }

    private void creerRoleSiAbsent(String nom) {
        boolean existe = roleRepository.existsByNomRole(nom);

        if (!existe) {
            Role role = new Role();
            role.setNomRole(nom);
            roleRepository.save(role);

            System.out.println("Rôle créé : " + nom);
        }
    }

    private void creerSectionSiAbsente(String nom) {
        boolean existe =
                sectionRepository.existsByNomSection(nom);

        if (!existe) {
            Section section = new Section();
            section.setNomSection(nom);
            sectionRepository.save(section);

            System.out.println("Section créée : " + nom);
        }
    }

    private void creerPremierAdminSiNecessaire() {

        boolean adminExiste = userRepository.findAll()
                .stream()
                .anyMatch(user ->
                        user.getRole() != null
                        && "ADMIN".equalsIgnoreCase(
                                user.getRole().getNomRole()));

        if (adminExiste) {
            System.out.println(
                    "Un administrateur existe déjà. Aucun compte créé.");
            return;
        }

        boolean emailExiste = userRepository.findAll()
                .stream()
                .anyMatch(user ->
                        adminEmail.equalsIgnoreCase(user.getEmail()));

        if (emailExiste) {
            throw new IllegalStateException(
                    "L'adresse configurée pour le premier ADMIN "
                    + "est déjà utilisée par un autre compte.");
        }

        Role roleAdmin = roleRepository.findAll()
                .stream()
                .filter(role ->
                        "ADMIN".equalsIgnoreCase(role.getNomRole()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException(
                        "Le rôle ADMIN n'a pas été créé."));

        User admin = new User();
        admin.setNom(adminNom);
        admin.setPrenom(adminPrenom);
        admin.setEmail(adminEmail);
        admin.setPassword(passwordEncoder.encode(adminPassword));
        admin.setRole(roleAdmin);
        admin.setSection(null);

        userRepository.save(admin);

        System.out.println(
                "Premier administrateur créé : " + adminEmail);
    }
}
