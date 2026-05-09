package com.hms.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String prescriptionId;

    @OneToOne
    private Appointment appointment;

    private String diagnosis;
    private String medicines;
    private String dosage;
    private String labTests;
}