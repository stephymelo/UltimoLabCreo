const database = firebase.database();
const auth = firebase.auth();

const telefonoContacto = document.getElementById('telefonoContacto');
const nombreContacto = document.getElementById('nombreContacto');
const contacto = document.getElementById('contacto');
const agregarBtn = document.getElementById('agregarBtn');
const logout = document.getElementById('logout');



logout.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href = "login.html";
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );
});