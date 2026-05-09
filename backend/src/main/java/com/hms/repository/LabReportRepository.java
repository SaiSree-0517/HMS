package com.hms.repository;

import com.hms.entity.LabReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabReportRepository extends JpaRepository<LabReport, Long> {
}