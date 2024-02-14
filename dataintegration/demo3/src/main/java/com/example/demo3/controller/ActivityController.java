package com.example.demo3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo3.model.Activity;
import com.example.demo3.service.ActivityService;

@CrossOrigin
@RestController
public class ActivityController {

    @Autowired
    private ActivityService service;

    @PostMapping("/postActivity")
    public Activity postActivity(@RequestBody Activity activity)
    {
        return service.postActivity(activity);
    }
    @GetMapping("/getActivity")
    public List<Activity> getActivity()
    {
        return service.getActivity();
    }
    @DeleteMapping("/deleteActivity/{id}")
    public void deleteActivity(int id)
    {
        service.deleteActivity(id);
    }
    @PutMapping("/updateActivity")
    public Activity updateActivity(@RequestBody Activity activity)
    {
        return service.updateActivity(activity);
    }
   @PutMapping("/update/event/{id}")
public Activity Details(@RequestBody Activity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}
}
