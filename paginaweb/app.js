const express = require("express");
const app = express();
app.use(express.json());

const comentarios = require('./Script/comentarios');
const noticias = require('./Script/noticias');
/*const audios = require('./Scripts/audios');
const favoritos = require('./Scripts/favorito');
const albums = require('./Scripts/albums');
const historialderepro = require('./Scripts/historialderepro');
const listadereproduccion = require('./Scripts/listadereproduccion');
//const vistasfavoritos= require('./Scripts/vistasfavoritos');
*/
app.use('/comentarios',comentarios);
app.use('/noticias',noticias);
/*app.use('/audios',audios);
app.use('/favoritos',favoritos);
app.use('/albums',albums);
app.use('/historialderepro',historialderepro);
app.use('/listadereproduccion',listadereproduccion);
//app.use('/vistasfavoritos',vistasfavoritos)
*/
app.listen(2000, () => {
    console.log("Existe la comunicacion con el SERVIDOR en puerto 2000");
  });