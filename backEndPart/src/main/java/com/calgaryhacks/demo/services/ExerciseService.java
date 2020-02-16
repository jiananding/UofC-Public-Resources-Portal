package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.Exercise;
import com.calgaryhacks.demo.repositories.ExerciseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepo exerciseRepo;

    private int total = 2;

    public void createFakeData(){
        Exercise exercise1 = new Exercise();
        exercise1.setName("Gold Gym");
        exercise1.setCapacity(50);

        Exercise exercise2 = new Exercise();
        exercise2.setName("Red Gym");
        exercise2.setCapacity(25);

        exerciseRepo.save(exercise1);
        exerciseRepo.save(exercise2);
    }

    public Exercise findById(long id){
        return exerciseRepo.findById(id);
    }

    public Iterable<Exercise> returnAll(){
        return exerciseRepo.findAll();
    }
}
