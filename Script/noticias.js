
const express = require("express");
const router = express.Router();
const conexion = require('../config/conexion');
const cors = require('cors');
router.use(cors());

// Ruta POST para insertar una nueva noticia
router.post('/', (req, res) => {
    let latestId;
    let getLatestIdSql = "SELECT MAX(ID) AS max_id FROM Noticias";

    conexion.query(getLatestIdSql, (err, rows) => {
        if (err) {
            console.log(err.message);
            res.json({ mensaje: 'Error inesperado' });
        } else {
            if (rows[0].max_id === null) {
                latestId = 1;
            } else {
                latestId = rows[0].max_id + 1;
            }

            const data = {
                ID: latestId,
                Titulo: req.body.Titulo,
                CuerpoNoticia: req.body.CuerpoNoticia,
                FechaPublicacion: req.body.FechaPublicacion,
                AutorID: req.body.AutorID,
                CategoriaID: req.body.CategoriaID,
                FuenteID: req.body.FuenteID
            };

            const insertSql = "INSERT INTO Noticias SET ?";

            conexion.query(insertSql, data, (err, result) => {
                if (err) {
                    console.log(err.message);
                    res.json({ mensaje: 'Error inesperado' });
                } else {
                    res.json(result);
                }
            });
        }
    });
});

// Ruta GET para obtener todas las noticias
router.get('/', (req, res) => {
    const selectSql = "SELECT * FROM Noticias";

    conexion.query(selectSql, (err, rows) => {
        if (err) {
            console.log(err.message);
            res.json({ mensaje: 'Error inesperado' });
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;