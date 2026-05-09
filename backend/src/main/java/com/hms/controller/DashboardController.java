package com.hms.controller;

import com.hms.dto.DashboardResponse;

import com.hms.service.DashboardService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

    private final DashboardService service;

    public DashboardController(
            DashboardService service
    ) {

        this.service = service;
    }

    @GetMapping
    public DashboardResponse getDashboard() {

        return service.getDashboard();
    }
}