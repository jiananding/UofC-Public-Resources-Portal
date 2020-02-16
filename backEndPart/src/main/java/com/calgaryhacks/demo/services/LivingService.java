package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.Living;
import com.calgaryhacks.demo.repositories.LivingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LivingService {

    @Autowired
    private LivingRepo livingRepo;

    public void createFakeData(){

        Living living1 = new Living();
        living1.setName("Machall");
        living1.setCapacity(50);
        livingRepo.save(living1);

        Living living2 = new Living();
        living2.setName("Dining Center");
        living2.setCapacity(25);
        livingRepo.save(living2);
    }

    public Living findById(long id){
        return livingRepo.findById(id);
    }

    public Iterable<Living> returnAll(){
        return livingRepo.findAll();
    }
}
