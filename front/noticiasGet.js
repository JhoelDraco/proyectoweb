const url = 'http://localhost:2000/noticias'; // Cambia la URL a la ruta correspondiente
const contenedor = document.getElementById('data'); // Asegúrate de que el contenedor esté seleccionado adecuadamente
let resultado = '';

const Carga_Datos = (datos) => {
    for (let i = 0; i < datos.length; i++) {
        resultado +=
            `<tr>
                <td>${datos[i].Titulo}</td>
                <td>${datos[i].CuerpoNoticia}</td>
                <td>${datos[i].FechaPublicacion}</td>
                <td>${datos[i].AutorID}</td>
                <td>${datos[i].CategoriaID}</td>
                <td>${datos[i].FuenteID}</td>
            </tr>`;
    }
    contenedor.innerHTML = resultado;
}

fetch(url, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        Carga_Datos(data);
    })
    .catch(error => {
        console.error("Error:", error);
        // Muestra un mensaje de error al usuario si es necesario
        contenedor.innerHTML = "Ocurrió un error al cargar los datos.";
    });
