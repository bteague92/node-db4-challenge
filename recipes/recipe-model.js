const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id })
}

function findSteps(schemeId) {
    return db('schemes')

}

function add(scheme) {
    return db('schemes')

}

function update(changes, id) {
    return db('schemes')

}

function remove(id) {
    return db('schemes')

}