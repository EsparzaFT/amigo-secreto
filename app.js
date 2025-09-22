// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, escribe un nombre');
        return;
    }

    // Validar que el nombre no exista ya en la lista
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Enfocar el campo de entrada para seguir agregando nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    
    // Limpiar la lista anterior
    listaAmigos.innerHTML = '';
    
    // Si no hay amigos, mostrar mensaje
    if (amigos.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No hay amigos agregados aún';
        li.className = 'empty-message';
        listaAmigos.appendChild(li);
        return;
    }
    
    // Crear elementos de lista para cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'friend-item';
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto (solo un nombre)
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    
    // Validar que haya al menos 1 amigo para sortear
    if (amigos.length === 0) {
        resultado.innerHTML = '<li class="error-message">No hay amigos en la lista para sortear</li>';
        // Ocultar la lista de amigos
        listaAmigos.style.display = 'none';
        return;
    }
    
    // Ocultar la lista de amigos
    listaAmigos.style.display = 'none';
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar solo el resultado del sorteo
    resultado.innerHTML = `
        <li class="result-title">¡Amigo secreto sorteado!</li>
        <li class="result-name">${amigoSorteado}</li>
    `;
}

// Función para manejar la tecla Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Inicializar la lista
    actualizarListaAmigos();
});