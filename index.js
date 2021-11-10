var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/login",(req,res)=>
{
var email=req.body.email;
var password=req.body.password;
var user=req.body;


 db.collection('users').findOne({password:user.password},{name:user.name},function (err,existinguser)
{

    
    if(existinguser!=null)
    {
        
    res.redirect('pysc.html')

}
else
{
    res.redirect('login_fail.html')
}
})
})



app.post("/change",(req,res)=>
{
var email=req.body.email;
var password=req.body.password;
var user=req.body;


 db.collection('users').findOne({name:user.name,password:user.password},function (err,existinguser)
{

    
    if(existinguser!=null)
    {
        
        db.collection('users').updateOne({name:user.name},{$set:{password:user.newpassword}})
res.redirect('index.html')
}
else
{
    res.redirect('login_fail.html')
}
})
})

app.post("/sign",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var user=req.body;

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
    }

   
    db.collection('users').findOne({name:user.name},function (err,existinguser)
    {
        if(existinguser==null)
        {
                
    db.collection('users').insertOne(data,(err,collection)=>
    {
        if(err)
        {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')
        }
        else{
           return res.redirect('alreadyexists.html')

        }
    })



    
})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");