let today =new Date()
let d=date1()
function date1()
{   

return(today.getDate())
}
let month = function() {
    let currentDate = new Date()
    console.log('The current months is : ', currentDate.getMonth() + 1)
}

let batch_info = function() {
    console.log('Uranium, W2D4, the topic for today is Nodejs module system assignment discussion')
}
module.exports.datess=d
module.exports.months=month
module.exports.batch=batch_info