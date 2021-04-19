'use strict'
module.exports = function(app){
    var controller = require('../controllers/contactListController')

    //====== Contacts ======//
    app.route('/contacts/getmany')
    .get(controller.listAllContacts)
    app.route('/contacts/add')
    .post(controller.createAContact)

    app.route('/contacts/get/:id')
    .get(controller.readAContactbyId)
    app.route('/contacts/update/:id')
    .put(controller.updateAContactbyId)
    app.route('/contacts/delete/:contact_fname')
    .delete(controller.deleteAContactbyFirstname)

    //====== Accounts ======//
    app.route('/accounts/getmany')
    .get(controller.listAllAccounts)
    app.route('/accounts/get/:Username')
    .get(controller.readAAccountbyUsername)
    
}