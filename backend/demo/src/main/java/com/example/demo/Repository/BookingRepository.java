package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Booking;

public interface BookingRepository extends JpaRepository<Booking,Integer>{

}
