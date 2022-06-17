//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app= express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/signUp.html")
});

app.post('/',function(req,res){

    const fn=req.body.fn
    const ln=req.body.ln
    const email=req.body.email

    console.log(fn,ln, email);

    const data = {
        member: [
            {
                email_address:email,
                status:'subscribed',
                merge_fields:{
                    FNAME:fn,
                    LNAME:ln
                }
            }
        ]
    };

    const jsonData= JSON.stringify(data)


res.send("ok")
});




app.listen(3000,function(){
    console.log("Port 3000 is Active Now")
});







// api key :  8bb1cb7097007a1d31a93ec9bd44072f-us18

