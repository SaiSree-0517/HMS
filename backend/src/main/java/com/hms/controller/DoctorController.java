package com.hms.controller;

import com.hms.entity.Doctor;

import com.hms.repository.DoctorRepository;

import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin("*")
public class DoctorController {

    private final DoctorRepository repository;

    public DoctorController(
            DoctorRepository repository
    ) {

        this.repository = repository;
    }

    @PostMapping
    public Doctor createDoctor(
            @Valid @RequestBody Doctor doctor
    ) {

        System.out.println(
                doctor.getDoctorName()
        );

        return repository.save(doctor);
    }

    @GetMapping
    public List<Doctor> getDoctors() {

        return repository.findAll();
    }
}