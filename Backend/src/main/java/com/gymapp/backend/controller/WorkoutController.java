package com.gymapp.backend.controller;

import com.gymapp.backend.model.Workout;
import com.gymapp.backend.repository.WorkoutRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class WorkoutController {

    private final WorkoutRepository workoutRepository;

    public WorkoutController(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return workoutRepository.save(workout);
    }

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    @GetMapping("/por-data")
    public List<Workout> getWorkoutsByDate(@RequestParam("data")
                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data) {
        return workoutRepository.findByData(data);
    }

    @GetMapping("/volume")
    public int getVolumePorData(@RequestParam("data")
                                @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data) {
        List<Workout> workouts = workoutRepository.findByData(data);
        return workouts.stream()
                .mapToInt(w -> (int) (w.getReps() * w.getSets() * w.getPeso()))
                .sum();
    }
}
