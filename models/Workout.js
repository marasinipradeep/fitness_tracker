const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    totalDuration:{
        type:Number,
        trim: true,
        default:0
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is required"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is required"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Exercise duration is required"

            },
            weight: {
                type: Number,
                trim: true,
                required: "Weight is required"
            },
            reps: {
                type: Number,
                trim: true,
                required: "Reps is required"
            },
            sets: {
                type: Number,
                trim: true,
                required: "sets is required"
            },
            distance: {
                type: Number,
                trim: true,
                required: "distance is required"
            }
           

        }
    ]
}
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;