const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const telefonoContacto = document.getElementById('telefonoContacto');
const nombreContacto = document.getElementById('nombreContacto');
const contactoContainer = document.getElementById('contacto');
const agregarBtn = document.getElementById('agregarBtn');
const agregarContactBtn = document.getElementById('agregarContactBtn');
const logout = document.getElementById('logout');
const popup = document.getElementById('popup');
const contactoDiv = document.getElementById('contactoDiv');
const exitBtn = document.getElementById('exit');
var userContacto;

popup.style.display="none";



function metodo(){

    database.ref('UltimoLab/contactos').on('value',function(data){
        contactoContainer.innerHTML="";
        data.forEach(
            nuevoContacto => {
                let valor = nuevoContacto.val();
                let publicarContacto = new Contacto(valor);
                
                if(valor.userC===userContacto){
                    contactoContainer.appendChild(publicarContacto.render());
                }
               
            
            }
        );
    }
    );
}


auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){

        
        console.log(user.uid);
        database.ref('UltimoLab/users/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                nombre.innerHTML = userDB.nombre;
                userContacto=userDB.nombre;
            }
        );
        metodo();
        
        }else{
            window.location.href = "login.html";
        }
    }

);

agregarBtn.addEventListener('click',()=>{
   popup.style.display="block";

}
);




ponerContacto = () =>{
    let referencia = database.ref('UltimoLab/contactos').push()
    let newContact = {
        id:referencia.key,
        nomContacto:nombreContacto.value,
        telContacto: telefonoContacto.value,
        userC:userContacto
    };
    referencia.set(newContact);
    nombreContacto.value = '';
    telefonoContacto.value = '';

}




agregarContactBtn.addEventListener('click',ponerContacto);


exitBtn.addEventListener('click',()=>{
    popup.style.display="none";

}
);












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