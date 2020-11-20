const database = firebase.database();
const auth = firebase.auth();

const correo = document.getElementById('correo');
const password = document.getElementById('password');
const link = document.getElementById('cuenta');
const login = document.getElementById('login');



auth.onAuthStateChanged(
    (user)=>{
        if(user !==null){
            window.location.href= 'index.html';
        }
    }

);


login.addEventListener('click', ()=>{
    auth.signInWithEmailAndPassword(correo.value,password.value).then(
        (data)=>{

            window.location.href = 'index.html';
        }
    ).catch(
        (error)=>{
            alert(error);
            console.log(error);
        }
    );
});


