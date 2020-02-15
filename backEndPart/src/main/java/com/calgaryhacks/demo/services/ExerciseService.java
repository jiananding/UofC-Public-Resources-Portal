package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.Exercise;
import com.calgaryhacks.demo.repositories.ExerciseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepo exerciseRepo;

    public void createFakeData(){

    }

    public Iterable<Exercise> returnAll(){
        return exerciseRepo.findAll();
    }
}
