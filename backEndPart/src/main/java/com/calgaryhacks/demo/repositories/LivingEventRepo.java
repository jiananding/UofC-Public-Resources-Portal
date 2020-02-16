package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Living;
import com.calgaryhacks.demo.domain.LivingEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivingEventRepo extends CrudRepository<LivingEvent, Long> {

    LivingEvent findById(long id);

    @Override
    Iterable<LivingEvent> findAll();
}
