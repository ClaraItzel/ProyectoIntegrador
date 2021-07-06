const emailContraseña = document.getElementById('emailContraseña');
const warningRecuperacion = document.getElementById('warningRecuperacion');

form.addEventListener("submit", e=>{
    e.preventDefault();

    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let mensaje = "";
    let entrar = false;

    warningRecuperacion.innerHTML = "";
    if(!regexEmail.test(emailContraseña.value)){
        mensaje += `El email no es valido <br>`
        entrar = true;
    } 

    if(entrar){
        warningRecuperacion.innerHTML = mensaje;
        warningRecuperacion.classList.add('animated', 'flash');
        console.log(warningRecuperacion.className)
    }

})