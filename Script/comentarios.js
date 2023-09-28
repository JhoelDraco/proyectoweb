const express = require("express");
const router = express.Router();
const conexion = require('../config/conexion');


//CREAR COMENTARIO

router.post('/', (req, res) => {
    let latestId;
    let getLatestIdSql = "SELECT MAX(ID) AS max_id FROM Comentarios";

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
                ContenidoComentario: req.body.ContenidoComentario,
                FechaPublicacionComentario: new Date(),
                AutorComentario: req.body.AutorComentario,
                NoticiaID: req.body.NoticiaID
            };

            const insertSql = "INSERT INTO Comentarios SET ?";

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
router.get('/', (req, res) => {
    const selectSql = "SELECT * FROM Comentarios";

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