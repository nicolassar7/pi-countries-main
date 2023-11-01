const { Router } = require("express");

const getActivity = require('../controllers/getActivity')

const activityRouter = Router();

activityRouter.get('/', getActivity)

module.exports = activityRouter;