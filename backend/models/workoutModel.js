const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })
//Mongoose will enforce type check by default to all the data that is being inserted into it.
//Validation will fail if any of the required field is absent in request.

module.exports = mongoose.model("Workout", workoutSchema) // exports the schema as model
