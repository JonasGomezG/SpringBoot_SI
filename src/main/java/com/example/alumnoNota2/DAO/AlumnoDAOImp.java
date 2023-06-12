package com.example.alumnoNota2.DAO;

import com.example.alumnoNota2.Model.Alumno;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class AlumnoDAOImp implements AlumnoDAO{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Alumno> listarAlumnos() {
        String query = "FROM Alumno";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void delete(int id) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        entityManager.remove(alumno);
    }

    @Override
    public void add(Alumno alumno) {
        entityManager.merge(alumno);
    }

    @Override
    public void edit(int id, String nuevo_nombre, double nueva_nota) {
        Alumno alumno = entityManager.find(Alumno.class, id);
        alumno.setNombre(nuevo_nombre);
        alumno.setNota(nueva_nota);
        add(alumno);
    }
}
