const listaDeNombre = document.getElementById("listaDeNombre");

const paises = ["Chile","Perú","Venezuela"];


const fragment = document.createDocumentFragment()

paises.forEach((pais)=>{
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
listaDeNombre.appendChild(fragment)












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





