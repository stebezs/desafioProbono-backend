'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProcessSchema extends Schema {
  up () {
    this.create('lawSuit', (table) => {
      table.increments()
      table.string('process', 20).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('lawSuit')
  }
}

module.exports = ProcessSchema
