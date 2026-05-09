package com.hms.controller;

import com.hms.entity.Appointment;

import com.hms.repository.AppointmentRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin("*")
public class AppointmentController {

    private final AppointmentRepository repository;

    public AppointmentController(
            AppointmentRepository repository
    ) {

        this.repository = repository;
    }

    @PostMapping
    public Appointment createAppointment(
            @RequestBody Appointment appointment
    ) {

        appointment.setAppointmentId(

                UUID.randomUUID()
                        .toString()
                        .substring(0,8)
        );

        appointment.setStatus(
                "BOOKED"
        );

        return repository.save(
                appointment
        );
    }

    @GetMapping
    public List<Appointment> getAppointments(){

        return repository.findAll();
    }
}