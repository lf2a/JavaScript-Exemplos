const express = require('express');
const DevController = require('./controllers/DevController');
const LikeControler = require('./controllers/LikeController');
const DislikeControler = require('./controllers/DislikeController');

const router = express.Router();

router.get('/dev', DevController.index);
router.post('/dev', DevController.store);

router.post('/dev/:devId/likes', LikeControler.store);
router.post('/dev/:devId/dislikes', DislikeControler.store);

module.exports = router;