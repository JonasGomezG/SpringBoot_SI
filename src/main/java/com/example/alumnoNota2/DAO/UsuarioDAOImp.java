package com.example.alumnoNota2.DAO;

import com.example.alumnoNota2.Model.Usuario;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import javax.xml.stream.events.EntityReference;
import java.util.List;

@Repository
@Transactional
public class UsuarioDAOImp implements UsuarioDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void add(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public List<Usuario> listarUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();
    }
}
