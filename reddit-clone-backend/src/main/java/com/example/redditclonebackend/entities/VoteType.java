package com.example.redditclonebackend.entities;

public enum VoteType {
    UPVOTE(1), DOWNVOTE(-1),
    ;

    VoteType(int direction) {

    }
}
