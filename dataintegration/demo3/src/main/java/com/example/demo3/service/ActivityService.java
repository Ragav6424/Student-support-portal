package com.example.demo3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo3.model.Activity;
import com.example.demo3.repository.ActivityRepository;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository repo;
    public Activity postActivity(Activity activity)
    {
        return repo.save(activity);
    }
    public List<Activity> getActivity()
    {
        return repo.findAll();
    }
    public void deleteActivity(int id)
    {
        repo.deleteById(id);
    }
    public Activity updateActivity(Activity activity)
    {
        return repo.saveAndFlush(activity);
    }

    public Activity updateDetails(Activity newUser ,int id) 
	{
		Activity up=repo.findById(id).get();		
		//  up.SetId(newUser.getId());
		 up.setDescription(newUser.getDescription());
		 up.setTitle(newUser.getTitle());
		 up.setImageUrl(newUser.getImageUrl());
		//  up.setChargers(newUser.getChargers());
         return repo.saveAndFlush(up);
	}
}
