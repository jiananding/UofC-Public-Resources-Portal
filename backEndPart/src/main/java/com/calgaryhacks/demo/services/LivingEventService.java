package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.LivingEvent;
import com.calgaryhacks.demo.repositories.LivingEventRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.Random;

public class LivingEventService {

    @Autowired
    private LivingEventRepo livingEventRepo;

    public void createFakeData() {
        Random rand    = new Random();
        int            howMany = rand.nextInt(11);
        for(int i=0; i<howMany; i++) {
            LivingEvent event = new LivingEvent();
            event.setBuildingId(rand.nextInt(1));
            event.setStartTime(new Date());
            event.setEndTime(new Date());
            event.setEventName("Event "+ i);
            event.setDescription("Event description");
        }
    }

    public LivingEvent findById(long id) {
        return livingEventRepo.findById(id);
    }
}
