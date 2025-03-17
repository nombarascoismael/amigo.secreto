// Lista para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = ""; // Limpiar el input
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(amigoSecreto) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultado anterior

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎁`;
    resultadoLista.appendChild(li);

    mostrarBotonReinicio();
}

// Función para mostrar el botón de reinicio
function mostrarBotonReinicio() {
    const buttonContainer = document.querySelector(".button-container");
    buttonContainer.innerHTML = `
        <button class="button-reset" onclick="reiniciarJuego()" aria-label="Reiniciar juego">
            🔄 Reiniciar Juego
        </button>
    `;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de participantes
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Restaurar el botón de sorteo
    const buttonContainer = document.querySelector(".button-container");
    buttonContainer.innerHTML = `
        <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
            <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
            Sortear amigo
        </button>
    `;
}
