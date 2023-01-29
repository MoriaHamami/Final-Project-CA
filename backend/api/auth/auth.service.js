const Cryptr = require('cryptr')
const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')
const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')

module.exports = {
    signup,
    login,
    getLoginToken,
    validateToken,
    signupGoogle,
}

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    const user = await userService.getByUsername(username)
    console.log('user from DATA BASE:', user)
    if (!user) return Promise.reject('Invalid username or password')
    // TODO: un-comment for real login
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password
    return user
}


async function signup({ username, password, fullname, imgUrl }) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    if (!username || !password || !fullname) return Promise.reject('fullname, username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash, fullname, imgUrl })
}


async function signupGoogle({ username, fullname, imgUrl }) {
    // const saltRounds = 10
    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    if (!username || !fullname) return Promise.reject('fullname and username  are required!')
    // const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, fullname, imgUrl })
}


function getLoginToken(user) {
    const userInfo = { _id: user._id, fullname: user.fullname, username: user.username }
    return cryptr.encrypt(JSON.stringify(userInfo))
}

function validateToken(loginToken) {
    try {
        const json = cryptr.decrypt(loginToken)
        const loggedinUser = JSON.parse(json)
        return loggedinUser

    } catch (err) {
        console.log('Invalid login token')
    }
    return null
}




// ;(async ()=>{
//     await signup('bubu', '123', 'Bubu Bi')
//     await signup('mumu', '123', 'Mumu Maha')
// })()