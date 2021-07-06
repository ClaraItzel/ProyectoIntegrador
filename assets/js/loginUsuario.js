const user = document.getElementById('user');
const pass = document.getElementById('pass');
const warnings = document.getElementById('warnings');


ingresar.addEventListener("click", e=>{
    e.preventDefault();
    let usuarioPrueba = "Usuario";
    let contraseña = "12345678";
    let entrar = false;
    let mensaje = "";

    if (user.value == usuarioPrueba && pass.value == contraseña){
        window.location.href = 'registro.html';
    } else {
        mensaje = "Usuario o contraseña incorrectos";
        entrar = true;
    }

    if(entrar){
        warnings.innerHTML = mensaje;
        warnings.classList.add('animated', 'flash');
    }
})

