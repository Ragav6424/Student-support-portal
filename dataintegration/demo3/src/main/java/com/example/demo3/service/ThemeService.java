package com.example.demo3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo3.model.Themes;
import com.example.demo3.repository.ThemeRepository;

@Service
public class ThemeService {

    @Autowired
    private ThemeRepository repo;

    public Themes postTheme(Themes theme)
    {
        return repo.save(theme);
    }
    public void deleteTheme(int id)
    {
         repo.deleteById(id);
    }
    public List<Themes> getThemes()
    {
        return repo.findAll();
    }
    public Themes updateTheme(Themes theme)
    {
        return repo.saveAndFlush(theme);
    }
}
