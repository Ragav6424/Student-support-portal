package com.example.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Usercontroller {

@GetMapping("/")
public String index()
{
    return "Hello World";   
}


  


         
}


