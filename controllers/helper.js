async function getAll(Schema, req ,res, next) {
    try {
        const games = await Schema.find()
        res.json(games)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function getSingle(Schema, req ,res, next) {
    try {
        const game = await Schema.findOne({_id: req.params.id})
        res.json(game)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function createSingle(data, req ,res, next) {
    try {
        const newgame = await data.save()
        res.status(201).json(newgame)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function updateSingle(Schema, data, req ,res, next) {
    try {
        console.log("_id: req.params.id updateSingle", {_id: req.params.id})
        const updatedgame = await Schema.updateOne({_id: req.params.id}, data)
        res.status(201).json(updatedgame)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function deleteSingle(Schema, req ,res, next) {
    try {
        console.log("_id: req.params.id", {_id: req.params.id})
        const game = await Schema.findOne({_id: req.params.id})
        res.json(game)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports ={
    getAll,
    getSingle,
    createSingle,
    updateSingle,
    deleteSingle
};