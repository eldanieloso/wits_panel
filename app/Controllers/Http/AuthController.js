'use strict'

class IndexController {

    loginForm({view}){
        return view.render("auth.login")
    }

    async login({auth,request,response,session}) {
        let { nickname, password } = request.all()
        await auth.attempt(nickname, password)

        session.flash({ message: `Bienvenido de nuevo, ${auth.user.name}` })

        return response.route('index')
    }

    async logout({auth,response}) {

        await auth.logout()

        return response.route('loginForm')

    }

}

module.exports = IndexController
