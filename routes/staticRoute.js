const express = require('express')
const Url = require('../models/url')
const { getUser } = require('../service/auth')

const staticRoute = express.Router()

staticRoute.get('/home', async (req, resp) => {
    const user = req.user
    // console.log('user',user)
    if(!user) return resp.redirect('/Login')
    const docs = await Url.find({ createdBy: req.user._id })
    return resp.render('Home', {
        docs: docs
    })
})
staticRoute.get('/signup', (req, resp) => {
    return resp.render('Signup')
})
staticRoute.get('/login', (req, resp) => {
    return resp.render('Login')
})

module.exports = staticRoute