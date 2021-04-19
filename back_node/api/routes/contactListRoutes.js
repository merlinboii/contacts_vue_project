'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListController')

    app.route('/contacts/getmany')
    .get(contactList.listAllContacts)
    app.route('/contacts/add')
    .post(contactList.createAContact)

    app.route('/contacts/get/:_id')
    .get(contactList.readAContactby_id)
    app.route('/contacts/update/:id')
    .put(contactList.updateAContactbyId)
    app.route('/contacts/delete/:contact_fname')
    .delete(contactList.deleteAContactbyFirstname)

}