package com.example.redditclonebackend.repositories;

import com.example.redditclonebackend.entities.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
    @Query("SELECT t from VerificationToken  t where t.token =:token")
    Optional<VerificationToken> findAllByToken(String token);
}
