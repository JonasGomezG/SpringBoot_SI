package com.example.alumnoNota2.Controller;

import com.example.alumnoNota2.DAO.AlumnoDAO;
import com.example.alumnoNota2.DAO.UsuarioDAO;
import com.example.alumnoNota2.Model.Alumno;
import com.example.alumnoNota2.Model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controlador {

    @Autowired
    AlumnoDAO alumnoDAO;
    @Autowired
    UsuarioDAO usuarioDAO;

    @GetMapping("/listar")
    public List<Alumno> listar(){ return alumnoDAO.listarAlumnos(); }

    @DeleteMapping("/eliminar/{id}")
    public void delete(@PathVariable int id){ alumnoDAO.delete(id); }

    @PostMapping("/añadir")
    public void add (@RequestBody Alumno alumno){ alumnoDAO.add(alumno); }

    @PutMapping("/edit/{id}/{nombre}/{nota}")
    public void edit (@PathVariable int id, @PathVariable String nombre, @PathVariable double nota){ alumnoDAO.edit(id,nombre,nota); }

    @PostMapping("/añadirUser")
    public void addUser(@RequestBody Usuario usuario) { usuarioDAO.add(usuario); }

    @GetMapping("/listarUsers")
    public List<Usuario> listarUsers(){ return usuarioDAO.listarUsuarios(); }

}
