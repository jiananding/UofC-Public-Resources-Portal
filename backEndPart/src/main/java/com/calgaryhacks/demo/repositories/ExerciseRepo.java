package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.Exercise;
import com.calgaryhacks.demo.domain.ExerciseEvent;
import org.springframework.data.repository.CrudRepository;

public interface ExerciseRepo extends CrudRepository<Exercise, Long> {

    @Override
    Iterable<Exercise> findAll();
}
