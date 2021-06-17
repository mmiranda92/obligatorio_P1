window.addEventListener("load", inicio);
function inicio(){
    document.querySelector("#btnIngresar").addEventListener("click", iniciarSesion);
    //document.querySelector("#btnSelectUs").addEventListener("click", registro);
    //document.querySelector("#btnRegistroAlumno").addEventListener("click", registrarAlumno);
    document.querySelector("#btnRegistroDocente").addEventListener("click", registrarDocente);

}

function iniciarSesion(){
    let nomUsuario = document.querySelector("#txtNombreUs").value;
    let password = document.querySelector("#txtPassword").value;

    let login = verificarInicioDeSesion(nomUsuario, password);
    let mensaje = "";
    if(login){
        mensaje = "Inicio de sesion exitoso";
    }else{
        mensaje = "Usuario y/o contraseña incorrecta";
    }
    
    document.querySelector("#mensajeInicioDeSesion").innerHTML = mensaje;

}

/*function registro(){
    let selectUs = document.querySelector("#selectUs").value;
}

function registrarAlumno(){
    let selectDocente = document.querySelector("#selectDocente").value;
    let nombre = document.querySelector("#txtNombreAlumno").value;
    let nombreUsuario = document.querySelector("#txtNombreUsAlumno").value;
    let password = document.querySelector("#txtPasswordAlumno").value;

}*/

function registrarDocente(){
    let nombre = document.querySelector("#txtNombreDocente").value;
    let nombreUsuario = document.querySelector("#txtNombreUsDocente").value;
    let password = document.querySelector("#txtPasswordDocente").value;
    let validarCampos =  validarCaracteresDeRegistro(nombre, nombreUsuario, password)
    let mensaje = "";
    let validar = validarClave(password) 
    

    if(validarCampos){
        let validarNombreUsuario = usuarioRepetido(nombreUsuario);
        if(validarNombreUsuario){
            if(validar){
                agregarUsuario(nombre, nombreUsuario, password);
                mensaje="Usuario ingresado con exito.";
            }
            else{
                mensaje= "Formato de contraseña incorrecto." + "<br>" + "La contraseña debe tener:" + "<br>" + "- 5 o más caracteres." + "<br>" + "- Una mayúscula." + "<br>" + "- Una minúscula." + "<br>" + "- Un número.";
            }
            
        }
        else {
            mensaje = "El nombre de usuario ya existe.";
        }
    }
    else{
        mensaje  = "Los campos no pueden estar vacíos.";
    }
    
    
    document.querySelector("#mensajeRegistro").innerHTML = mensaje;
}


///////// LOGICA //////////
let listaUsuarios = [];

function verificarInicioDeSesion(nombreUs, clave){
    let res = false;
    for(let i = 0; i < listaUsuarios.length; i++){

            let usuario = listaUsuarios[i];
            if(usuario.nombreUsuario == nombreUs && usuario.password == clave){
            res = true
        }
    }
    return res;
}

function usuarioRepetido(nombreUsuario){
    let res = true;
    for(let i = 0; i < listaUsuarios.length; i++){
        let unUsuario = listaUsuarios[i];
        if(unUsuario.nombreUsuario.toUpperCase() == nombreUsuario.toUpperCase()){
            res = false
        }
        
    }
    return res;
}

function agregarUsuario(nombreCompleto, nombreUsuario, clave){
    let usuario = new Usuario(nombreCompleto, nombreUsuario, clave);
    listaUsuarios.push(usuario);
}

function validarCaracteresDeRegistro(nombreCompleto, nombreUsuario, clave){
    return nombreCompleto != "" && nombreUsuario != "" && clave != "";
}

function validarClave(clave){
    if(clave.length >=5){
        let mayusucla = false
        let minuscula = false
        let numero = false

        for(let i = 0; i < clave.length; i++){
            if(clave.charCodeAt(i) >= 65 && clave.charCodeAt(i) <=90){
                mayusucla = true
            }
            else if(clave.charCodeAt(i) >= 97 && clave.charCodeAt(i) <= 122){
                minuscula = true
            }
            else if(clave.charCodeAt(i) >= 48 && clave.charCodeAt(i) <=57){
                numero = true
            }
        }
        if(mayusucla == true && minuscula == true && numero ==true){
            return true;
        }
    }
    return false;
}



/*function validarClave(clave){
    let res = false
    let mensaje = ""
    for(let i = 0; i < clave.length; i++){    
    if(clave.length > 4 && clave.charAt(i) >= 65 && clave.charAt(i) <= 90 && clave.charAt(i) >= 97 && clave.charAt(i) <= 122 && clave.charAt(i) >= 48 && clave.charAt(i) <= 57 ){
        res = true
        }
    }
    return res;
}// preguntar a la profe por la validacion sino sale manana. besitos jkljlklkj */