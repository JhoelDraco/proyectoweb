const url = 'http://localhost:3000/productos';

console.log("Tunez")
//Metodo que nos permite simular los eventos de los objetos de la pagina html
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

//Procedimiento adicion y modificacion
formularioData.addEventListener('submit', (e) => {
    e.preventDefault()
    let act = 0;
    if (activo.checked) {
        act = 1
    }
    console.log(act)
    console.log('OPCION Nuevo')
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(
            {
                nombre: nombre.value,
                username: username.value,
                password: password.value,
                fecNac: fecNac.value
            }
        )
    })
    .then(response => {
        response.json()
        console.log(response.status)
    })
    .catch(error => console.log(error))
})
