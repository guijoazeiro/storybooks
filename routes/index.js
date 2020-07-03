const express = require('express')
const router = express.Router()

//GET /
router.get('/', (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

//GET /dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router