const Field = require('../models/Field');

module.exports = {
    async store(req, res) {
        const { code, latitude, longitude, farm_code } = req.body;

        const searchedField = await Field.findByPk(code);

        if(searchedField) return res.status(409).send({fail: true, message: "Não é possível cadastrar dois campos com o mesmo código."});

        console.log(code, latitude, longitude, farm_code)
        const field = await Field.create({code, latitude, longitude, farm_code})


        return res.json(field)
    },
    async showAll(req, res) {
        const fields = await Field.findAll()

        return res.json(fields)
    }
}