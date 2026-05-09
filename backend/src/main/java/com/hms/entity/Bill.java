
package com.hms.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;

@Entity
@Table(name = "bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String billId;

    @ManyToOne
    @JoinColumn(name = "patient_fk")
    private Patient patient;

    @Positive
    private Double consultationFee;

    @Positive
    private Double medicineFee;

    @Positive
    private Double labFee;

    private Double tax;

    private Double discount;

    private Double totalAmount;

    private String paymentMethod;

    public Bill() {}

    public Long getId() { return id; }
    public String getBillId() { return billId; }
    public void setBillId(String billId) { this.billId = billId; }
    public Patient getPatient() { return patient; }
    public void setPatient(Patient patient) { this.patient = patient; }
    public Double getConsultationFee() { return consultationFee; }
    public void setConsultationFee(Double consultationFee) { this.consultationFee = consultationFee; }
    public Double getMedicineFee() { return medicineFee; }
    public void setMedicineFee(Double medicineFee) { this.medicineFee = medicineFee; }
    public Double getLabFee() { return labFee; }
    public void setLabFee(Double labFee) { this.labFee = labFee; }
    public Double getTax() { return tax; }
    public void setTax(Double tax) { this.tax = tax; }
    public Double getDiscount() { return discount; }
    public void setDiscount(Double discount) { this.discount = discount; }
    public Double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(Double totalAmount) { this.totalAmount = totalAmount; }
    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }
}
