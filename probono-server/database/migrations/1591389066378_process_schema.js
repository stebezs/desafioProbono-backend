'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProcessSchema extends Schema {
  up () {
    this.create('processes', (table) => {
      table.increments()
      table.string('process', ).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('processes')
  }
}

module.exports = ProcessSchema
