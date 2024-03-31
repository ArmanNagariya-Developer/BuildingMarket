const express = require("express")
const mongos = require("mongoose")
const cors = require("cors")
const StudentModel = require("./model/auth")

const app = express()
app.use(express.json())
app.use(cors())

mongos.connect("mongodb://127.0.0.1:27017/BuildingMarketDB");

app.post("/register",(req,res)=>{
StudentModel.create(req.body).then(student=>res.json(student)).catch(err=>res.json(err));

});

app.post("/login",(req,res)=>{
const {email,password} = req.body;
StudentModel.findOne({email:email})
.then(user=>{
    if(user)
    {
        if(user.password === password)
        {
            res.json("Success")
        }
        else
        {
            res.json("Password or UserEmail is Not Correct : Error")
        }
    }
    else
    {
        res.json("email is not exists")
    }
}).catch(err=>console.log(err));
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});
