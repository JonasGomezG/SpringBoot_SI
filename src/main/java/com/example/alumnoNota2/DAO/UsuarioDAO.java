package com.example.alumnoNota2.DAO;

import com.example.alumnoNota2.Model.Alumno;
import com.example.alumnoNota2.Model.Usuario;

import java.util.List;

public interface UsuarioDAO {

    void add(Usuario usuario);

    List<Usuario> listarUsuarios();
}
