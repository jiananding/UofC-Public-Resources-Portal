package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Living;
import com.calgaryhacks.demo.domain.LivingEvent;
import org.springframework.data.repository.CrudRepository;

public interface LivingEventRepo extends CrudRepository<LivingEvent, Long> {

    @Override
    Iterable<LivingEvent> findAll();
}
