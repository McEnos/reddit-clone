package com.example.redditclonebackend.repositories;

import com.example.redditclonebackend.entities.Post;
import com.example.redditclonebackend.entities.User;
import com.example.redditclonebackend.entities.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
