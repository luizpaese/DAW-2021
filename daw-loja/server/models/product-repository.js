const knex = require('../database');

module.exports = {
    find: () => {
        return knex.select().from('product')
    },
    create: (params) => {
        return knex.insert(params).into('product')
    },
    findById: (params) => {
        return knex.select().from('product').where('id', params.id)
    },
    update: (params) => {
        return knex('product').update(params).where('id',params.id)
    },
    delete: (params) => {
        return knex('product').del(params).where('id',params.id)
    }

}