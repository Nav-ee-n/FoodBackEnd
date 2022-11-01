const Mongoose=require("mongoose")
const Feedback=Mongoose.model("feedbacks",Mongoose.Schema({
   name:{type:String},
   rname:{type:String},
   fdk:{type:String}
}))

module.exports={Feedback}