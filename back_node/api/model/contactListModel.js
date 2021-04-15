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

module.exports= mongoose.model('Contact', ContactSchema ,'Contacts') //(<collection_name>,<schema>)