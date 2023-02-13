const express = require('express');
const app = express();
const connection = require('./Backend/Connection/db');
const router = require('./Backend/Routes/userRoutes');
const path = require('path');
var bodyParser = require('body-parser');
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', router);

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.static(path.join(__dirname,"/frontend")));  //css call

app.listen(port,()=>{
    console.log(`Form app listening on port ${port}`)
});