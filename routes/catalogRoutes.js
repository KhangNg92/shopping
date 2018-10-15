const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Product');

const router = express.Router();
const seedProducts = require ('../seeds/products')
router.get('/', (req, res) => {
  Product.find({})
    .then((foundProduct) => {
      res.send(foundProduct);
    });
});

router.get('/seeds', (req,res) => {
  try {
    seedProducts();
    res.json({success: true});
  } catch (e) {
    console.log({e});
    res.json({e});
  }
});
module.exports = router;