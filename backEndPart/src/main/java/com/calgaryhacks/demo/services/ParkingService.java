package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.Parking;
import com.calgaryhacks.demo.repositories.ParkingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParkingService {

    @Autowired
    private ParkingRepo parkingRepo;

    public void createFakeData(){
        Parking parking1 = new Parking();
        parking1.setName("Art Parkade");
        parking1.setCapacity(50);

        Parking parking2 = new Parking();
        parking2.setName("Lot 21");
        parking2.setCapacity(25);

        parkingRepo.save(parking1);
        parkingRepo.save(parking2);
    }

    public Parking findById(long id){
        return parkingRepo.findById(id);
    }

    public Iterable<Parking> returnAll(){
        return parkingRepo.findAll();
    }
}
