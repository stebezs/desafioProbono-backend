'use strict'

const Process = use("App/Models/Process");

class ProcessController {
    async index({}) {
        const lawSuit = await Process.all();
        
        return lawSuit;
    }
    
      async store({ request, response }) {
        const data = request.all();
        console.log(data);
        const process = await Process.create(data);
        
        return response.created(process);
      }
    
      async update({ params, request}) {
        const process = await Process.findOrFail(params.id);
        const data = request.only(["process"]);
        
        process.merge(data);
        await process.save();
        
        return process
      }
    
      async destroy({ params}) {
        const process = await Process.findOrFail(params.id);
        await process.delete();
      }
}

module.exports = ProcessController
