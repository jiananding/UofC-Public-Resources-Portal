package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.ParkingEvent;
import org.springframework.data.repository.CrudRepository;

public interface ParkingEventRepo extends CrudRepository<ParkingEvent, Long> {

    @Override
    Iterable<ParkingEvent> findAll();
}
