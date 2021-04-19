'use strict'

var mongoose = require('mongoose')
Contact = mongoose.model('Contacts')
Account = mongoose.model('Accounts')

exports.listAllContacts = function(req,res){
    Contact.find({},null,null,function(err,contact){
        if(err) throw err 
        res.json(contact)
    })
}

exports.createAContact = function(req,res){
    var newContact = new Contact(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        const response = {
            message: "Create a contact successfully"
        }
        res.json(response)
    })
}

exports.readAContactbyId = function(req,res){
    Contact.findById(req.params.id,function(err, contact){
        if (err) console.error(err)
        res.json(contact)
      })
}

exports.deleteAContactbyFirstname = function(req,res){
    Contact.findOneAndRemove({firstname: req.params.contact_fname}, function(err, contact){
        if(err) throw err
        const response = {
            message: "Delete a contact by first name: "+ req.params.contact_fname +" successfully",
        }
        res.json(response)
    })
}

exports.updateAContactbyId = function(req,res){
    var newContact = {}
    newContact = req.body
    Contact.findByIdAndUpdate(req.params.id, newContact, {new: true}, function(err, contact){
        if(err) throw err
        const response = {
            message: "Update a contact successfully",
        }
        res.json(response)
    })
}

//=========== Accounts ===========//
exports.listAllAccounts = function(req,res){
    Account.find({},null,null,function(err,account){
        if(err) throw err 
        res.json(account)
    })
}

exports.readAAccountbyUsername = function(req,res){
    Account.findOne({Username:req.params.Username},function(err, account){
        if (err) console.error(err)
        res.json(account)
      })
}