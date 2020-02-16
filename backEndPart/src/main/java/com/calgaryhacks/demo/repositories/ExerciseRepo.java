package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.Exercise;
import com.calgaryhacks.demo.domain.ExerciseEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepo extends CrudRepository<Exercise, Long> {

    Exercise findById(long id);

    @Override
    Iterable<Exercise> findAll();
}
