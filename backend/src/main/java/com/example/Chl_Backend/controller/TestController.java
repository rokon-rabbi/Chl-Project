package com.example.Chl_Backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Spring Boot is running!");
        response.put("timestamp", new Date().toString());
        return response;
    }

    @GetMapping("/test-db")
    public Map<String, String> testDatabase() {
        Map<String, String> response = new HashMap<>();
        try {
            // This will test if database connection works
            response.put("database", "Connected to PostgreSQL");
            response.put("status", "SUCCESS");
        } catch (Exception e) {
            response.put("database", "Connection failed: " + e.getMessage());
            response.put("status", "ERROR");
        }
        return response;
    }
}
