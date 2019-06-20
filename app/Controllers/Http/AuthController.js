'use strict'

class IndexController {

    loginForm({view}){
        return view.render("auth.login")
    }

    async login({auth,request,response}) {
        let { nickname, password } = request.all()
        await auth.attempt(nickname, password)

        return response.route('index')
    }

    async logout({auth,response}) {

        await auth.logout()

        return response.route('loginForm')

    }

}

module.exports = IndexController
