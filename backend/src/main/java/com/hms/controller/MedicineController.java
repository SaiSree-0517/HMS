package com.hms.controller;

import com.hms.entity.Medicine;

import com.hms.repository.MedicineRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin("*")
public class MedicineController {

    private final MedicineRepository repository;

    public MedicineController(
            MedicineRepository repository
    ) {

        this.repository = repository;
    }

    @PostMapping
    public Medicine createMedicine(
            @RequestBody Medicine medicine
    ) {

        System.out.println(
                medicine.getMedicineName()
        );

        return repository.save(medicine);
    }

    @PostMapping("/bulk")
    public List<Medicine> saveAllMedicines(
            @RequestBody List<Medicine> medicines
    ) {

        return repository.saveAll(medicines);
    }

    @GetMapping
    public List<Medicine> getMedicines(){

        return repository.findAll();
    }
}