const database2 = firebase.database();

class Contacto{ 
    constructor(contactoLista){
        this.contactoLista=contactoLista;
    
}


render=()=>{
let component = document.createElement('div');
component.className="comp";

let contactoComp = document.createElement('div');
contactoComp.className="contactoComp";
contactoComp.innerHTML=(
    this.contactoLista.nomContacto+`<br>`+
    this.contactoLista.telContacto
    

);




let deleteBtn = document.createElement('button');
deleteBtn.className = "deleteBtn";
deleteBtn.innerHTML = "x";


deleteBtn.addEventListener('click', ()=>{
           
    database2.ref('UltimoLab/contactos/'+this.contactoLista.id).set(null);
    
    });



    
    component.appendChild(contactoComp);
    component.appendChild(deleteBtn);
    
 
    return component;

}


}