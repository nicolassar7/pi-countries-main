const { Activity, Country } = require('../db');


const getActivity = async(req, res) => {
    try{
        const activity = await Activity.findAll({include: Country})
        res.status(200).json(activity)
    }catch(error){
        res.status(500).json(error.message)
    }
};

module.exports = getActivity
