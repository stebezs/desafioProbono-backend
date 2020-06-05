'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LawyerSchema extends Schema {
  up () {
    this.create('lawyers', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('cpf', 80).notNullable().unique()
      table.string('password', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('lawyers')
  }
}

module.exports = LawyerSchema
