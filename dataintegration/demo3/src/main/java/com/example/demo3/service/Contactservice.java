package com.example.demo3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo3.model.Contact;
import com.example.demo3.repository.Contactrepository;

@Service
public class Contactservice {

    @Autowired
    private Contactrepository repo;

    public String postContact(Contact con)
    {
        if(repo.save(con)!=null)
        {
            return "added";
        }
        return "not added";
    }
    public List<Contact> getcontactdata()
    {
        return repo.findAll();
    }
    public Contact updateContact(Contact contact)
    {
        return repo.saveAndFlush(contact);
    }
}
