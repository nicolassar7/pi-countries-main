const { Activity } = require('../db');
const axios = require('axios');

const getActivity = async(req, res) => {
    try {
        // Realiza una solicitud a la API externa para obtener todos los conductores
        const response = await axios.get('http://localhost:5000/countries');
        const countries = response.data;

        // Inicializa un conjunto para almacenar los nombres de los equipos únicos
        const uniqueActivity = new Set()

        // Itera a través de los conductores y verifica si la propiedad "teams" está definida
        countries.forEach((country) => {
            if (country.activities) {
                const activities = country.activities.split(', ').map((activity) => activity.trim());
                activities.forEach((activity) => {
                    if (activity){
                        uniqueActivity.add(activity)
                    }
                })
            }
        })

        // Convierte el conjunto único en un array
        const allActivity = Array.from(uniqueActivity);

         // Almacena los equipos únicos en la base de datos (si es necesario)
         allActivity.forEach(async (countryActivity) => {
            await Activity.findOrCreate({ where: { name: countryActivity}});
         })
         // Recupera todos los equipos desde la base de datos
         const activitiesFromDb = await Activity.findAll();

         res.status(200).json(activitiesFromDb)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = getActivity
