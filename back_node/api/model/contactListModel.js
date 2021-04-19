// create for input data from database
'use strict'
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var ContactSchema = new Schema({
  contact_id: {type : String , required : 'Please Enter contact id'} ,
  firstname : {type : String , required : 'Please Enter firstname'},
  lastname : {type : String , default: ''},
  middlename : {type : String , default: ''}, 
  gender :  {type : String , required : 'Please Enter gender'} ,
  email :  {type : String , required : 'Please Enter email'} ,
  mobile :  {type : String , required : 'Please Enter mobile'} ,
  image : {type : String , default: ''} 
})

var AccountSchema = new Schema({
  Username:{type : String , required : 'Please Enter Username'},
  Password:{type : String , required : 'Please Enter Password'}
})

module.exports.Contact = mongoose.model('Contacts', ContactSchema ,'Contacts')
module.exports.Account = mongoose.model('Accounts', AccountSchema ,'Accounts') //(<collection_name>,<schema>)