package com.example.redditclonebackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NotificationMail {
    private String recipient;
    private String subject;
    private String body;
}
