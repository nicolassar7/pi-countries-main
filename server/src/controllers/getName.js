const axios = require('axios');
const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

module.exports = async (req, res) => {
    if (req.query.name) {
        const name = req.query.name.toLowerCase();
        try {
            dispatch({ type: 'CLEAR_DRIVER_DATA'})
            const dbSearchCountries = await Country.findAll({
                attributes: ['cca3', 'image', 'name'],
                include: [{
                    model: Activity,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }],
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });

            if (dbSearchCountries.length) {
                res.status(200).json(dbSearchCountries[0]);
            } 

            const response = (await axios(`http://localhost:5000/countries?name=${name}`)).data;
            if (response && typeof response === 'object' && response.cca3) {
                const apiCountries = {
                    cca3: response.cca3,
                    name: response.name,
                    flags: response.flags,
                    activity: response.activity
                };
                res.status(200).json(apiCountries);
            } else{
                console.log("La respuesta de la API externa no tiene el formato esperado");
                res.status(404).json({ error: 'API response format is invalid'});
            }
        } catch (error) {
            console.error('Error al buscar países:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } 
};
