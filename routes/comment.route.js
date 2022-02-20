const express = require('express');
const router = express.Router();
const Validate = require('fastest-validator')
const v = new Validate();

const commentController = require('../controllers/comment.controller');


/* GET home page. */
router.post('/:id', commentController.create);

router.put('/:id', commentController.update)

router.delete('/:id', commentController.delete)
module.exports = router;
