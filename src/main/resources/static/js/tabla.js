$(document).ready(function (){
    cargarAlumnos();
});

async function cargarAlumnos(){
    const request = await fetch('/listar', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const alumnos = await request.json();

    let listadoHTML = '';

    for(let alumno of alumnos){
        let fila = '<tr><td> ' + alumno.id + '</td><td>' + alumno.nombre + '</td><td> ' + alumno.nota + '</td><td><button onclick="eliminar('+ alumno.id +')">Eliminar</button><button onclick="cambiarValor('+alumno.id+')">Editar</button></td></tr>';
        listadoHTML = listadoHTML + fila;
    }

    document.querySelector("#alumnos tbody").outerHTML = listadoHTML;
}

async function eliminar(id){
    const request = await fetch('/eliminar/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    location.reload();
}

async function add() {
    let datos = {}
    datos.nombre = document.getElementById('nombreAlumno').value;
    datos.nota = document.getElementById('notaAlumno').value;
    const request = await fetch('/añadir', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    location.reload();
}

function cambiarValor(id){
    document.getElementById('idAlumno').value = id;
}

async function editar(){
    let id_a = document.getElementById('idAlumno').value;
    let nom_a = document.getElementById('nuevo_nombre').value;
    let nota_a = document.getElementById('nueva_nota').value;
    const request = await fetch('/edit/'+id_a+'/'+nom_a+'/'+nota_a, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    location.reload();
}

async function unicoAlum(){
    let busqueda = document.getElementById("busqueda").value;
    const request = await fetch('/listar', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const alumnos = await request.json();

    let listadoHTML = '';

    for(let alumno of alumnos){
        if(alumno.nombre == busqueda){
            let fila = '<tr><td> ' + alumno.id + '</td><td>' + alumno.nombre + '</td><td> ' + alumno.nota + '</td><td><button onclick="eliminar('+ alumno.id +')">Eliminar</button><button onclick="cambiarValor('+alumno.id+')">Editar</button></td></tr>';
            listadoHTML = listadoHTML + fila;
        }
    }

    document.querySelector("#alumnos tbody").outerHTML = listadoHTML;
}