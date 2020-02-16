package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.StudyEvent;
import com.calgaryhacks.demo.repositories.StudyEventRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.Random;

public class StudyEventService {

    @Autowired
    private StudyEventRepo studyEventRepo;

    public void createFakeData() {
        Random rand    = new Random();
        int            howMany = rand.nextInt(11);

        for(int i=0; i<howMany; i++){
            ExerciseEvent event = new ExerciseEvent();
            event.setBuildingId(rand.nextInt(6));

            event.setStartTime(new Date());
            event.setEndTime(new Date());

            event.setEventName("Event "+ i);
            event.setDescription("Event description");
        }
    }

    public StudyEvent findById(long id) {
        return studyEventRepo.findById(id);
    }

    public Iterable<StudyEvent> returnAll(long id) {
        return studyEventRepo.findAll();
    }
}
