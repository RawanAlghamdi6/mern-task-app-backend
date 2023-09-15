const express = require ("express"); // get express 
const Task = require ("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../Controllers/taskController");
const router = express.Router()

// Create Task
router.post("/" , createTask);
// Get / Read Tasks 
router.get("/" , getTasks);
// Get / Read Task
router.get("/:id" , getTask);
// Delete Task
router.delete("/:id" , deleteTask);
// ubdate Task 
router.put("/:id" , updateTask); /* PATCH is used to apply partial updates to a resource, meaning that only the fields that need to be changed are sent in the request body. 
                                              PUT is used to replace the entire resource with a new representation, meaning that all the fields of the resource are sent in the request body, even if they are not modified.
*/ 

module.exports = router
