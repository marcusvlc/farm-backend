const Harvest = require('../models/Harvest')
const Mill = require ('../models/Mill')

module.exports = {
    async store(req, res) {
        const { code, start_at, ended_at, mill_code } = req.body;

        const mill = await Mill.findByPk(mill_code);

        if(!mill) return res.status(404).send({fail: true, message: "Usina não encontrada! Uma Safra deve possuir uma Usina!"});

        const findHarvest = await Harvest.findByPk(code)

        if(findHarvest) return res.status(409).send({fail: true, message: "Já existe uma safra com esse código, tente outro."});

        const harvest = await Harvest.create({code, start_at, ended_at, mill_code});

        return res.json(harvest);
    },
    async showAll(req, res) {
        const harvests = await Harvest.findAll()

        return res.json(harvests)
    }
}