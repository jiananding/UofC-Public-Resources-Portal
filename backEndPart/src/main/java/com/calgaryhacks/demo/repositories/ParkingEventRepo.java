package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ParkingEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingEventRepo extends CrudRepository<ParkingEvent, Long> {

    ParkingEvent findById(long id);

    @Override
    Iterable<ParkingEvent> findAll();
}
