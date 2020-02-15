package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import org.springframework.data.repository.CrudRepository;

public interface ExerciseEventRepo extends CrudRepository<ExerciseEvent, Long> {

    @Override
    Iterable<ExerciseEvent> findAll();
}
