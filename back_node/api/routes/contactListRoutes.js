'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListController')

    app.route('/contacts/getmany')
    .get(contactList.listAllContacts)
    app.route('/contacts/add')
    .post(contactList.createAContact)

    app.route('/contacts/update/:contact_fname')
    .get(contactList.readAContactbyFirstname)
    .put(contactList.updateAContactbyFirstname)
    .delete(contactList.deleteAContactbyFirstname)

}