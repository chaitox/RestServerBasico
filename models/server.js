const express = require('express')
const app = express();

const cors = require('cors');

const {dbConnection} = require('../database/config')


class Server {
    constructor() {
        this.app = express();

        this.port = process.env.PORT;

        this.usuarioPath = '/usuarios';
        this.proveedorPath = '/proveedor';

        //conectar a base de datos
        this.conectarDb();
        //Middlewares
        this.middlewares();

        this.routes();
    }

    async conectarDb(){
        await dbConnection();
    }
    
    middlewares(){
        //CORS
         this.app.use( cors() );

         //lectura y parseo del body
         this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
       this.app.use( this.usuarioPath , require('../routes/user'))
       this.app.use( this.proveedorPath, require('../routes/provider'))
    }





    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        })}
}
module.exports = Server;