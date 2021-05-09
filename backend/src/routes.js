const { Router } = require('express');

const AccountController = require('./app/controllers/AccountController');

const router = Router();

router.get('/accounts', AccountController.index);
router.get('/accounts/:id', AccountController.show);
router.delete('/accounts/:id', AccountController.delete);
router.post('/accounts/', AccountController.store);
router.put('/accounts/:id', AccountController.update);

module.exports = router;