const Mongoose=require("mongoose")
const RestaddModel=Mongoose.model("Restaurantdetails",Mongoose.Schema({
    rname:String,
    rid:String,
    runame:String,
    phoneno:String,
    location:String
    
}))

module.exports={RestaddModel}