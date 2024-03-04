package edu.famu.gametrack.Controller;

import edu.famu.gametrack.Model.Report;
import edu.famu.gametrack.Services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final ReportService reportService;

    @Autowired
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping
    public ResponseEntity<?> createReport(
            @RequestParam String description,
            @RequestParam String type,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date endDate) {
        try {
            Report report = reportService.generateReport(description, type, startDate, endDate);
            return new ResponseEntity<>(report, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error generating report: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

