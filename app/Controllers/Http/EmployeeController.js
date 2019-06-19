'use strict'

class EmployeeController {

    index({request, view}){
        let employees = [
            {
                name: "Daniel Ruvalcaba",
                position: "Agile Team Leader",
                salary: 1000
            },
            {
                name: "John Doe",
                position: "Frontend",
                salary: 3000
            }
        ]
        return view.render("employees.index", {employees})
    }

}

module.exports = EmployeeController
