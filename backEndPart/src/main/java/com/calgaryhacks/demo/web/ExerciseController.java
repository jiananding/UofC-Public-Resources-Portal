package com.calgaryhacks.demo.web;

import com.calgaryhacks.demo.domain.Exercise;
import com.calgaryhacks.demo.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exercise")
@CrossOrigin(origins = "*")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @PostMapping("")
    public void create(){
        exerciseService.createFakeData();
    }

    @GetMapping("/{id}")
    public Exercise findById(@PathVariable long id){
        return exerciseService.findById(id);
    }

    @GetMapping("/all")
    public Iterable<Exercise> returnAll(){
        return exerciseService.returnAll();
    }
}
