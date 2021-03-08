const Farm = require('../models/Farm');

module.exports = {
    async store(req, res) {
        const { code, name, harvest_code } = req.body;

        const farm = await Farm.create({code, name, harvest_code})

        return res.json(farm)
    },
    async showAll(req, res) {
        const farms = await Farm.findAll()

        return res.json(farms)
    }
}