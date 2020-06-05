'use strict'

class StoreClient {
  get rules () {
    return {
      email: 'required|email|unique:clients',
      password: 'required'
    }
    }
    get messages () {
      return {
        'email.required': 'You must provide a email address.',
        'email.email': 'You must provide a valid email address.',
        'password.required': 'You must provide password.'
      }
    } 
}

module.exports = StoreClient
