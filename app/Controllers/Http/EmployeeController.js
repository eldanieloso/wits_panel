'use strict'

const Employee = use('App/Models/Employee')

class EmployeeController {

    async index({request, view}){

        let employees = await Employee.all()
        employees = employees.toJSON()
        return view.render("employees.index", {employees})
    }

    create({request, view}){

        return view.render("employees.create")

    }

    async store({request, response}){

        let employee = request._body
        delete employee._csrf
        await Employee.create(employee)
        return response.route("employees.index")

    }

    async delete({params}){

        const { id } = params
        const employee = await Employee.find(id)

        await employee.delete()

    }

}

module.exports = EmployeeController
