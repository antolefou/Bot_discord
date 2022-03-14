const express = require("express");
const app = express();
var router = express.Router();
//later
const bodyParser = require("body-parser");
const port=8081;

var direction = "right";

//enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


app.use(bodyParser.json());

router.post("/changeDirection", (req,res)=>{
    direction = req.body.changeDir;
    console.log(req.body.changeDir)
})

app.use("",router)

app.listen(port,()=>{
    console.log(`Le serveur ecoute sur le port ${port}`);
    console.log(`http://localhost:${port}`);
});

function changeActualDir() {
    return direction;
}


module.exports = {direction: direction, changeActualDir:changeActualDir };


