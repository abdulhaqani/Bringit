/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const { ensureAuthenticated } = require('../helpers/auth');

require('../models/DisplayForms');

const DisplayForms = mongoose.model('displayForms');

// DisplayForms index page
router.get('/', ensureAuthenticated, (req, res) => {
  DisplayForms.find({})
    .sort({ title: 'desc' })
    .then(displayForms => {
      res.render('displayForms/index', {
        displayForms
      });
    });
});

router.post('/', (req, res) => {
  DisplayForms.find({})
    .sort({ title: 'desc' })
    .then(displayForms => {
      res.render('displayForms/index', {
        displayForms
      });
    });
});

router.post('/search', (req, res) => {
  DisplayForms.find({ title: /req.body.search/i })
    .sort({ title: 'desc' })
    .then(displayForms => {
      res.render('displayForms/index', {
        displayForms
      });
    });
});

router.get('/view', (req, res) => {
  const name = req.query.valid;
  DisplayForms.find({ title: /name/i }).then(displayForms => {
    res.render('displayForms/view', {
      displayForms
    });
  });
});
router.post('/pic', (req, res) => {
  const contextVal = req.body.name;
  console.log(req.body);
  DisplayForms.find({ title: /contextVal/i }).then(() => {
    res.redirect(`../displayForms/view?valid=${contextVal}`);
  });
});

router.post('/cart', (req, res) => {
  DisplayForms.updateMany(
    { title: /req.body.name/i },
    { $set: { inCart: true } }
  ).then(displayForms => {
    res.redirect('/');
    req.flash('success_msg', 'added to cart');
  });
});

router.get('/cart', (req, res) => {
  DisplayForms.find({ inCart: true })
    .sort({ title: 'desc' })
    .then(displayForms => {
      res.render('displayForms/cart', {
        displayForms
      });
    });
});

router.get('../payment', (req, res) => {
  res.render('/payment');
});

module.exports = router;
