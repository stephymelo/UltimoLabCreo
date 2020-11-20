const database = firebase.database();
const auth = firebase.auth();


const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const passwordAgain = document.getElementById('passwordAgain');
const registerBtn = document.getElementById('registerBtn');

var isSigningUp = false;


auth.onAuthStateChanged(
    (user) => {
        if (user !== null) {
            if (isSigningUp) {
                //Despositar los datos
                let userDB = {
                    id: user.uid,
                    nombre: nombre.value,
                    telefono: telefono.value,
                    correo: correo.value,
                    password: password.value,

                };

                database.ref('UltimoLab/users/' + userDB.id).set(userDB).then(
                    () => {
                        window.location.href = 'index.html';
                    }
                );
        }else{
            window.location.href = 'index.html';
        }
      }
    }
);



registerBtn.addEventListener('click', () => {
    isSigningUp = true;
    auth.createUserWithEmailAndPassword(correo.value, password.value).then(
    );
});


