package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Study;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyRepo extends CrudRepository<Study, Long> {

    Study findById(long id);

    @Override
    Iterable<Study> findAll();
}
