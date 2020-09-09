const db = require("../models");
module.exports =function(app)  {
    app.get("/api/workouts",(req,res)=>{
        console.log("inside api get workouts")
        db.Workout.find({})
        .sort({day:1})
        .then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })

    app.post("/api/workouts",(req,res)=>{
        console.log("inside api post workouts")
        console.log(req.params)
        db.Workout.create(req.body).then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })


    app.put("/api/workouts/:id",
    (req,res)=>{
        console.log("inside api workouts id")
        const {duration}=req.body
        console.log(duration)
         db.Workout.findByIdAndUpdate(req.params.id,
            {
            $push:{exercises:req.body},
            $inc:{totalDuration:duration}
        },{
            new:true
        }).then(dbTracker=>{
            console.log("Db updated successfully")
            res.json(dbTracker)
        }).catch(err=>{
            res.json(err)
        })
    })

    app.get("/api/workouts/range",(req,res)=>{

        console.log("inside api workoutsrange")
        db.Workout.find({}).then(dbTracker=>{
            console.log(dbTracker)
            res.json(dbTracker)

            }).catch(err=>{
                res.json(err)
            })
    })

}