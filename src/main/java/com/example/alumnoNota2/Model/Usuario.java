package com.example.alumnoNota2.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Table(name = "dbusuarios")
@EqualsAndHashCode
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "iduser")
    private int iduser;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "password")
    private String password;

    @Column(name = "rol_id")
    private int rol_id;

    public Usuario() {
    }

    public Usuario(int iduser, String nombre, String password, int rol_id) {
        this.iduser = iduser;
        this.nombre = nombre;
        this.password = password;
        this.rol_id = rol_id;
    }
}
