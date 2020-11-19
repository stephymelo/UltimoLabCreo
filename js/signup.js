const database = firebase.database();
const auth = firebase.auth();


const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const passwordAgain = document.getElementById('passwordAgain');
const link = document.getElementById('cuenta');
const registerBtn = document.getElementById('registerBtn');


link.addEventListener('click', ()=>{
    window.location.href = 'login.html';
});

registerBtn.addEventListener('click', ()=>{
    auth.createUserWithEmailAndPassword(correo.value,password.value).then(
        (data)=>{
            //Despositar los datos
            let user={
                id:data.user.uid,
                nombre:nombre.value,
                telefono:telefono.value,
                correo:correo.value,
                password:password.value,

            };
            database.ref('UltimoLab/users/'+user.id).set(user);
        }
    );
    
    

});


