

const userGet = (req, res) => {
    const params = req.query;

    res.json({
        msg: 'GET api - controlador',
        params
    })
}

const userPost =(req, res) => {
    const body = req.body;
    res.json({
        body
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