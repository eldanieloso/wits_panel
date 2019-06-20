'use strict'

class AuthMiddleware {
  async handle ({ request, response, auth }, next) {
    // call next to advance the request
    if(!auth.user){
      return response.redirect('/login')
    }

    await next()
  }
}

module.exports = AuthMiddleware