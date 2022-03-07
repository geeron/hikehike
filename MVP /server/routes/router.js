const Express = require('express');
const router = Express.Router();
const controller = require('../controllers/controller');

router.get('/hikes', controller.getAllHikes);
router.post('/hikes', controller.submitHike);
router.delete('/hikes/:id', controller.deleteHike)


module.exports = router