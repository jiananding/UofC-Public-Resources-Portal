package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.repositories.ExerciseEventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Random;

@Service
public class ExerciseEventService {

    @Autowired
    private ExerciseEventRepo exerciseEventRepo;

    public void createFakeData() {
        Random rand = new Random();
        int howMany = rand.nextInt(11);

        for(int i=0; i<howMany; i++){
            ExerciseEvent event = new ExerciseEvent();
            event.setBuildingId(rand.nextInt(4));

            event.setStartTime(new Date());
            event.setEndTime(new Date());

            event.setEventName("Event "+ i);
            event.setDescription("Event description");
        }
    }

    public ExerciseEvent findById(long id){
        return exerciseEventRepo.findById(id);
    }

    public Iterable<ExerciseEvent> returnAll(long id){
        return  exerciseEventRepo.findAll();
    }
}
