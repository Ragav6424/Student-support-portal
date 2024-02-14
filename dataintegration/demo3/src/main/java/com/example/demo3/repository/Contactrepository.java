package com.example.demo3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo3.model.Contact;

public interface Contactrepository extends JpaRepository<Contact,String>
{

}
