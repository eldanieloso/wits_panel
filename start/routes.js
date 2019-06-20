'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/login', "AuthController.loginForm").as("loginForm")
Route.post('/login/auth', "AuthController.login").as("login")
Route.get('/logout', "AuthController.logout").as("logout")

Route.group('auth', () => {

    Route.get('/', 'IndexController.index').as("index")

    //Employees
    Route.resource("employees", "EmployeeController")

}).middleware('auth')