'use strict'

class IndexController {

    index({request, view}){
        return view.render("index")
    }

}

module.exports = IndexController
