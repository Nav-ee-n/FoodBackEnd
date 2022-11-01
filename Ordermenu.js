const Mongoose=require("mongoose")
const OrderMenu=Mongoose.model("ordermenu",Mongoose.Schema({
   menuId:{type:Number},
   foodName:{type:String},
   foodPrice:{type:Number},
   rname:{type:String},
   signname:{type:String}
}))

module.exports={OrderMenu}