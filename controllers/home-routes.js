const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// Limited functionality if not logged in

// TODO: Get all posts for homepage
router.get('/', async (req, res) => {

});

// TODO: Get single post
router.get('/post/:id', async (req, res) => {

});

// Renders login view if not already logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Renders sign up view if not already logged in
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
