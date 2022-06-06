const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(morgan('dev'));
app.use((req:any, res:any, next:any) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
    res.header('Access-Control-Allow-Origin','GET, POST, OPTIONS, PUT, DELETE, OPTIONS');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require("./all")(app);

const port = 3004;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
