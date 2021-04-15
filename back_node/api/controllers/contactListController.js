'use strict'

var mongoose = require('mongoose')
Contact = mongoose.model('Contact')

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
            message: "Create a contact successfully",
        }
        res.json(response)
    })
}

exports.readAContactbyFirstname = function(req,res){
    Contact.findOne({firstname: req.params.contact_fname},function(err, contact){
        if (err) console.error(err)
        res.json(contact)
      })
}

exports.deleteAContactbyFirstname = function(req,res){
    Contact.findOneAndRemove({firstname: req.params.contact_fname}, function(err, contact){
        if(err) throw err
        const response = {
            message: "Delete a contact by first name: "+ req.params.contact_fname +" successfully",
            id: contact._id
        }
        res.json(response)
    })
}

exports.updateAContactbyFirstname = function(req,res){
    console.log(req.params.userID)
    var newContact = {}
    newContact = req.body
    console.log(newContact)
    Contact.findOneAndUpdate({firstname: req.params.contact_fname}, newContact, {new: true}, function(err, contact){
        if(err) throw err
        const response = {
            message: "Update a contact by first name: "+ req.params.contact_fname +" successfully",
            id: contact._id
        }
        res.json(response)
    })
}
