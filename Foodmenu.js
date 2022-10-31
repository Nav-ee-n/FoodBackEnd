const Mongoose=require("mongoose")
const FoodMenu=Mongoose.model("foodmenu",Mongoose.Schema({
   menuId:{type:Number},
   foodName:{type:String},
   foodPrice:{type:Number},
   rname:{type:String}
}))

module.exports={FoodMenu}