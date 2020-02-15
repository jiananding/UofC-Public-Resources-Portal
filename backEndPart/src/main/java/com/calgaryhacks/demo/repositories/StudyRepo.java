package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Study;
import org.springframework.data.repository.CrudRepository;

public interface StudyRepo extends CrudRepository<Study, Long> {

    @Override
    Iterable<Study> findAll();
}
