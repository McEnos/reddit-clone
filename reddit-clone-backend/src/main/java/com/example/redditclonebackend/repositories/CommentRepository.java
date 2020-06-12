package com.example.redditclonebackend.repositories;

import com.example.redditclonebackend.entities.Comment;
import com.example.redditclonebackend.entities.Post;
import com.example.redditclonebackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
