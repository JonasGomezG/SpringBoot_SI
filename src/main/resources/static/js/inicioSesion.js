async function encontrar(){
    let user = document.getElementById("user").value;
    let passwd = document.getElementById("passwd").value;
    let error = document.getElementById("error");
    const request1 = await fetch('/listarUsers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const usuarios = await request1.json();

    for(let usuario of usuarios){
        if(usuario.nombre == user){
            if(usuario.password == passwd){
                if(usuario.rol_id == 1){
                    window.location.href = "http://localhost:8085/user.html";
                } else if (usuario.rol_id == 2){
                    window.location.href = "http://localhost:8085/admin.html";
                }
            } else{
                error.textContent = "La contraseña y el usuario no coinciden";
            }
        }  else{
            error.textContent = "El nombre de usuario no existe";
        }
    }

}