const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getPublishedWap } = require('../wap/wap.controller')
const router = express.Router()

router.get('/:publishedWapId', getPublishedWap)

module.exports = router

