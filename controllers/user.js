const user = require('../models/user');
const Usuario = require('../models/user');

const userGet = async(req, res) => {
    const params = req.query;
    const users = await Usuario.find();
    
    const info =  {
        "hola": "chau",
        "chau": "hola"
    }
    var data = [];
   for (const key in users) {
       if (Object.hasOwnProperty.call(users, key)) {
           const element = users[key];
           
           data.push({user: element, info})
           console.log(data);
       }
   }


    res.json({
        users: data,       
    })
}

const userPost = async (req, res) => {
    const body = req.body;
    console.log(body);
    const user = new Usuario(body);
    await user.save();

    res.json({
        user
    })
}

const userPut =  (req, res) => {
    const id = req.params.id;

    res.json({
        msg: 'put api - controlador',
        id
    })
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete api - controlador'
    })
}


module.exports = {
    userGet,
    userDelete,
    userPost,
    userPut
}