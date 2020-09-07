const db = require("../models");
const path =require("path")

module.exports =function(app)  {
    //Routes for getting index page
    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"../Develop/public/index.html"))
    })

    app.get("/exercise",(req,res)=>{
        res.sendFile(path.join(__dirname,"../Develop/public/exercise.html"))
    })

    app.get("/stats",(req,res)=>{
        res.sendFile(path.join(__dirname,"../Develop/public/stats.html"))
    })
}