const express = require('express');
const http = require('http');
const bodyParser = require("body-parser")
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({
    extended:true
}));


  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });
app.post('/', function(req,res){
  var   date2 = req.body.date1;
    var val = req.body.inputname;
    var inputYear = new Date(date2);
    const date = inputYear.getFullYear(); 
    var currentYear= new Date().getFullYear();
    var  num1 = Number(currentYear);
    var  num2 = Number(date);
    var num3 = num1 - num2;
    
 //   res.send(val);
    res.send( "Hello " + val + " Your age is "  + num3 + " "+"Years");
   
                                                            // var date = new Date().toLocaleDateString() ;
                                                            // res.write(date);

});
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
