const express = require('express');
const lodash =require('lodash')

const router = express.Router();

const movies=["Dragon Balls","one punch man","Demon slayer","Attack on Titans","Death note","Naruto "]
router.get('/moivies',(req,res)=>res.send(movies))
router.get('/movies/:index',(req,res)=>
{
    const arr=[]
    if(req.params.index>movies.length)
    res.send("Given index is invalid")
    for(let i=0;i<req.params.index;i++)
    arr.push(movies[i])
    res.send(arr)
})


    let  moives_obj=[{
    "id":1,"name":"shutter island"},
    {"id":2,"name":"breaking bad"},
    {"id":3,"name":"frends"},
    {"id":4,"name":"sheldon"}
]

    

router.get('/films',(req,res)=>res.send(moives_obj))
router.get('/films/:in',(req,res)=>
{
    const ar=[]
    if(req.params.in>moives_obj.length)
    res.send("given index is not avialable")
    for(let i=0;i<req.params.in;i++)
    ar.push(moives_obj[i])
    res.send(ar)
}

)


module.exports = router;
// adding this comment for no reason