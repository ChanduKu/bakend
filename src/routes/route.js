const express = require('express');
const lodash =require('lodash')
const loggs=require("../logger/logger")
const dates=require("../util/helper")
const form=require("../validator/formator")

const router = express.Router();

router.get('/test-me', function (req, res) {
loggs.logs()
    form.fun()
console.log("current date is :",dates.datess)
dates.months()
dates.batch()
res.send("my first ever api")
});



router.get('/hello', function (req, res) {
  const today=new Date()
const months=["January","February","march","April","May","June","July","Agust","Spetember","October","November","December"]
let bb=lodash.chunk(months,3)
    res.send(bb)
let num=[1,3,5,7,9,11,13,15,17,19]
   console.log(lodash.tail(num))
})
router.get('/union',(req,res)=>{
    const ar1=[1,5,6]
    const ar2=[6,3,1]
    const ar3=[5,6,4,9]
    const ar4=[4,5,6,2,6]
    const ar5=[6,5,9]
    res.send(lodash.union(ar1,ar2,ar3,ar3,ar4,ar5))
    const pairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(pairs))
})

module.exports = router;
// adding this comment for no reason