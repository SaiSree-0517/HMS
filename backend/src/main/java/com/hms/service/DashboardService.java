package com.hms.service;

import com.hms.dto.DashboardResponse;

import com.hms.repository.PatientRepository;
import com.hms.repository.DoctorRepository;
import com.hms.repository.AppointmentRepository;
import com.hms.repository.BillRepository;
import com.hms.repository.MedicineRepository;
import com.hms.repository.LabReportRepository;

import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final PatientRepository
            patientRepository;

    private final DoctorRepository
            doctorRepository;

    private final AppointmentRepository
            appointmentRepository;

    private final BillRepository
            billRepository;

    private final MedicineRepository
            medicineRepository;

    private final LabReportRepository
            labReportRepository;

    public DashboardService(

            PatientRepository patientRepository,

            DoctorRepository doctorRepository,

            AppointmentRepository appointmentRepository,

            BillRepository billRepository,

            MedicineRepository medicineRepository,

            LabReportRepository labReportRepository
    ) {

        this.patientRepository =
                patientRepository;

        this.doctorRepository =
                doctorRepository;

        this.appointmentRepository =
                appointmentRepository;

        this.billRepository =
                billRepository;

        this.medicineRepository =
                medicineRepository;

        this.labReportRepository =
                labReportRepository;
    }

    public DashboardResponse getDashboard() {

        Long totalPatients =
                patientRepository.count();

        Long totalDoctors =
                doctorRepository.count();

        Long totalAppointments =
                appointmentRepository.count();

        Long totalBills =
                billRepository.count();

        Long totalMedicines =
                medicineRepository.count();

        Long totalLabReports =
                labReportRepository.count();

        Double totalRevenue =
                billRepository.findAll()

                        .stream()

                        .mapToDouble(
                                bill ->
                                        bill.getTotalAmount()
                        )

                        .sum();

        return new DashboardResponse(

                totalPatients,

                totalDoctors,

                totalAppointments,

                totalBills,

                totalMedicines,

                totalLabReports,

                totalRevenue
        );
    }
}