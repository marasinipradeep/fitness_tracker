

const db = require("../models");
module.exports =function(app)  {
    //Routes for getting index page
    app.get("/api/workouts/range",(req,res)=>{

        db.Tracker.find({}).then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })
}