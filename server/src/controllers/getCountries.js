const axios = require('axios')
const { Country, Activity} = require('../db');

module.exports = async(req, res) => {
    try {
        const countries = await Country.findAll({
            include: [{
                model: Activity,
                attributes: ['name'],
                through:{
                    attributes:[]
                }
            }]
        });

        const getCountries = countries.map(d => {
            return {
                cca3: d.dataValues.cca3,
                name: d.dataValues.name,
                flags: d.dataValues.flags,
                continents: d.dataValues.continents,
                capital: d.dataValues.capital,
                subregion: d.dataValues.subregion,
                area: d.dataValues.area,
                population: d.dataValues.population
            }
        })
        const response = (await axios('http://localhost:5000/countries')).data;

        const apiCountries = response.map (b => {
            return{
                cca3: b.cca3,
                name: b.name,
                flags: b.flags,
                continents: b.continents,
                capital: b.capital,
                subregion: b.subregion,
                area: b.area,
                population: b.population,

            }
        })
        res.status(200).json([...getCountries, ...apiCountries])
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}