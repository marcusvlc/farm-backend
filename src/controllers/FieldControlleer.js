const Field = require('../models/Field')

module.exports = {
    async store(req, res) {
        const { code, latitude, longitude } = req.body;

        const field = await Field.create({code, latitude, longitude})

        return res.json(field)
    }
}