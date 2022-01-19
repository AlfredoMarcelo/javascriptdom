


//----AGREGAR ADDEVENLISTENER A UN FRAGMENT CON TEMPLATE---

const listaDeNombre = document.getElementById("listaDeNombre");
const liTemplate = document.querySelector("#liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Chile","Perú","Venezuela"];

const clickPaises = (e) => console.log("haz seleccionado a", e.target.textContent);

paises.forEach(pais => {

    const clone = liTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector('span').textContent = pais;
    console.log(clone);
    clone.addEventListener("click", clickPaises);

    fragment.appendChild(clone);
})
listaDeNombre.appendChild(fragment);
 

//------------EJEMPLO CON TEMPLATE Y FRAGMENT PARA EVITAR REFLOW CON ESTRUCTURAS COMPLEJAS-----

/* const listaDeNombre = document.getElementById("listaDeNombre");
const liTemplate = document.querySelector("#liTemplate");
const fragment = document.createDocumentFragment();
const paises = ["Chile","Perú","Venezuela"];


paises.forEach(pais => {

    const clone = liTemplate.content.cloneNode(true)
    clone.querySelector('span').textContent = pais
    console.log(clone)

    fragment.appendChild(clone)
})
listaDeNombre.appendChild(fragment);
 */


//-----EJEMPLO SOLO CON TEMPLATE-------------

/* const liTemplate = document.getElementById("liTemplate");
const clone = liTemplate.content.cloneNode(true);
clone.querySelector(".text-primary").textContent = "Agregando string desde template";
console.log(clone);
listaDeNombre.appendChild(clone); */
















//-------------------------Uso del Fragment-------------

/* paises.forEach((pais)=>{
    const li = document.createElement('li');
    li.className = "List"

    const b = document.createElement('b');
    b.textContent = "País: "

    const span = document.createElement('span');
    span.className = "text-warning"
    span.textContent = pais

    li.appendChild(b);
    li.appendChild(span);

    fragment.appendChild(li);
})
listaDeNombre.appendChild(fragment) */

//-----------evitar reflow con fragment-----------


/* const fragment = document.createDocumentFragment()

paises.forEach((pais)=>{
    const li = document.createElement("li");
    li.textContent = pais;
    fragment.appendChild(li)
})// se recorre el array pero fuera del dom y en la linea 16 se añade recien al dom, una vez que ya esta listo

listaDeNombre.appendChild(fragment)
 */



//--------------------------------------
// ejemplo de innerhtml (no utilizar )
/* 
const arrayPaises = ["Chile", "Perú", "Venezuela"];

arrayPaises.forEach((pais)=>{
    listaDeNombre.innerHTML += `<li>${pais}</li>` //interpolación
}) */





