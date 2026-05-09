package com.hms.controller;

import com.hms.entity.Prescription;
import com.hms.repository.PrescriptionRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prescriptions")
@CrossOrigin("*")
public class PrescriptionController {

    private final PrescriptionRepository repository;

    public PrescriptionController(
            PrescriptionRepository repository
    ) {

        this.repository = repository;
    }

    @PostMapping
    public Prescription create(
            @RequestBody Prescription data
    ) {

        return repository.save(data);
    }

    @GetMapping
    public List<Prescription> getAll() {

        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Prescription getById(
            @PathVariable Long id
    ) {

        return repository.findById(id).orElseThrow();
    }

    @DeleteMapping("/{id}")
    public String delete(
            @PathVariable Long id
    ) {

        repository.deleteById(id);

        return "Prescription Deleted Successfully";
    }
}