const router = require('express').Router()

const apiRoutes = require('./apiRoutes')
const htmlroutes = require('./htmlroutes')

router.use('/api', apiRoutes)
router.use('/htmlroutes', htmlroutes)

module.exports = router;