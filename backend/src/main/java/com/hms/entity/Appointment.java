
package com.hms.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String appointmentId;

    @ManyToOne
    @JoinColumn(name = "patient_fk")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_fk")
    private Doctor doctor;

    private String appointmentDate;

    private String appointmentTime;

    @NotBlank(message = "Symptoms are required")
    private String symptoms;

    private String status;

    public Appointment() {}

    public Long getId() { return id; }
    public String getAppointmentId() { return appointmentId; }
    public void setAppointmentId(String appointmentId) { this.appointmentId = appointmentId; }
    public Patient getPatient() { return patient; }
    public void setPatient(Patient patient) { this.patient = patient; }
    public Doctor getDoctor() { return doctor; }
    public void setDoctor(Doctor doctor) { this.doctor = doctor; }
    public String getAppointmentDate() { return appointmentDate; }
    public void setAppointmentDate(String appointmentDate) { this.appointmentDate = appointmentDate; }
    public String getAppointmentTime() { return appointmentTime; }
    public void setAppointmentTime(String appointmentTime) { this.appointmentTime = appointmentTime; }
    public String getSymptoms() { return symptoms; }
    public void setSymptoms(String symptoms) { this.symptoms = symptoms; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
