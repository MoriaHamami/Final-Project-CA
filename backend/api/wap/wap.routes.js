const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getWapDemos, getWapById, addWap, updateWap, removeWap, addWapMsg, removeWapMsg } = require('./wap.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/demos', log, getWapDemos)
router.get('/:wapId', getWapDemos)
router.post('/', requireAuth, addWap)
router.delete('/:id', requireAuth, removeWap)
// router.delete('/:id', requireAuth, requireAdmin, removeWap)

// router.post('/:id/msg', requireAuth, addWapMsg)
// router.delete('/:id/msg/:msgId', requireAuth, removeWapMsg)

module.exports = router

// {
//     path: '/',
//     component: <HomePage />,
//     label: 'Home',
// },
// {
//     path: '/wap/demos',<======== /WapDemos
//     component: <WapDemos />, 
//     label: 'Templates',
// },
// {
//     path: '/wap/:wapId', <====== /editor/:wapId
//     component: <Editor />,
//     label: 'Editor',
// },
// {
//     path: '/drafts',
//     component: <Drafts />,
//     label: 'Drafts',
// },
// {
//     path: '/user',
//     component: <LoginSignup />,
//     label: 'Login',
// },
// {
//     path: '/publish/:wapName', <===== /:wapId
//     component: <Publish />,
//     label: '',
// }
