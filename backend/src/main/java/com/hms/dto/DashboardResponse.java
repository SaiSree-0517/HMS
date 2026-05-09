package com.hms.dto;

public class DashboardResponse {

    private Long totalPatients;

    private Long totalDoctors;

    private Long totalAppointments;

    private Long totalBills;

    private Long totalMedicines;

    private Long totalLabReports;

    private Double totalRevenue;

    public DashboardResponse(
            Long totalPatients,
            Long totalDoctors,
            Long totalAppointments,
            Long totalBills,
            Long totalMedicines,
            Long totalLabReports,
            Double totalRevenue
    ) {

        this.totalPatients = totalPatients;

        this.totalDoctors = totalDoctors;

        this.totalAppointments =
                totalAppointments;

        this.totalBills = totalBills;

        this.totalMedicines =
                totalMedicines;

        this.totalLabReports =
                totalLabReports;

        this.totalRevenue = totalRevenue;
    }

    public Long getTotalPatients() {
        return totalPatients;
    }

    public Long getTotalDoctors() {
        return totalDoctors;
    }

    public Long getTotalAppointments() {
        return totalAppointments;
    }

    public Long getTotalBills() {
        return totalBills;
    }

    public Long getTotalMedicines() {
        return totalMedicines;
    }

    public Long getTotalLabReports() {
        return totalLabReports;
    }

    public Double getTotalRevenue() {
        return totalRevenue;
    }
}