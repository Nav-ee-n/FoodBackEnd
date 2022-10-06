const Express=require("express")
const MOngoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require("cors")

const{signupModel}=require("./signupModel")




const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())






MOngoose.connect("mongodb+srv://Naveen:boxergiant@cluster0.u3oforn.mongodb.net/?retryWrites=true&w=majority")

app.post("/custcreate",async(req,res)=>{
    const sign=req.body
    const ob=new signupModel(sign)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {
            res.send(data)
        }
    })
})

app.listen(3000,()=>{console.log("Server running at http://localhost:3000")

})