'use strict'

const Route = use('Route')
const { validate } = use('Validator')

Route.resource('clients', 'ClientController',
)
  .apiOnly()
  .validator('StoreClient')
  