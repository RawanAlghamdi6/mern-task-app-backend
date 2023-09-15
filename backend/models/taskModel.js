const mongoose = require ("mongoose");


const taskSchema = mongoose.Schema (
    {
        name: {
            type:String,
            required: [true, "Please add a task"]
        }, 
        addMember: {
            type:String,
            required: [true, "Please add a Member"]
       }, 
        endDate: {
            type:Date,
            required: [true, "Please add a Date"]
        }, 
        startDate: {
            type:Date,
            required: [true, "Please add a Date"]
        }, 
        projectClassification: {
            type:String,
            required: [true, "Please add a classification"]
        },
        points: {
            type:String,
            required: [true, "Please add a points"]
        }, 
        description: {
            type:String,
            required: [true, "Please add a description"]
        }, 
        completed: {
            type:Boolean,
            required:true,
            default:false
        },
    }, 
    {
        timestamps:true
    }
)

const Task = mongoose.model("Task", taskSchema)  //Task Model  name of model, schema 

module.exports = Task 