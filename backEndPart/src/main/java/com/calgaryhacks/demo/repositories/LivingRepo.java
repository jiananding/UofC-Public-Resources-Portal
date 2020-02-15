package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Living;
import org.springframework.data.repository.CrudRepository;

public interface LivingRepo extends CrudRepository<Living, Long> {

    @Override
    Iterable<Living> findAll();
}
