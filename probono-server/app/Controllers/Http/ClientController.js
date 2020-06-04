'use strict'

const Client = use("App/Models/Client");

class ClientController {
  async index({}) {
    const clients = await Client.all();
    
    return clients;
}

  async store({ request, response }) {
    const data = request.all();
    console.log(data);
    const client = await Client.create(data);
    
    return response.created(client);
  }

  async update({ params, request}) {
    const client = await Client.findOrFail(params.id);
    const data = request.only(["nome", "email"]);
    
    client.merge(data);
    await client.save();
    
    return client
  }

  async destroy({ params}) {
    const client = await Client.findOrFail(params.id);
    await client.delete();
  }
  }

module.exports = ClientController
