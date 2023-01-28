const wapService = require('./wap.service.js')

const logger = require('../../services/logger.service')


// WORKS?
async function getWaps(req, res) {
  try {
    logger.debug('Getting Waps')
    const filterBy  = req.query
    // console.log('req.query:', req.query)
    const waps = await wapService.query(filterBy)
    // console.log('waps:', waps)
    res.json(waps)
  } catch (err) {
    logger.error('Failed to get waps', err)
    res.status(500).send({ err: 'Failed to get waps' })
  }
}



// async function getWaps(req, res) {
//   try {
//     logger.debug('Getting Waps')
//     const waps = await wapService.query()
//     res.json(waps)
//   } catch (err) {
//     logger.error('Failed to get waps', err)
//     res.status(500).send({ err: 'Failed to get waps' })
//   }
// }

// WORKS
async function addWap(req, res) {
  const { loggedinUser } = req

  console.log('loggedinUser:', loggedinUser)

  try {
    const wap = req.body
    if(loggedinUser._id) wap.createdBy = loggedinUser
    wap.isDemo = false
    const addedWap = await wapService.add(wap)
    res.json(addedWap)
  } catch (err) {
    logger.error('Failed to add wap', err)
    res.status(500).send({ err: 'Failed to add wap' })
  }
}



// async function saveWap(req, res) {

// }

// WORKS
async function getWapById(req, res) {
  try {
    const wapId = req.params.wapId
    // console.log('wapId:', wapId)
    const wap = await wapService.getWapById(wapId)
    // console.log(wap);
    res.json(wap)
  } catch (err) {
    logger.error('Failed to get wap', err)
    res.status(500).send({ err: 'Failed to get wap' })
  }
}

// WORK
async function getCmpById(req, res) {
  try {
    const cmpId = req.params.cmpId
    // console.log('wapId:', wapId)
    const filterBy = {cmpId}
    const wap = await wapService.query(filterBy)
    const cmp = wap[0].cmps.find(cmp => cmp.id === cmpId)
    // console.log(cmp);
    res.json(cmp)
  } catch (err) {
    logger.error('Failed to get cmp', err)
    res.status(500).send({ err: 'Failed to get cmp' })
  }
}

// async function getWapDemos(req, res) {
//   try {
//     logger.debug('Getting Waps Demos')
//     const waps = await wapService.query('demo')
//     res.json(waps)
//   } catch (err) {
//     logger.error('Failed to get waps', err)
//     res.status(500).send({ err: 'Failed to get waps' })
//   }
// }


// WORKS ON HEADER
async function getCmpsByType(req, res) {
  try {
    // logger.debug('Getting Waps')
    let type = req.params.type
    if(type === 'galleries') type = 'wap-gallery'
    else if(type === 'about') type = 'wap-about'
    else type = 'wap-' + type.slice(0, -1)
    console.log('type:', type)
    // const { filterBy } = req.query.params
    const filterBy = {isDemo: 'true'}
    const waps = await wapService.query(filterBy)
    console.log('waps:',waps.length)
    ////////
    // for(const i = 0; i < wap.cmps.length; i++) {

    // }
    const cmps = []
    waps.map(wap => {
        wap.cmps?.find(cmp => {
          if(type === cmp.type) cmps.push(cmp)
        })
    })
    res.json(cmps)
  } catch (err) {
    logger.error('Failed to get cmps', err)
    res.status(500).send({ err: 'Failed to get cmps' })
  }
}


// async function addWap(req, res) {
//   const {loggedinUser} = req

//   try {
//     const wap = req.body
//     wap.createdBy = loggedinUser
//     const addedWap = await wapService.add(wap)
//     res.json(addedWap)
//   } catch (err) {
//     logger.error('Failed to add wap', err)
//     res.status(500).send({ err: 'Failed to add wap' })
//   }
// }

// WORKS
async function updateWap(req, res) {
  const { loggedinUser } = req
  console.log('loggedinUser:', loggedinUser)
  // console.log('req:', req)
  try {
    const wap = req.body
    wap.createdBy = loggedinUser
    wap.updatedAt = Date.now()
    const updatedWap = await wapService.update(wap)
    res.json(updatedWap)
  } catch (err) {
    logger.error('Failed to update wap', err)
    res.status(500).send({ err: 'Failed to update wap' })
  }
}

