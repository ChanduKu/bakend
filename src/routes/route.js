const express = require('express');
const lodash =require('lodash')


const router = express.Router();


let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]
    


router.post('/newpost',(req,res)=>
{
    let data=req.body.name
   const l= players.filter(i=>i.name===data) 

    let fun=function(){
        if(l.length!=0)
        return ("person already exists")
        else
        {
            players.push(req.body)
        return players
    }
        
    }
console.log(fun())

//console.log(l)

// players.push(req.body)
return res.send(fun())
})
router.get('/films',(req,res)=>res.send(moives_obj))

router.post('/test-post',(req,res)=>console.log(req.body))





module.exports = router;
// adding this comment for no reason