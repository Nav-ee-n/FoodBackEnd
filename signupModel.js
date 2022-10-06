const Mongoose=require("mongoose")
const signupModel=Mongoose.model("customers",Mongoose.Schema({
    signphonenumber:String,
    signname:String,
    signemail:String,
    signpassword:String

}))

module.exports={signupModel}