package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.Living;
import com.calgaryhacks.demo.repositories.LivingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LivingService {

    @Autowired
    private LivingRepo livingRepo;

    public void createFakeData() {

        Living living1 = new Living();
        living1.setName("DiningCenter");
        living1.setCapacity(150);
        livingRepo.save(living1);
    }

    public Living findById(long id){
        return livingRepo.findById(id);
    }

    public Iterable<Living> returnAll(){
        return livingRepo.findAll();
    }
}
