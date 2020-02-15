package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Parking;
import org.springframework.data.repository.CrudRepository;

public interface ParkingRepo extends CrudRepository<Parking, Long> {

    @Override
    Iterable<Parking> findAll();
}
