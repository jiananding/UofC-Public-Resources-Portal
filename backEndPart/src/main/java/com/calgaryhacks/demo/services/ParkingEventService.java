package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.ParkingEvent;
import com.calgaryhacks.demo.repositories.ParkingEventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Random;

@Service
public class ParkingEventService {

    @Autowired
    private ParkingEventRepo parkingEventRepo;

    public void createFakeData(){
        Random rand = new Random();
        int howMany = rand.nextInt(11);

        for(int i=0; i<howMany; i++){
            ParkingEvent event = new ParkingEvent();
            event.setBuildingId(rand.nextInt(3));

            event.setStartTime(new Date());
            event.setEndTime(new Date());

            event.setEventName("Event "+ i);
            event.setDescription("Event description");
        }
    }

    public ParkingEvent findById(long id){
        return parkingEventRepo.findById(id);
    }

    public Iterable<ParkingEvent> returnAll(long id){
        return  parkingEventRepo.findAll();
    }
}
