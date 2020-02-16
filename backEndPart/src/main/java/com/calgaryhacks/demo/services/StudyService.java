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
        study1.setName("Doucette Library");
        study1.setCapacity(100);

        Study study2 = new Study();
        study2.setName("Business Library");
        study2.setCapacity(150);

        Study study3 = new Study();
        study3.setName("Health Sciences Library");
        study3.setCapacity(150);

        Study study4 = new Study();
        study4.setName("Taylor Family Digital Library");
        study4.setCapacity(300);

        Study study5 = new Study();
        study5.setName("Bennett Jones Law Library");
        study5.setCapacity(100);

        Study study6 = new Study();
        study6.setName("Gallagher Library");
        study6.setCapacity(150);

        studyRepo.save(study1);
        studyRepo.save(study2);
        studyRepo.save(study3);
        studyRepo.save(study4);
        studyRepo.save(study5);
        studyRepo.save(study6);
    }

    public Study findById(long id){
        return studyRepo.findById(id);
    }

    public Iterable<Study> returnAll(){
        return studyRepo.findAll();
    }
}
