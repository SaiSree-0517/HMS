package com.hms.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "medicine")
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String medicineId;

    private String medicineName;

    private Integer stock;

    private Double price;

    public Medicine() {
    }

    public Long getId() {
        return id;
    }

    public String getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(
            String medicineId
    ) {

        this.medicineId = medicineId;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(
            String medicineName
    ) {

        this.medicineName =
                medicineName;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(
            Integer stock
    ) {

        this.stock = stock;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(
            Double price
    ) {

        this.price = price;
    }
}