
const database2 = firebase.database();

class contacto{ 
    constructor(contactoLista){
        this.contactoLista=contactoLista;
    
}


render=()=>{
let component = document.createElement('div');
component.className="comp";

let contactoComp = document.createElement('div');
contactoComp.className="contactoComp";
contactoComp.innerHTML=(
    this.contactoLista.i
);

let idContacto = document.createElement('div');
   idContacto.className="idTarea";
   idContacto.innerHTML = this.contactoLista.id;


let deleteBtn = document.createElement('button');
deleteBtn.className = "deleteBtn";
deleteBtn.innerHTML = "x";


deleteBtn.addEventListener('click', ()=>{
           
    database2.ref('tarea/tareaNueva/'+this.contactoLista.id).set(null);
    
    });



    
    component.appendChild(contactoComp);
    component.appendChild(deleteBtn);
    component.appendChild(idContacto);
 

    return component;



}















}