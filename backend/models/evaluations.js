/*
fields:
comment
grade
role
idEmployee
*/

import { Schema, model } from "mongoose";

const evaluationsSchema = new Schema({
    comment:{
        type: String,
        require: true
    },
    grade:{
        type: Number,
        require: true,
        min: 1,
        max: 10
    },
    role:{
        type: String,
        require: true
    },
    idEmployee: {
        type: Schema.Types.ObjectId,
        ref: "Employees",
        require: true
    },
}, {
    timestamps: true,
    strict: false
})

export default model ("Evaluations", evaluationsSchema);