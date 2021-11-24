const repository = require('../models/brand-repository');

module.exports = {

    index: async (req, res) => {
        
        try {
            
            const result = await repository.find();
            return res.json(result);

        } catch (error) {
            res.status(500).json({message: error.message})
        }

    },

    create: async (req, res) => {

        const brand = req.body;

        try {
            
            const result = await repository.create(brand);
            return res.status(201).json(result);

        } catch (error) {
            res.status(500).json({message: error.message})
        }

    },

    show: async (req, res) => {
        try {
            
            const result = await repository.findById(req.params);

            if (result.length === 0) {
                return res.status(404).json({message: 'Not found'});
            }

            return res.json(result)

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    update: async (req, res) => {
        const brand = req.body;

        try {
            
            const result = await repository.findById(req.params);

            if (result.length === 0) {
                return res.status(404).json({message: 'Not found'});
            }

            await repository.update(brand);

            return res.json(brand)

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    delete: async (req, res) => {
        try {
            
            const result = await repository.findById(req.params);

            if (result.length === 0) {
                return res.status(404).json({message: 'Not found'});
            }

            await repository.delete(req.params);

            return res.status(204).json();

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

}