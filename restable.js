const Mongoose=require("mongoose")
const RestableModel=Mongoose.model("rtable",Mongoose.Schema({
   tableid:{type:Number},
   tableno:{type:Number},
   book:{type:String},
   rname:{type:String}
}))

module.exports={RestableModel}