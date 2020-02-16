package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Parking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingRepo extends CrudRepository<Parking, Long> {

    Parking findById(long Id);

    @Override
    Iterable<Parking> findAll();
}
