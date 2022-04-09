
     //module.exports.addToObject=result
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
     let str
 let as=   function(req, res)
    {
for(let i=0;i<players.length;i++)
{
      let d=req.body.name
   //console.log(players[i].name)
   if(players[i].name===d)
      (str)="person already exists"
   else
    ( players.push(req.body))
}
return res.send(as)

}
let reso=res.send(as)
module.exports.as=reso
