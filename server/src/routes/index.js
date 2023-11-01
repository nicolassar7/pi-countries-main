const { Router } = require("express");

const countryRouter = require('./countryRoute')
const activityRouter = require('./activityRoute')

const router = Router();

router.use('/countries', countryRouter)
router.use('./activity', activityRouter)

module.exports = router;
