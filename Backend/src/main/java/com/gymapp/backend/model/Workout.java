package com.gymapp.backend.model;

import jakarta.persistence.*;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private int reps;
    private int sets;
    private double peso;
    private String data;

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public int getReps() { return reps; }
    public int getSets() { return sets; }
    public double getPeso() { return peso; }
    public String getData() { return data; }

    public void setId(Long id) { this.id = id; }
    public void setNome(String nome) { this.nome = nome; }
    public void setReps(int reps) { this.reps = reps; }
    public void setSets(int sets) { this.sets = sets; }
    public void setPeso(double peso) { this.peso = peso; }
    public void setData(String data) { this.data = data; }
}
