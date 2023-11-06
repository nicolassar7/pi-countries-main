const axios = require('axios');
const { Country, Activity } = require('../db');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
        let countryDetails;

        const countryById = await Country.findByPk(id, {
            include: [{
                model: Activity,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        });
        console.log(countryById)

        if (countryById) {
            countryDetails = {
                ...countryById.dataValues,
                activity: countryById.dataValues.activity.map(t => t.name)
            };
        } else {
            const response = await axios.get(`http://localhost:5000/countries/`);
const apiFind = response.data; // Acceder a los datos reales de la API

countryDetails = {
    id: apiFind.cca3,
    name: apiFind.name,
    flags: apiFind.flag,
    continents: apiFind.continents,
    capital: apiFind.capital,
    subregion: apiFind.subregion,
    area: apiFind.area,
    population: apiFind.population,
};

        }

        res.status(200).json(countryDetails);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
