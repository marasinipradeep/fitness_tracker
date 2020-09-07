

const db = require("../models");
module.exports =function(app)  {
    //Routes for getting index page
    app.get("/api/workouts/range",(req,res)=>{

        console.log("inside api workoutsrange")
        db.Tracker.find({}).then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })

    app.get("/api/workouts",(req,res)=>{
        console.log("inside api get workouts")
        db.Tracker.find({}).then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })

    app.post("/api/workouts",(req,res)=>{
        console.log("inside api post workouts")
        console.log(req.body)
        db.Tracker.save({}).then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })

    app.put("/api/workouts/:id",(req,res)=>{

        console.log("inside api workouts id")
        console.log(req.params)
        console.log(req.body)
        db.Tracker
    })
}