//creamos un array para almacenar los nombres 
let amigos = [];

//creamos la funcion para agregar amigos
function agregarAmigo() {
    //captura el valor de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //condicional para validar la entrada
    if (nombre ==="") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    //actualizar el array de amigos
    listAmigos.push(nombre);

    //muestra la lista de amigos en la pagina 
    actualizarLista();

    //limpia el campo de la entrada
    input.value="";  
}

 //creamos la funcion para optener el elemento de la lista HTML
function actualizarLista() {
    let lista = document.createElement("li");

    //limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    //iteriar sobre el arreglos y crear elementos <li> para cada amigo
    //usamos el ciclo for
    for (let amigo of listAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li)//agrgar el <li> a la lista 
    }
}

//obtener el elemento donde se mostrara el resultado
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    //validar que haya amigos en la lista antes de sortear
    if (listAmigos.length === 0) {
        alert("No hay amigos en la laista para sortear. ");
        return;
    }

    //generar indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listAmigos.length);

    //obtener el nombre del amigo sorteado
    let amigoSorteado = listAmigos[indiceAleatorio];

    //mostrar el resultado en la pagina 
    resultado.innerHTML = `<li>${amigoSorteado} es el amigo secreto 🎉</li>`;
}