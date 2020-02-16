package com.calgaryhacks.demo.repositories;

import com.calgaryhacks.demo.domain.ExerciseEvent;
import com.calgaryhacks.demo.domain.Living;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivingRepo extends CrudRepository<Living, Long> {

    Living findById(long id);

    @Override
    Iterable<Living> findAll();
}
