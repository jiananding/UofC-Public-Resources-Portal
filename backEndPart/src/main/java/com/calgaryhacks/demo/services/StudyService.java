package com.calgaryhacks.demo.services;

import com.calgaryhacks.demo.domain.Study;
import com.calgaryhacks.demo.repositories.StudyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudyService {

    @Autowired
    private StudyRepo studyRepo;

    public void createFakeData(){
        Study study1 = new Study();
        study1.setName("TFDL");
        study1.setCapacity(200);

        Study study2 = new Study();
        study2.setName("Law Library");
        study2.setCapacity(100);

        studyRepo.save(study1);
        studyRepo.save(study2);
    }

    public Study findById(long id){
        return studyRepo.findById(id);
    }

    public Iterable<Study> returnAll(){
        return studyRepo.findAll();
    }
}
