const express = require('express');
const router = express.Router();

const members = require('./members');
const product = require('./product');
const brand = require('./brand');

router.use('/members', members);
router.use('/product', product);
router.use('/brand', brand);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
