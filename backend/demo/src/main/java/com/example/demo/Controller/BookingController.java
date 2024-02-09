package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Booking;
import com.example.demo.Service.BookingService;

@RestController
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping("/post")
    public Booking postBooking(@RequestBody Booking book)
    {
        return postBooking(book);
    }
}



