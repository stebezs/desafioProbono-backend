'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LawyerSchema extends Schema {
  up () {
    this.create('lawyers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('lawyers')
  }
}

module.exports = LawyerSchema
