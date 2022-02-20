var express = require('express');
var router = express.Router();

const Validate = require('fastest-validator');
const v = new Validate();

const topicController = require('../controllers/topic.controler');

/* GET home page. */
router.get('/', topicController.getAll)

router.get('/:id', topicController.getById)

router.post('/', topicController.create);

router.put('/:id', topicController.update)

router.delete('/:id', topicController.delete)

module.exports = router;
