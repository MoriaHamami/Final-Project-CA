const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getWapById, addWap, updateWap, removeWap, getWaps, getCmpById, getCmpsByType, addWapCmp, updateWapCmp, removeWapCmp } = require('./wap.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getWaps)
router.get('/:wapId', getWapById)
// TO CHECK!!!
router.get('/:cmpId/cmp', getCmpById)
// TO CHECK!!!
router.get('/:type/cmps', getCmpsByType)
router.post('/', addWap)
router.put('/:id', updateWap)
router.delete('/:id', requireAuth, removeWap)
router.post('/:id/cmp', addWapCmp)
router.put('/:id/cmp', updateWapCmp)
router.delete('/:id/cmp/:cmpId', removeWapCmp)

// router.delete('/:id', requireAuth, requireAdmin, removeWap)
// router.get('/published/:wapId', getPublishedWap)

// router.post('/:id/msg', requireAuth, addWapMsg)
// router.delete('/:id/msg/:msgId', requireAuth, removeWapMsg)

// TO FRONT
// getCmpsByCategory==> filter on params


module.exports = router

// query,
// save, ==> saveWap
// saveCmp,
// getWapById,
// getCmpById,
// removeWap,
// getCmpsByCategory,
// findCmpIdx,

// {
//     path: '/',
//     component: <HomePage />,
//     label: 'Home',
// },

// {
//     path: '/publishedWapId',
//     component: <publishedWap />,
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
