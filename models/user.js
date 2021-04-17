const { Schema, model} = require('mongoose');

const UserSchema = Schema({
    _id :{
        type: String,
        required:[true, "ID no puede ser nulo"]
    },
    userName: {
        type: String,
        required: [true, "El usuario es obligatorio"],       
    },
    email: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatorio"],
    },
    img: {
        type: String,
    },
    /*El rol puede ser
    U: USUARIO
    P: PROVEEDOR DE SERVICIO
    A: AMBOS */
    role: {
        type: String,
        required: [true, "El rol es requerido"]
    },/*ACTIVE-INACTIVE */
    status: {
        type: String,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    facebook: {
        type: Boolean,
        default: false
    }, 
    phoneNumber:{
        type: String
    },
    userAdress:{
        type: String
    }
});


module.exports = model('User', UserSchema );