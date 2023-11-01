const { Router } = require("express");

const getCountries = require('../controllers/getCountries')
const getName = require('../controllers/getName')
const getId = require('../controllers/getId')


const countryRouter = Router();

countryRouter.get('/', getCountries)
countryRouter.get('/name', getName)
countryRouter.get('/id', getId)


module.exports = countryRouter;