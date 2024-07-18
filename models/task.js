import mongoose, { Schema, Schema } from "mongoose";

let notesSchema= new Schema({

    title:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true
    }
})

const Task= mongoose.model('Notes',notesSchema)