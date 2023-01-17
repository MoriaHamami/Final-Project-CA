import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service.js'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    // login,
    // logout,
    // signup,
    // getLoggedinUser,
    // saveLocalUser,
    query,
    getById,
    remove,
    update,
    // changeScore,
    getByUsername,
    add
}

window.userService = userService


function query() {
    return storageService.query('user')
    // return httpService.get(`user`)
}


async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ _id: ObjectId(userId) })
    // console.log('user:', user)    
        delete user.password

        // user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
        // user.givenReviews = user.givenReviews.map(review => {
        //     delete review.byUser
        //     return review
        // })


        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}

async function getByUsername(username) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        logger.error(`while finding user by username: ${username}`, err)
        throw err
    }
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

// async function login(userCred) {
//     const users = await storageService.query('user')
//     const user = users.find(user => user.username === userCred.username)
//     // const user = await httpService.post('auth/login', userCred)
//     if (user) {
//         // socketService.login(user._id)
//         return saveLocalUser(user)
//     }
// }
// async function signup(userCred) {
//     userCred.score = 10000
//     if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
//     const user = await storageService.post('user', userCred)
//     // const user = await httpService.post('auth/signup', userCred)
//     // socketService.login(user._id)
//     return saveLocalUser(user)
// }
// async function logout() {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
//     socketService.logout()
//     // return await httpService.post('auth/logout')
// }

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }


function saveLocalUser(user) {
    user = {_id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score}
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

async function add(user) {
    try {
        // peek only updatable fields!
        const userToAdd = {
            username: user.username,
            password: user.password,
            fullname: user.fullname,
            isAdmin: user.isAdmin
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot insert user', err)
        throw err
    }
}

// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()



