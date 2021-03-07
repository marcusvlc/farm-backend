const Farm = require('../models/Farm');

module.exports = {
    async store(req, res) {
        const { code, latitude, longitude } = req.body;

        const field = await Field.create({code, latitude, longitude})

        return res.json(field)
    },
    async showAll(req, res) {
        const fields = await Field.findAll()

        return res.json(fields)
    }
}