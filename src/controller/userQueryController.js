const userModel = require("../model/userQueryModel");
const {validator} = require("../utils")

// DATA QUERY API

const UserQueryAPI = async function (req,res) {
  try {
    const userData = req.body

   // empty or invalid body validator 
   if(!validator.isValidRequestBody(userData)){
    return res.status(400).send({status:false, message:`please fill up given information `})
   }
    
    const  {fname,lname, mobile, email, query} = userData
    
    //===> validator start
    
    // fname validator
    if(!fname){
      return res.status(400).send({status:false, message: "First name is mandatory"})
    }
    if(!validator.validName(fname)){
      return res.status(400).send({status:false, message:`First name should be in alphabet only `})
    }

    // lname validator
    if(!lname){
      return res.status(400).send({status:false, message: "Last name is mandatory"})
    }
    if(!validator.validName(lname)){
      return res.status(400).send({status:false, message:`Last name should be in alphabet only `})
    }

    // mobile validator 
    if(!mobile){
      return res.status(400).send({status:false,message:`mobile number is required`})
    }
    if(!validator.isValidPhone(mobile)){
      return res.status(400).send({status:false, message:`please enter correct mobile number`})
    }
    let isMobileAlreadyExists = await userModel.findOne({mobile:mobile})
    if(isMobileAlreadyExists){
      return res.status(409).send({status:false,message:`given mobile number is already exists`})
    }

    // email validator 
    if(!email){
      return res.status(400).send({status:false, message:`Email is mandatory`})
    }
    if(!validator.isValidEmail(email)){
      return res.status(400).send({status:false, message:`Please enter correct email`})
    }

    let isEmailAlreadyExists = await userModel.findOne({email:email})
    if(isEmailAlreadyExists){
      return res.status(409).send({status:false,message:`given email is already exists`})
    }

    // query validator
    if(!query){
      return res.status(400).send({status:false, message:`please fill up your query`})
    }

       // here, in the query user can fill number,special character, etc?????


    // create database of user'query 
    const saveUserData = await userModel.create(userData)
    return  res.status(201).send({status:true, message: "your query successfully submitted"})

  } 
  catch(err){
    return res.send({message: err.message})
    }
};

module.exports = {
  UserQueryAPI,
};
