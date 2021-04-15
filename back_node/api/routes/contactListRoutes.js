'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListController')

    app.route('/contacts/getmany')
    .get(contactList.listAllContacts)
    app.route('/contacts/add')
    .post(contactList.createAContact)

    app.route('/contacts/get/:contact_fname')
    .get(contactList.readAContactbyFirstname)
    app.route('/contacts/update/:contact_fname')
    .put(contactList.updateAContactbyFirstname)
    app.route('/contacts/delete/:contact_fname')
    .delete(contactList.deleteAContactbyFirstname)

}