const provider = require('../models/provider');
const Provider = require('../models/provider');

const providerGet = async(req, res) =>{
    console.log(req.query)
    const {desde, limite} = req.query;
   const providers = await Provider.find()
   .skip(Number(desde))
   .limit(Number(limite));
   res.json({
       providers
   });
}

const providerPost = async(req, res)=>{
    console.log(req.body);
    const body = req.body;
    const provider = new Provider(body);
    await provider.save();

    res.json({
        provider
    });
}
module.exports = {
    providerGet,
    providerPost
}