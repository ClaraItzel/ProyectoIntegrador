const nombre = document.getElementById("name");
const emailRegistro = document.getElementById("emailRegistro");
const password = document.getElementById("password");
const passwordC = document.getElementById("passwordC");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e=>{

    // preventDefault prevenimos que el formulario no se envie por default
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";

    if( nombre.value.length < 6 ){
        warnings += `El nombre es demasiado corto <br>`
        entrar = true;
    }
    
    if(!regexEmail.test(emailRegistro.value)){
        warnings += `El email no es valido <br>`
        entrar = true;
    }
    
    if (password.value.length < 8){
        warnings += `La contraseña debe tener al menos 8 caracteres <br>`;
        entrar = true;
    } else if (password.value != passwordC.value) {
        
        warnings += `Las contraseñas no coinciden <br>`;
        entrar = true;
    }
    
    if (entrar) {
        parrafo.innerHTML = warnings;
        parrafo.classList.add('animated', 'flash');
    } else {
        window.location.href = 'plantilla-descripcion-proyectos.html';
    }
}) 