const Mongoose=require("mongoose")
const RestableModel=Mongoose.model("restable",Mongoose.Schema({
   tableid:{type:Number},
   tableno:{type:Number},
   book:{type:String},

}))

module.exports={RestableModel}