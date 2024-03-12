const { getUser } = require('../service/auth')

const checkedUserLoggedIn = (req, resp, next) => {
    // const sessionId = req.cookies.sessionid
    // if (!sessionId) return resp.redirect('/Login')
    // const user = getUser(sessionId)
    // if (!user) return resp.redirect('/Login')
    const token = req.cookies.token;
    if (!token) return resp.redirect('/Login')
    const user = getUser(token)
    if (!user) return resp.redirect('/Login')
    req.user = user
    next()
}

const checkAuth = (req, resp, next) => {
    // const sessionId = req.cookies.sessionid
    // const user = getUser(sessionId)
    const token = req.cookies.token;
    const user = getUser(token)
    req.user = user
    next()
}

module.exports = { checkedUserLoggedIn, checkAuth }