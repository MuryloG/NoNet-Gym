package com.gymapp.backend.controller;

import com.gymapp.backend.model.User;
import com.gymapp.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class AuthController {
    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Email já cadastrado";
        }
        userRepository.save(user);
        return "Registrado com sucesso";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.getSenha().equals(user.getSenha())) {
            return "Login bem-sucedido";
        }
        return "Credenciais inválidas";
    }
}
