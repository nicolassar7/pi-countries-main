const axios = require ('axios');
const { Country, Activity } = require('../db');
const  isUUID = require('../utils/isUUID');

module.exports = async (req, res) =>  {
    const {cca3} = req.params;

    try {
        let countryDetails;

        if (isUUID(cca3)){

            const countryById = await Country.findByPk(cca3, {
                include: [{
                    model: Activity,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }]
            });

            if (!countryById) {
                throw new Error('country not found!');
            };

            countryDetails = {
                ...countryById.dataValues,
                activity: countryById.dataValues.activity.map(t => t.name)
            }
        } else {
            const response = await axios.get(`http://localhost:5000/countries/${cca3}`)
            const apiFind = response.data;

            countryDetails = {
                cca3: apiFind.cca3,
                name: apiFind.name,
                flags: apiFind.flag,
                continents: apiFind.continents,
                capital: apiFind.capital,
                subregion: apiFind.subregion,
                area: apiFind.area,
                population: apiFind.population,
            }
        }
        res.status(200).json(countryDetails);
    } catch (error) {
        res.status(404).json({ error: error.message });  
    }
}