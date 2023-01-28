const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
const http = require('http').createServer(app)

// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:8080'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
// const reviewRoutes = require('./api/review/review.routes')
const wapRoutes = require('./api/wap/wap.routes')
// const publishedRoutes = require('./api/published/published.routes')
const {setupSocketAPI} = require('./services/socket.service')

// routes
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
app.all('*', setupAsyncLocalStorage)

// app.use('/api', publishedRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

// app.use('/api/WapDemos', WapDemosRoutes)
app.use('/api/wap', wapRoutes)
setupSocketAPI(http)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
// const { getPublishedWap } = require('./api/wap/wap.controller')
const port = process.env.PORT || 3030
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})

// query,
// save, ==> saveWap
// saveCmp,
// getWapById,
// getCmpById,
// removeWap,
// getCmpsByCategory,
// findCmpIdx,

// getWapDemoById, ==> getWapById
// getCmpTypes, ==> getCategories only in back???
// getWapByName, ==> query ispublished
// getWapDemos, ==> query isdemo

// themes ??
