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
  DisplayForms.find({ title: req.body.search })
    .sort({ title: 'desc' })
    .then(displayForms => {
      res.render('displayForms/index', {
        displayForms
      });
    });
});

router.get('/view', (req, res) => {
  console.log(req.body.name);
  DisplayForms.find({ title: res.name }).then(displayForms => {
    res.render('displayForms/view', {
      displayForms
    });
  });
});
router.post('/pic', (req, res) => {
  DisplayForms.find({ title: req.body.name }).then(displayForms => {
    res.render('displayForms/view', {
      displayForms
    });
  });
});

router.post('/cart', (req, res) => {
  DisplayForms.update({ title: req.body.name }, { inCart: true }).then(
    displayForms => {
      res.redirect('/');
      req.flash('success_msg', 'added to cart');
    }
  );
});
module.exports = router;
