const router = require('express').Router();
const userRoutes = require('./user-routes.js');

router.use('/user', userRoutes);
// TODO: Comment and Post routes

module.exports = router;