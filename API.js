async function fetchPorygon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/porygon');
        const data = await response.json();

        // Mostrar la información en la página
        document.getElementById('sprite').src = data.sprites.front_shiny;
        document.getElementById('nombre').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        document.getElementById('numero').innerText = data.id;
        document.getElementById('tipo').innerText = data.types.map(typeInfo => typeInfo.type.name).join(', ').charAt(0).toUpperCase() + data.types.map(typeInfo => typeInfo.type.name).join(', ').slice(1);
    } catch (error) {
        console.error('Error al obtener la información de Porygon:', error);
    }
}

// Llamar a la función para obtener la información al cargar la página
window.onload = fetchPorygon;
