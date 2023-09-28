const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
    database: 'PeriodicoFutbol'
})

conexion.connect(function(err) {
    if(err){
        throw err;
    }else{
        console.log('Conexion exitosa !!!');
    }
});
app.get('/', function(req, res) {
    res.send('Ruta Inicio');
});

app.get('/registro',(req, res) => {
    let sql = "Select Nombre,Nombre_Usuario,Contrasena,Fecha_Nac,case when activo = true then 1 else 0 end activo,unidad from tRegistro;"
    conexion.query(sql, (err, resul) => {
        if(err) {
            console.log("Auuuuh");
            throw err
        }else{
            //console.log(resul);
            //res.send(resul)
            res.json(resul);
        }
    });
});

app.get('/productos_us',(req, res) => {
    let sql = "Select Nombre,Nombre_Usuario,Contrasena,Fecha_Nac from tRegistro;"
    conexion.query(sql, (err, resul) => {
        if(err) {
            console.log("Auuuuh");
            throw err
        }else{
            //console.log(resul);
            res.json(resul)
        }
    });
});

app.get('/registro/:codigo',function(req,res) {
    let sql = 'Select Nombre,Nombre_Usuario,Contrasena,Fecha_Nac,case when activo = true then 1 else 0 end activo from tRegistro where Id=?'
    conexion.query(sql,[req.params.codigo],function(err,resul){
        if(err){
            throw response.json(err.message)
        }else{
            res.json(resul);
        }
    });
});

app.post('/registro',function(req,res) {
    sql = 'Select IFNULL(MAX(id_producto), 0)+1 valor from tRegistro;'
    let codigo=0;
    conexion.query(sql,function(error,dato){
        if(error){
            console.log("Error: "+error.message);
            return -1;
        }else{
            codigo=dato[0].valor;
            let habil = 0;
            if(req.body.activo=="1"){
                habil = 1;
            }
            let data = {
                Id: codigo,
                Nombre:req.body.Nombre,
                Nombre_Usuario:req.body.Nombre_Usuario,
                Contrasena:req.body.Contrasena,
                Fecha_Nac:req.body.Fecha_Nac
            }
            let sql = 'Insert into tRegistro set ?';

            conexion.query(sql,data, function(err,resul){
                if(err){
                    console.log(err.message);
                    res.json({ mensaje:'Error no se adiciono' });
                    throw res.json(err.message)
                }else{
                    res.json(resul);
                    console.log('Positiva, se adiciono');
                }
            });
        }
    })
});
/*
// http://localhost:3000/productos/1
app.put('/productos/:cod',function(req,res) {
    let codigo = req.params.cod;
    let id_tipo = req.body.id_tipo;
    let descripcion = req.body.descripcion;
    let precio_venta = req.body.precio_venta;
    let precio_compra = req.body.precio_compra;
    let cantidad = req.body.cantidad;    
    let activo = 1
    if(req.body.activo=='0'){
        activo = 0
    }
    let sql = 'Update tproducto set id_tipo = ?, descripcion=?, precio_venta=?, precio_compra = ?, cantidad = ?, activo = ? where id_producto = ?';
    conexion.query(sql,[Nombre,Nombre_Usuario,Contrasena,Fecha_Nac],function(err,resul){
        if(err){
            throw res.json(err.message)
        }else{
            res.json('Se modifico correctamente');
        }
    });
 });
 app.delete('/productos/:codigo',function(req,res) {
    let codigo = req.params.codigo;
    let sql = 'Delete from tproducto where id_producto = ?';
    conexion.query(sql,[codigo],function(err,resul){
        if(err){
            console.log(err.message);
            // throw response.json(error.message);
        }else{
            res.json(resul);
        }
    });
 });
*/
const puerto = 3000
app.listen(puerto, function() {
    console.log('Servidor OK en puerto: '+puerto);
});