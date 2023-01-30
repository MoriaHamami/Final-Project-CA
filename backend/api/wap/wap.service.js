const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId

// OK
async function query(filterBy = { isDemo: '', isPublished: '', cmpId: '', wapName: '', username: '' }) {
    try {
        const criteria = {}
        // console.log('filterBy:',filterBy)
        // console.log('filterBy.isDemo:', filterBy.isDemo)
        if (filterBy.isDemo && filterBy.isDemo === 'true') criteria.isDemo = true
        if (filterBy.isPublished && filterBy.isPublished === 'true') criteria.isPublished = { $eq: true }
        if (filterBy.wapName && filterBy.wapName !== 'undefined') criteria.name = { $eq: filterBy.wapName }
        if (filterBy.cmpId && filterBy.cmpId !== 'undefined') criteria.cmps = { $elemMatch: { id: filterBy.cmpId } }
        // if(filterBy.username !== 'undefined') criteria.createdBy = filterBy.username 
        if (filterBy.username && filterBy.username !== 'undefined') criteria['createdBy.username'] = { $eq: filterBy.username }
        // if(filterBy.category) criteria.cmps = { $elemMatch : { category : filterBy.category } }
        // if(filterBy.category) criteria.cmps = { $elemMatch : { type : filterBy.category } }
        // console.log('criteria:', criteria)

        const collection = await dbService.getCollection('wap')
        let waps = await collection.find(criteria).toArray()
        console.log('criteria:', criteria)
        return waps
    } catch (err) {
        logger.error('cannot find waps', err)
        throw err
    }
}

// OK
async function getWapById(wapId) {
    try {
        const collection = await dbService.getCollection('wap')
        const wap = collection.findOne({ _id: ObjectId(wapId) })
        return wap
    } catch (err) {
        logger.error(`while finding wap ${wapId}`, err)
        throw err
    }
}

// OK
async function remove(wapId) {
    try {
        const collection = await dbService.getCollection('wap')
        await collection.deleteOne({ _id: ObjectId(wapId) })
        return wapId
    } catch (err) {
        logger.error(`cannot remove wap ${wapId}`, err)
        throw err
    }
}

// OK
async function add(wap) {
    try {
        wap.createdAt = Date.now()
        const collection = await dbService.getCollection('wap')
        await collection.insertOne(wap)
        return wap
    } catch (err) {
        logger.error('cannot insert wap', err)
        throw err
    }
}

// OK
async function update(wap) {
    try {
        const wapToUpdate = { ...wap }
        delete wapToUpdate._id
        const collection = await dbService.getCollection('wap')
        // console.log('wapToUpdate.viewsCount:',wapToUpdate.viewsCount)
        // console.log('wap._id:', wap._id)
        await collection.updateOne({ _id: ObjectId(wap._id) }, { $set: wapToUpdate })
        return wap
    } catch (err) {
        logger.error(`cannot update wap ${wap._id}`, err)
        throw err
    }
}

async function updateWithId(wap) {
    try {
        // const wapToUpdate = {...wap}
        const collection = await dbService.getCollection('wap')
        console.log('wap:', wap)
        // console.log('wapToUpdate.viewsCount:',wapToUpdate.viewsCount)
        // console.log('wap._id:', wap._id)
        await collection.updateOne({ _id: ObjectId(wap._id) }, { $set: wap })
        return wap
    } catch (err) {
        logger.error(`cannot update wap ${wap._id}`, err)
        throw err
    }
}

// async function add(wap) {
//     try {
//         const collection = await dbService.getCollection('wap')
//         await collection.insertOne(wap)
//         return wap
//     } catch (err) {
//         logger.error('cannot insert wap', err)
//         throw err
//     }
// }

// async function update(wap) {
//     try {
//         const wapToSave = {
//             vendor: wap.vendor,
//             price: wap.price
//         }
//         const collection = await dbService.getCollection('wap')
//         await collection.updateOne({ _id: ObjectId(wap._id) }, { $set: wapToSave })
//         return wap
//     } catch (err) {
//         logger.error(`cannot update wap ${wapId}`, err)
//         throw err
//     }
// }

// OK
async function addWapCmp(wapId, cmp) {
    try {
        cmp.id = utilService.makeId()
        const collection = await dbService.getCollection('wap')
        await collection.updateOne({ _id: ObjectId(wapId) }, { $set: { cmps: cmp } })
        return msg
    } catch (err) {
        logger.error(`cannot add wap cmp ${wapId}`, err)
        throw err
    }
}

// TO CHECK!!!
async function updateWapCmp(wapId, cmp) {
    try {
        const collection = await dbService.getCollection('wap')
        await collection.updateOne({ _id: ObjectId(wapId), 'cmps.id': cmp.id }, { $set: { 'cmps.$': cmp } })
        return cmp
    } catch (err) {
        logger.error(`cannot add wap cmp ${wapId}`, err)
        throw err
    }
}


// OK
async function removeWapCmp(wapId, cmpId) {
    try {
        const collection = await dbService.getCollection('wap')
        await collection.updateOne({ _id: ObjectId(wapId) }, { $pull: { cmps: { id: cmpId } } })
        // console.log('collection:', collection)
        return cmpId
    } catch (err) {
        logger.error(`cannot remove wap cmp ${cmpId}`, err)
        throw err
    }
}


module.exports = {
    query,
    getWapById,
    // getCmpById,
    remove,
    add,
    update,
    addWapCmp,
    removeWapCmp,
    updateWapCmp,
    updateWithId
    // addWapMsg,
    // removeWapMsg
}


// service functions
// query,
// getWapById,
// getCmpById === query(filterBy.cmpId)
// remove,
// add,
// update,
// addWapCmp,==> ''
// removeWapCmp==> ''