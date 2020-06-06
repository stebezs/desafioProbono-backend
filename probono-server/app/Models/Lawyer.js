'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Lawyer extends Model {

    process () {
        return this.hasMany('App/Models/Process')
      }
}

module.exports = Lawyer
