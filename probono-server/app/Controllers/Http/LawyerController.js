'use strict'

const Lawyer = use("App/Models/Lawyer");

class LawyerController {
    async index({}) {
        const lawyers = await Lawyer.all();
        
        return lawyers;
    }
    
      async store({ request, response }) {
        const data = request.all();
        console.log(data);
        const lawyer = await Lawyer.create(data);
        
        return response.created(lawyer);
      }
    
      async update({ params, request}) {
        const lawyer = await Lawyer.findOrFail(params.id);
        const data = request.only(["nome", "email"]);
        
        lawyer.merge(data);
        await lawyer.save();
        
        return lawyer
      }
    
      async destroy({ params}) {
        const lawyer = await Lawyer.findOrFail(params.id);
        await lawyer.delete();
      }
}

module.exports = LawyerController
