package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.StudyEvent;
import org.springframework.data.repository.CrudRepository;

public interface StudyEventRepo extends CrudRepository<StudyEvent, Long> {

    @Override
    Iterable<StudyEvent> findAll();
}
