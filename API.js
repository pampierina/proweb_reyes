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

async function getRandomCat() {
  try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();

      // Mostrar la imagen de gato en la página
      document.getElementById('cat-img').src = data[0].url;
  } catch (error) {
      console.error('Error al obtener la imagen de gato:', error);
  }
}

function handleClick() {
  getRandomCat();
}

// Llamar a la función para obtener la información de Porygon al cargar la página
window.onload = fetchPorygon;
