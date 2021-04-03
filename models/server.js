const express = require('express')
const app = express();
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuarioPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        this.routes();
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
    }





    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        })
    }
}
module.exports = Server;