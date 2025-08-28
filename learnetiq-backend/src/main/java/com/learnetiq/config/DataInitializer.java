package com.learnetiq.config;

import com.learnetiq.model.User;
import com.learnetiq.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${learnetiq.admin.username}")
    private String adminUsername;

    @Value("${learnetiq.admin.email}")
    private String adminEmail;

    @Value("${learnetiq.admin.password}")
    private String adminPassword;

    @Override
    public void run(String... args) throws Exception {
        if (!userRepository.findByEmail(adminEmail).isPresent()) {
            User admin = new User();
            admin.setUsername(adminUsername);
            admin.setEmail(adminEmail);
            admin.setPassword(passwordEncoder.encode(adminPassword));
            admin.setRole("ADMIN");
            userRepository.save(admin);
        }
    }
}
