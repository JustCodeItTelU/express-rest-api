const express = require('express');
const router = express.Router();
const Validate = require('fastest-validator')
const v = new Validate();

router.get('/', (req, res) => {
  res.json({
    pesan : 'ok'
  })
})

module.exports = router;
