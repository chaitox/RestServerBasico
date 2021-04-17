const Usuario = require('../models/user');

const userGet = async(req, res) => {
    const params = req.query;
    const users = await Usuario.find();

    res.json({
        users
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