var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbms"
});

app.post('/insert',function(req , res){
  switch(req.body.tablename){
    case 'vehicleinfo':
    con.query("insert into vehicleinfo values(?,?,?,?,?)", [req.body.licenseplate,req.body.vehicleid,req.body.colour,req.body.roadid,req.body.licenseno],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        console.log(result);
        res.send("true");
      }
    });
    break;
    case 'road':
    con.query("insert into road values(?,?,?,?,?)", [req.body.roadid,req.body.town,req.body.junctionid,req.body.to,req.body.from],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'junction':
    con.query("insert into junction values(?,?,?)", [req.body.junctionid,req.body.name,req.body.type],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'type':
    con.query("insert into type values(?,?,?)", [req.body.vehicleid,req.body.type,req.body.model],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'traffic':
    con.query("insert into traffic values(?,?,?,?,?,?)", [req.body.roadid,req.body.bike,req.body.car,req.body.jeep,req.body.bus,req.body.total],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'trafficpolice':
    con.query("insert into trafficpolice values(?,?,?,?)", [req.body.tpid,req.body.stationid,req.body.aadharno,req.body.junctionid],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'station':
    con.query("insert into station values(?,?,?,?)", [req.body.stationid,req.body.stationname,req.body.area,req.body.incharge],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'license':
    con.query("insert into license values(?,?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.licenseno,req.body.firstname,req.body.lastname,req.body.issuedon,req.body.expirydate,req.body.type,req.body.dob,req.body.phoneno,req.body.address,req.body.state,req.body.bloodgroup,req.body.fathersname,req.body.aadharno],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    case 'personaldetail':
    con.query("insert into driverdetail values(?,?,?)", [req.body.aadharno,req.body.age,req.body.sex],function (err, result) {
      if(err>0){
        res.send("false");
      }
      else{
        res.send("true");
      }
    });
    break;
    default:
    break;
  }
})
app.post('/login',function(req,res){
  if(req.body.username=='root'&&req.body.password=='root'){
    res.send("true");
  }
  else{
    res.send("false");
  }
})
app.post('/display',function(req,res){
  con.query("select * from traffic",function(err,result){
    res.send(result);
  })
})

app.listen(3001, () => {
  console.log('Server started');
});
