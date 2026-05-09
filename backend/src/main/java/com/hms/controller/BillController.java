package com.hms.controller;

import com.hms.entity.Bill;

import com.hms.repository.BillRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin("*")
public class BillController {

    private final BillRepository repository;

    public BillController(
            BillRepository repository
    ) {

        this.repository = repository;
    }

    @PostMapping
    public Bill createBill(
            @RequestBody Bill bill
    ) {

        bill.setBillId(

                UUID.randomUUID()
                        .toString()
                        .substring(0,8)
        );

        Double total =

                bill.getConsultationFee()

                +

                bill.getMedicineFee()

                +

                bill.getLabFee()

                +

                bill.getTax()

                -

                bill.getDiscount();

        bill.setTotalAmount(total);

        return repository.save(bill);
    }

    @GetMapping
    public List<Bill> getBills(){

        return repository.findAll();
    }
}