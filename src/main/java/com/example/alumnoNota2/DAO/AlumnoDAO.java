package com.example.alumnoNota2.DAO;

import com.example.alumnoNota2.Model.Alumno;

import java.util.List;

public interface AlumnoDAO {

    List<Alumno> listarAlumnos();

    void delete(int id);

    void add(Alumno alumno);

    void edit(int id, String nuevo_nombre, double nueva_nota);

}