// async function updateWap(req, res) {
//   try {
//     // const toyToSave = {
//     //   name: toy.name,
//     //   price: toy.price,
//     //   labels: toy.labels,
//     //   inStock: toy.inStock
//     // }
//     const collection = await dbService.getCollection('toy')
//     await collection.updateOne({ _id: ObjectId(toy._id) }, { $set: toyToSave })
//     return toy
//   } catch (err) {
//     logger.error(`cannot update toy ${toy._id}`, err)
//     throw err
//   }
// }

// TO CHECK
async function removeWap(req, res) {
  try {
    const wapId = req.params.id
    const removedId = await wapService.remove(wapId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove wap', err)
    res.status(500).send({ err: 'Failed to remove wap' })
  }
}

// async function addWapCmp(req, res) {

// }

// async function removeWapCmp(req, res) {

// }

// TO CHECK
async function addWapCmp(req, res) {
  // const {loggedinUser} = req
  try {
    const wapId = req.params.id
    // const cmp = {
    //   txt: req.body.txt,
    //   by: loggedinUser
    // }
    const cmp = req.body
    const savedCmp = await wapService.addWapCmp(wapId, cmp)
    res.json(savedCmp)
  } catch (err) {
    logger.error('Failed to update wap', err)
    res.status(500).send({ err: 'Failed to update wap' })

  }
}

// TO CHECK
async function updateWapCmp(req, res) {
  try {
    const wapId = req.params.id
    const cmp = req.body
    const updatedCmp = await wapService.updateWapCmp(wapId, cmp)
    res.json(updatedCmp)
  } catch (err) {
    logger.error('Failed to update cmp', err)
    res.status(500).send({ err: 'Failed to update cmp' })
  }
}

// WORKS
async function removeWapCmp(req, res) {
  // const {loggedinUser} = req
  try {
    const wapId = req.params.id
    const {cmpId} = req.params
    // const cmpId = req.params.cmpId 
    // console.log('wapId:', wapId)
    // console.log('wapId:', cmpId)
    const removedId = await wapService.removeWapCmp(wapId, cmpId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove wap cmp', err)
    res.status(500).send({ err: 'Failed to remove wap cmp' })

  }
}

// getWaps, ==> query
// getWapById,==> ''
// getCmpById,==> ''
// addWap, ==> add
// updateWap, ==> update
// removeWap, ==> remove
// addWapCmp,==> ''
// removeWapCmp,==> ''

// getCmpsByCategory==> query

module.exports = {
  getWaps,
  getWapById,
  getCmpById,
  getCmpsByType,
  addWap,
  updateWap,
  removeWap,
  addWapCmp,
  updateWapCmp,
  removeWapCmp
}
// getWaps, ==> query(f)
// getWapById,==> ''
// getCmpById,==> query(f)
// addWap, ==> add
// updateWap, ==> update
// removeWap, ==> remove
// addWapCmp,==> ''
// removeWapCmp,==> ''
// getCmpsByCategory==> query()

// module.exports = {
//   getWaps,
//   getWapById,
//   // addWap,
//   // updateWap,
//   removeWap,
//   getWapDemos,
//   getPublishedWap
//   // addWapMsg,
//   // removeWapMsg
// }

// service functions
// query,
// getWapById,
// getCmpById
// remove,
// add,
// update,
// addWapCmp,==> ''
// removeWapCmp==> ''

// controller
// getWaps, ==> query
// getWapById,==> ''
// getCmpById,==> ''
// addWap, ==> add
// updateWap, ==> update
// removeWap, ==> remove
// addWapCmp,==> ''
// removeWapCmp,==> ''

// getCmpsByCategory==> query

// front service
// query,==> getWaps
// save, ==> addWap && updateWap
// getWapById,==> ''
// getCmpById,==> ''
// removeWap, ==>''
// addWapCmp,==> ''
// removeWapCmp==> ''

// getCmpsByCategory, ==> getCmpsByCategory
// findCmpIdx,
// getThemes

