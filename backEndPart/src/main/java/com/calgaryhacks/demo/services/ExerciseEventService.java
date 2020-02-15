package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.repositories.ExerciseEventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseEventService {

    @Autowired
    private ExerciseEventRepo exerciseEventRepo;

    public void createFakeData(){

    }
}
