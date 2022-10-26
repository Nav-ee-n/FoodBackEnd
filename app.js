const Express=require("express")
const MOngoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require("cors")

const{signupModel}=require("./signupModel")
const{RestaddModel}=require("./RestaddModel")




const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())






MOngoose.connect("mongodb+srv://Naveen:boxergiant@cluster0.u3oforn.mongodb.net/test?retryWrites=true&w=majority")

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

app.post("/restadd",async(req,res)=>{
    const restreg=req.body
    const ob=new RestaddModel(restreg)
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

app.post("/login",async(req,res)=>{
    const request =req.body
    signupModel.findOne({ signname:request. signname},(err,sign)=>{
        if(sign){
            if(sign.signpassword == request.signpassword){
                res.send({"success":true,sign:sign});
            }
            else{
                res.send({"success":"Invalid username or password!"});
            }
        }
            else{
                res.send({"success":"No User Found!"})
            }
        
    })
})

app.post("/restaurant",async(req,res)=>{
    const request =req.body
    RestaddModel.findOne({ rname:request. rname},(err,restreg)=>{
        if(restreg){
            if(restreg.rid == request.rid){
                res.send({"success":true,restreg:restreg});
            }
            else{
                res.send({"success":"Invalid username or password!"});
            }
        }
            else{
                res.send({"success":"No User Found!"})
            }
        
    })
})

app.listen(3000,()=>{console.log("Server running at http://localhost:3000")

})