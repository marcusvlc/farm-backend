const Mill = require('../models/Mill')

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const mill = await Mill.create({name })

        return res.json(mill)
    }
}