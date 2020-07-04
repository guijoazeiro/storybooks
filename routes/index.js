const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

//GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

//GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard')
})

module.exports = router