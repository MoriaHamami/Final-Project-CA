const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getWapDemos, getWapById, addWap, updateWap, removeWap, addWapMsg, removeWapMsg } = require('./wap.controller')
const router = express.Router()

router.get('/:wapId', getPublishedWap)
