package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseEventRepo extends CrudRepository<ExerciseEvent, Long> {

    ExerciseEvent findById(long id);

    @Override
    Iterable<ExerciseEvent> findAll();
}
