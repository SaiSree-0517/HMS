package com.hms.controller;

import com.hms.entity.LabReport;

import com.hms.repository.LabReportRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/lab-reports")
@CrossOrigin("*")
public class LabReportController {

    private final LabReportRepository repository;

    public LabReportController(
            LabReportRepository repository
    ) {

        this.repository = repository;
    }

    @PostMapping
    public LabReport createReport(
            @RequestBody LabReport report
    ) {

        System.out.println(
                report.getTestName()
        );

        report.setReportId(

                UUID.randomUUID()
                        .toString()
                        .substring(0,8)
        );

        report.setStatus(
                "COMPLETED"
        );

        return repository.save(report);
    }

    @GetMapping
    public List<LabReport> getReports(){

        return repository.findAll();
    }
}