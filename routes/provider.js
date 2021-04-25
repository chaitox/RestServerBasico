const { Router } = require('express');
const { providerGet, providerPost } = require('../controllers/provider');

const router = new Router();

router.get('/', providerGet);
router.post('/', providerPost)



module.exports = router;