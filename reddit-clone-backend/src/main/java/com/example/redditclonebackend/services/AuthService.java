package com.example.redditclonebackend.services;

import com.example.redditclonebackend.dto.RegisterRequest;
import com.example.redditclonebackend.entities.NotificationMail;
import com.example.redditclonebackend.entities.User;
import com.example.redditclonebackend.entities.VerificationToken;
import com.example.redditclonebackend.exceptions.SpringRedditException;
import com.example.redditclonebackend.repositories.UserRepository;
import com.example.redditclonebackend.repositories.VerificationTokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;
    private final MailService mailService;

    @Transactional
    public void signUp(RegisterRequest registerRequest) {
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setCreatedDate(Instant.now());
        user.setEnabled(false);
        userRepository.save(user);
        String token = generateVerificationToken(user);
        mailService.sendMail(new NotificationMail("Please Activate your Account",
                user.getEmail(), "Thank you For signing up for reddit clone, click the following link for account " +
                "activation: " + "http://localhost:8050/api/auth/accountVerification/" + token));
    }

    public String generateVerificationToken(User user) {
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(user);
        verificationTokenRepository.save(verificationToken);
        return token;
    }

    public void verifyAccount(String token) {
        Optional<VerificationToken> verificationToken = verificationTokenRepository.findAllByToken(token);
        verificationToken.orElseThrow(() -> new SpringRedditException("Invalid token"));
        fetchUserAndEnable(verificationToken.get());
    }

    private void fetchUserAndEnable(VerificationToken token) {
        String username = token.getUser().getUsername();
        User user = userRepository.findAllByUsername(username).orElseThrow(() -> new SpringRedditException("Username name not found"));
        user.setEnabled(true);
        userRepository.save(user);

    }
}
