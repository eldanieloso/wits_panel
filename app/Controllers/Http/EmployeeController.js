'use strict'

const Employee = use('App/Models/Employee')

class EmployeeController {

    async index({view}) {

        let employees = await Employee.all()
        employees = employees.toJSON()
        return view.render("employees.index", {employees})
    }

    create({view}) {

        return view.render("employees.create")

    }

    async store({request, response, session}) {

        let employee = request._body
        delete employee._csrf
        await Employee.create(employee)
        session.flash({ message: 'Empleado agregado correctamente!' })
        return response.route("employees.index")

    }

    async edit({params, view}) {

        const { id } = params
        let employee = await Employee.find(id)
        employee = employee.toJSON()

        return view.render("employees.edit", {employee})

    }

    async update({params, request, session, response}) {

        const { id } = params

        const body = request._body

        let employee = await Employee.find(id)

        employee.name = body.name
        employee.position = body.position
        employee.salary = body.salary
        employee.photo = body.photo

        await employee.save()

        session.flash({ message: 'Empleado modificado correctamente!' })

        return response.route("employees.index")

    }

    async destroy({params, session, response}) {

        const { id } = params
        const employee = await Employee.find(id)

        await employee.delete()

        session.flash({ message: 'Empleado eliminado correctamente!' })

        return response.route("employees.index")

    }

}

module.exports = EmployeeController
