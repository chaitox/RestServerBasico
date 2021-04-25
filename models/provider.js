const {Schema, model} = require('mongoose');

const ProviderSchema = Schema({
    
    providerName:{
        type: String,
        required:[true, "El nombre del proveedor es requerido"]
    },
    providerType:{
        type: String,
        required: [true, "El tipo es requerido"]
    },
    providerImgPath:{
        type: String
    }
});

module.exports = model('Provider', ProviderSchema);