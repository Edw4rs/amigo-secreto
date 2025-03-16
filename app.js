//1. Crear un array para almecenar los nombres 
let listAmigos = [];

function agregarAmigo() {
    //captura el valor de entrada 
    const input= document.getElementById("amigo");
    const nombre = input.value.trim();

    //valida la entrada
    if (nombre ==="") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }
    
    //actualiza el array de amigos
    listAmigos.push(nombre);

    //muestra la lista de amigos en la pagina 
    actualizarLista();

    //limpia el campo de entrada 
    input.value="";
}

function actualizarLista() {
    //Obtener el elemento de la lista en el HTML
    let lista = document.getElementById("listaAmigos");

    //limpiar la lista exitente para evitar duplicados
    lista.innerHTML = "";

    //iterar sobre el arreglo 3y crear elemnetos <li> para cada amigo
    for (let amigo of listAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li)//agrgar el <li> a la lista
        
    }
    
}

function sortearAmigo() {
    //obtener el elemento donde se mostrara el resultado
    let resultado = document.getElementById("resultado");

    //validar que haya amigos en la lista antes de sortear 
    if (listAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.")
        return;
    }

    //generar inidice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listAmigos.length);

    //obtener el nombre del amigo sorteado
    let amigoSorteado = listAmigos[indiceAleatorio];

    //mostrar el resultado en la pagina
    resultado.innerHTML = `<li>${amigoSorteado} es el amigo secreto 🎉</li>`;
    
} 