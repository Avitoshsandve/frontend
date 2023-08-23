const fs=require("fs");
function callbackfn(err,data){
    console.log(data);
}
fs.readFile("avi.txt","utf-8",callbackfn);



const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.status(302).redirect('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







function calcsum(counter)
{
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;
}
var calcsum=calcsum(100);
console.log(calcsum)