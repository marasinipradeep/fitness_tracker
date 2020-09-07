const mongoose =require("mongoose");
const Schema =mongoose.Schema;
const TrackerSchema = new Schema({

    day:{
        type:Date
    },
    exercises:[
        {
            type:String,
            name:String,
            duration:Number,
            weight:Number,
            reps:Number,
            sets:Number

        }
    ]

});

const Tracker = mongoose.model("Tracker",TrackerSchema);

module.exports =Tracker;