async function add(){
    let user = document.getElementById("user").value;
    let error = document.getElementById("error");
    let pass1 = document.getElementById("passwd1").value;
    let pass2 = document.getElementById("passwd2").value;
    let contador = 0;
    const request1 = await fetch('/listarUsers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const usuarios = await request1.json();
    for(let usuario of usuarios){
        if (usuario.nombre == user){
            contador++;
        }
    }
    if (contador == 0){
        if (pass1 == pass2){
            addUser();
            window.location.href = "http://localhost:8085/inicioSesion.html";
        } else {
            error.textContent = "Las contraseñas no coinciden";
        }
    } else {
        error.textContent = "Error, ese usuario ya está registrado";
    }


}

async function addUser(){
    let datos = {}
    datos.nombre = document.getElementById("user").value;
    datos.password = document.getElementById("passwd1").value;
    let codigo = document.getElementById("code").value;
    if (codigo == 999){
        datos.rol_id = 2;
    } else {
        datos.rol_id = 1;
    }
    const request2 = await fetch('/añadirUser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
}

